# `ioteventsAlarmModel` Submodule <a name="`ioteventsAlarmModel` Submodule" id="@cdktn/provider-awscc.ioteventsAlarmModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IoteventsAlarmModel <a name="IoteventsAlarmModel" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model awscc_iotevents_alarm_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModel;

IoteventsAlarmModel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alarmRule(IoteventsAlarmModelAlarmRule)
    .roleArn(java.lang.String)
//  .alarmCapabilities(IoteventsAlarmModelAlarmCapabilities)
//  .alarmEventActions(IoteventsAlarmModelAlarmEventActions)
//  .alarmModelDescription(java.lang.String)
//  .alarmModelName(java.lang.String)
//  .key(java.lang.String)
//  .severity(java.lang.Number)
//  .tags(IResolvable|java.util.List<IoteventsAlarmModelTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmRule">alarmRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | Defines when your alarm is invoked. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmCapabilities">alarmCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | Contains the configuration information of alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmEventActions">alarmEventActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | Contains information about one or more alarm actions. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmModelDescription">alarmModelDescription</a></code> | <code>java.lang.String</code> | The description of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmModelName">alarmModelName</a></code> | <code>java.lang.String</code> | The name of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | An input attribute used as a key to create an alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.severity">severity</a></code> | <code>java.lang.Number</code> | A non-negative integer that reflects the severity level of the alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>></code> | A list of key-value pairs that contain metadata for the alarm model. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alarmRule`<sup>Required</sup> <a name="alarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

Defines when your alarm is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#alarm_rule IoteventsAlarmModel#alarm_rule}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources.

For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#role_arn IoteventsAlarmModel#role_arn}

---

##### `alarmCapabilities`<sup>Optional</sup> <a name="alarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmCapabilities"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

Contains the configuration information of alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#alarm_capabilities IoteventsAlarmModel#alarm_capabilities}

---

##### `alarmEventActions`<sup>Optional</sup> <a name="alarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmEventActions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

Contains information about one or more alarm actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#alarm_event_actions IoteventsAlarmModel#alarm_event_actions}

---

##### `alarmModelDescription`<sup>Optional</sup> <a name="alarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmModelDescription"></a>

- *Type:* java.lang.String

The description of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#alarm_model_description IoteventsAlarmModel#alarm_model_description}

---

##### `alarmModelName`<sup>Optional</sup> <a name="alarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmModelName"></a>

- *Type:* java.lang.String

The name of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#alarm_model_name IoteventsAlarmModel#alarm_model_name}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.key"></a>

- *Type:* java.lang.String

An input attribute used as a key to create an alarm.

ITE routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.severity"></a>

- *Type:* java.lang.Number

A non-negative integer that reflects the severity level of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#severity IoteventsAlarmModel#severity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>>

A list of key-value pairs that contain metadata for the alarm model.

The tags help you manage the alarm model. For more information, see [Tagging your resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the *Developer Guide*.
You can create up to 50 tags for one alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#tags IoteventsAlarmModel#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities">putAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions">putAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule">putAlarmRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmCapabilities">resetAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmEventActions">resetAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelDescription">resetAlarmModelDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelName">resetAlarmModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlarmCapabilities` <a name="putAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities"></a>

```java
public void putAlarmCapabilities(IoteventsAlarmModelAlarmCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---

##### `putAlarmEventActions` <a name="putAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions"></a>

```java
public void putAlarmEventActions(IoteventsAlarmModelAlarmEventActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---

##### `putAlarmRule` <a name="putAlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule"></a>

```java
public void putAlarmRule(IoteventsAlarmModelAlarmRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IoteventsAlarmModelTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>>

---

##### `resetAlarmCapabilities` <a name="resetAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmCapabilities"></a>

```java
public void resetAlarmCapabilities()
```

##### `resetAlarmEventActions` <a name="resetAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmEventActions"></a>

```java
public void resetAlarmEventActions()
```

##### `resetAlarmModelDescription` <a name="resetAlarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelDescription"></a>

```java
public void resetAlarmModelDescription()
```

##### `resetAlarmModelName` <a name="resetAlarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelName"></a>

```java
public void resetAlarmModelName()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetKey"></a>

```java
public void resetKey()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IoteventsAlarmModel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModel;

IoteventsAlarmModel.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModel;

IoteventsAlarmModel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModel;

IoteventsAlarmModel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModel;

IoteventsAlarmModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IoteventsAlarmModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IoteventsAlarmModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IoteventsAlarmModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IoteventsAlarmModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IoteventsAlarmModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilities">alarmCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference">IoteventsAlarmModelAlarmCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActions">alarmEventActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference">IoteventsAlarmModelAlarmEventActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRule">alarmRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference">IoteventsAlarmModelAlarmRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList">IoteventsAlarmModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilitiesInput">alarmCapabilitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActionsInput">alarmEventActionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescriptionInput">alarmModelDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelNameInput">alarmModelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRuleInput">alarmRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severityInput">severityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescription">alarmModelDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelName">alarmModelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severity">severity</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alarmCapabilities`<sup>Required</sup> <a name="alarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilities"></a>

```java
public IoteventsAlarmModelAlarmCapabilitiesOutputReference getAlarmCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference">IoteventsAlarmModelAlarmCapabilitiesOutputReference</a>

---

##### `alarmEventActions`<sup>Required</sup> <a name="alarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActions"></a>

```java
public IoteventsAlarmModelAlarmEventActionsOutputReference getAlarmEventActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference">IoteventsAlarmModelAlarmEventActionsOutputReference</a>

---

##### `alarmRule`<sup>Required</sup> <a name="alarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRule"></a>

```java
public IoteventsAlarmModelAlarmRuleOutputReference getAlarmRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference">IoteventsAlarmModelAlarmRuleOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tags"></a>

```java
public IoteventsAlarmModelTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList">IoteventsAlarmModelTagsList</a>

---

##### `alarmCapabilitiesInput`<sup>Optional</sup> <a name="alarmCapabilitiesInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilitiesInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmCapabilities getAlarmCapabilitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---

##### `alarmEventActionsInput`<sup>Optional</sup> <a name="alarmEventActionsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActionsInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActions getAlarmEventActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---

##### `alarmModelDescriptionInput`<sup>Optional</sup> <a name="alarmModelDescriptionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescriptionInput"></a>

```java
public java.lang.String getAlarmModelDescriptionInput();
```

- *Type:* java.lang.String

---

##### `alarmModelNameInput`<sup>Optional</sup> <a name="alarmModelNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelNameInput"></a>

```java
public java.lang.String getAlarmModelNameInput();
```

- *Type:* java.lang.String

---

##### `alarmRuleInput`<sup>Optional</sup> <a name="alarmRuleInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRuleInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmRule getAlarmRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severityInput"></a>

```java
public java.lang.Number getSeverityInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IoteventsAlarmModelTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>>

---

##### `alarmModelDescription`<sup>Required</sup> <a name="alarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescription"></a>

```java
public java.lang.String getAlarmModelDescription();
```

- *Type:* java.lang.String

---

##### `alarmModelName`<sup>Required</sup> <a name="alarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelName"></a>

```java
public java.lang.String getAlarmModelName();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severity"></a>

```java
public java.lang.Number getSeverity();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IoteventsAlarmModelAlarmCapabilities <a name="IoteventsAlarmModelAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmCapabilities;

IoteventsAlarmModelAlarmCapabilities.builder()
//  .acknowledgeFlow(IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow)
//  .initializationConfiguration(IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.acknowledgeFlow">acknowledgeFlow</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | Specifies whether to get notified for alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.initializationConfiguration">initializationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model. |

---

##### `acknowledgeFlow`<sup>Optional</sup> <a name="acknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.acknowledgeFlow"></a>

```java
public IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow getAcknowledgeFlow();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

Specifies whether to get notified for alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#acknowledge_flow IoteventsAlarmModel#acknowledge_flow}

---

##### `initializationConfiguration`<sup>Optional</sup> <a name="initializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.initializationConfiguration"></a>

```java
public IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration getInitializationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#initialization_configuration IoteventsAlarmModel#initialization_configuration}

---

### IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow <a name="IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow;

IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The value must be ``TRUE`` or ``FALSE``. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The value must be ``TRUE`` or ``FALSE``.

If `TRUE`, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to `NORMAL`. If `FALSE`, you won't receive notifications. The alarm automatically changes to the `NORMAL` state when the input property value returns to the specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#enabled IoteventsAlarmModel#enabled}

---

### IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration <a name="IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration;

IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.builder()
//  .disabledOnInitialization(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.property.disabledOnInitialization">disabledOnInitialization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The value must be ``TRUE`` or ``FALSE``. |

---

##### `disabledOnInitialization`<sup>Optional</sup> <a name="disabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.property.disabledOnInitialization"></a>

```java
public java.lang.Boolean|IResolvable getDisabledOnInitialization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The value must be ``TRUE`` or ``FALSE``.

If `FALSE`, all alarm instances created based on the alarm model are activated. The default value is `TRUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#disabled_on_initialization IoteventsAlarmModel#disabled_on_initialization}

---

### IoteventsAlarmModelAlarmEventActions <a name="IoteventsAlarmModelAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActions;

IoteventsAlarmModelAlarmEventActions.builder()
//  .alarmActions(IResolvable|java.util.List<IoteventsAlarmModelAlarmEventActionsAlarmActions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.property.alarmActions">alarmActions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>></code> | Specifies one or more supported actions to receive notifications when the alarm state changes. |

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.property.alarmActions"></a>

```java
public IResolvable|java.util.List<IoteventsAlarmModelAlarmEventActionsAlarmActions> getAlarmActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>>

Specifies one or more supported actions to receive notifications when the alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#alarm_actions IoteventsAlarmModel#alarm_actions}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActions <a name="IoteventsAlarmModelAlarmEventActionsAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActions;

IoteventsAlarmModelAlarmEventActionsAlarmActions.builder()
//  .dynamoDb(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb)
//  .dynamoDBv2(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2)
//  .firehose(IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose)
//  .iotEvents(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents)
//  .iotSiteWise(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise)
//  .iotTopicPublish(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish)
//  .lambda(IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda)
//  .sns(IoteventsAlarmModelAlarmEventActionsAlarmActionsSns)
//  .sqs(IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDb">dynamoDb</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | Defines an action to write to the Amazon DynamoDB table that you created. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDBv2">dynamoDBv2</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | Defines an action to write to the Amazon DynamoDB table that you created. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotEvents">iotEvents</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | Sends an ITE input, passing in information about the detector model instance and the event that triggered the action. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotSiteWise">iotSiteWise</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotTopicPublish">iotTopicPublish</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | Information required to publish the MQTT message through the IoT message broker. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | Information required to publish the Amazon SNS message. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sqs">sqs</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. |

---

##### `dynamoDb`<sup>Optional</sup> <a name="dynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDb"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb getDynamoDb();
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#dynamo_db IoteventsAlarmModel#dynamo_db}

---

##### `dynamoDBv2`<sup>Optional</sup> <a name="dynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDBv2"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 getDynamoDBv2();
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#dynamo_d_bv_2 IoteventsAlarmModel#dynamo_d_bv_2}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.firehose"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose getFirehose();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#firehose IoteventsAlarmModel#firehose}

---

##### `iotEvents`<sup>Optional</sup> <a name="iotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotEvents"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents getIotEvents();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#iot_events IoteventsAlarmModel#iot_events}

---

##### `iotSiteWise`<sup>Optional</sup> <a name="iotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotSiteWise"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise getIotSiteWise();
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#iot_site_wise IoteventsAlarmModel#iot_site_wise}

---

##### `iotTopicPublish`<sup>Optional</sup> <a name="iotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotTopicPublish"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish getIotTopicPublish();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

Information required to publish the MQTT message through the IoT message broker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#iot_topic_publish IoteventsAlarmModel#iot_topic_publish}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.lambda"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda getLambda();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#lambda IoteventsAlarmModel#lambda}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sns"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSns getSns();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

Information required to publish the Amazon SNS message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#sns IoteventsAlarmModel#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sqs"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs getSqs();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#sqs IoteventsAlarmModel#sqs}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb;

IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.builder()
//  .hashKeyField(java.lang.String)
//  .hashKeyType(java.lang.String)
//  .hashKeyValue(java.lang.String)
//  .operation(java.lang.String)
//  .payload(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload)
//  .payloadField(java.lang.String)
//  .rangeKeyField(java.lang.String)
//  .rangeKeyType(java.lang.String)
//  .rangeKeyValue(java.lang.String)
//  .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyField">hashKeyField</a></code> | <code>java.lang.String</code> | The name of the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyType">hashKeyType</a></code> | <code>java.lang.String</code> | The data type for the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyValue">hashKeyValue</a></code> | <code>java.lang.String</code> | The value of the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.operation">operation</a></code> | <code>java.lang.String</code> | The type of operation to perform. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | Information needed to configure the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payloadField">payloadField</a></code> | <code>java.lang.String</code> | The name of the DynamoDB column that receives the action payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyField">rangeKeyField</a></code> | <code>java.lang.String</code> | The name of the range key (also called the sort key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyType">rangeKeyType</a></code> | <code>java.lang.String</code> | The data type for the range key (also called the sort key), You can specify the following values:   +  ``'STRING'`` - The range key is a string. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyValue">rangeKeyValue</a></code> | <code>java.lang.String</code> | The value of the range key (also called the sort key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table. |

---

##### `hashKeyField`<sup>Optional</sup> <a name="hashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyField"></a>

```java
public java.lang.String getHashKeyField();
```

- *Type:* java.lang.String

The name of the hash key (also called the partition key).

The `hashKeyField` value must match the partition key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#hash_key_field IoteventsAlarmModel#hash_key_field}

---

##### `hashKeyType`<sup>Optional</sup> <a name="hashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyType"></a>

```java
public java.lang.String getHashKeyType();
```

- *Type:* java.lang.String

The data type for the hash key (also called the partition key).

You can specify the following values:

* `'STRING'` - The hash key is a string.
* `'NUMBER'` - The hash key is a number.

If you don't specify `hashKeyType`, the default value is `'STRING'`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#hash_key_type IoteventsAlarmModel#hash_key_type}

---

##### `hashKeyValue`<sup>Optional</sup> <a name="hashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyValue"></a>

```java
public java.lang.String getHashKeyValue();
```

- *Type:* java.lang.String

The value of the hash key (also called the partition key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#hash_key_value IoteventsAlarmModel#hash_key_value}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

The type of operation to perform.

You can specify the following values:

* `'INSERT'` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
* `'UPDATE'` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
* `'DELETE'` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

If you don't specify this parameter, ITE triggers the `'INSERT'` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#operation IoteventsAlarmModel#operation}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `payloadField`<sup>Optional</sup> <a name="payloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payloadField"></a>

```java
public java.lang.String getPayloadField();
```

- *Type:* java.lang.String

The name of the DynamoDB column that receives the action payload.

If you don't specify this parameter, the name of the DynamoDB column is `payload`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#payload_field IoteventsAlarmModel#payload_field}

---

##### `rangeKeyField`<sup>Optional</sup> <a name="rangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyField"></a>

```java
public java.lang.String getRangeKeyField();
```

- *Type:* java.lang.String

The name of the range key (also called the sort key).

The `rangeKeyField` value must match the sort key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#range_key_field IoteventsAlarmModel#range_key_field}

---

##### `rangeKeyType`<sup>Optional</sup> <a name="rangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyType"></a>

```java
public java.lang.String getRangeKeyType();
```

- *Type:* java.lang.String

The data type for the range key (also called the sort key), You can specify the following values:   +  ``'STRING'`` - The range key is a string.

* `'NUMBER'` - The range key is number.

If you don't specify `rangeKeyField`, the default value is `'STRING'`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#range_key_type IoteventsAlarmModel#range_key_type}

---

##### `rangeKeyValue`<sup>Optional</sup> <a name="rangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyValue"></a>

```java
public java.lang.String getRangeKeyValue();
```

- *Type:* java.lang.String

The value of the range key (also called the sort key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#range_key_value IoteventsAlarmModel#range_key_value}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload;

IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.builder()
//  .contentExpression(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.type">type</a></code> | <code>java.lang.String</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2;

IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.builder()
//  .payload(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload)
//  .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | Information needed to configure the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the DynamoDB table. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The name of the DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload;

IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.builder()
//  .contentExpression(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.type">type</a></code> | <code>java.lang.String</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose;

IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.builder()
//  .deliveryStreamName(java.lang.String)
//  .payload(IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload)
//  .separator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.deliveryStreamName">deliveryStreamName</a></code> | <code>java.lang.String</code> | The name of the Kinesis Data Firehose delivery stream where the data is written. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.separator">separator</a></code> | <code>java.lang.String</code> | A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. |

---

##### `deliveryStreamName`<sup>Optional</sup> <a name="deliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.deliveryStreamName"></a>

```java
public java.lang.String getDeliveryStreamName();
```

- *Type:* java.lang.String

The name of the Kinesis Data Firehose delivery stream where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#delivery_stream_name IoteventsAlarmModel#delivery_stream_name}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `separator`<sup>Optional</sup> <a name="separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.separator"></a>

```java
public java.lang.String getSeparator();
```

- *Type:* java.lang.String

A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream.

Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#separator IoteventsAlarmModel#separator}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload;

IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.builder()
//  .contentExpression(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.type">type</a></code> | <code>java.lang.String</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents;

IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.builder()
//  .inputName(java.lang.String)
//  .payload(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.inputName">inputName</a></code> | <code>java.lang.String</code> | The name of the ITE input where the data is sent. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | You can configure the action payload when you send a message to an ITE input. |

---

##### `inputName`<sup>Optional</sup> <a name="inputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.inputName"></a>

```java
public java.lang.String getInputName();
```

- *Type:* java.lang.String

The name of the ITE input where the data is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#input_name IoteventsAlarmModel#input_name}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

You can configure the action payload when you send a message to an ITE input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload;

IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.builder()
//  .contentExpression(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.type">type</a></code> | <code>java.lang.String</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise;

IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.builder()
//  .assetId(java.lang.String)
//  .entryId(java.lang.String)
//  .propertyAlias(java.lang.String)
//  .propertyId(java.lang.String)
//  .propertyValue(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.assetId">assetId</a></code> | <code>java.lang.String</code> | The ID of the asset that has the specified property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.entryId">entryId</a></code> | <code>java.lang.String</code> | A unique identifier for this entry. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyAlias">propertyAlias</a></code> | <code>java.lang.String</code> | The alias of the asset property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyId">propertyId</a></code> | <code>java.lang.String</code> | The ID of the asset property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyValue">propertyValue</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information. |

---

##### `assetId`<sup>Optional</sup> <a name="assetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

The ID of the asset that has the specified property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#asset_id IoteventsAlarmModel#asset_id}

---

##### `entryId`<sup>Optional</sup> <a name="entryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

A unique identifier for this entry.

You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#entry_id IoteventsAlarmModel#entry_id}

---

##### `propertyAlias`<sup>Optional</sup> <a name="propertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyAlias"></a>

```java
public java.lang.String getPropertyAlias();
```

- *Type:* java.lang.String

The alias of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#property_alias IoteventsAlarmModel#property_alias}

---

##### `propertyId`<sup>Optional</sup> <a name="propertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyId"></a>

```java
public java.lang.String getPropertyId();
```

- *Type:* java.lang.String

The ID of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#property_id IoteventsAlarmModel#property_id}

---

##### `propertyValue`<sup>Optional</sup> <a name="propertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyValue"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue getPropertyValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#property_value IoteventsAlarmModel#property_value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue;

IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.builder()
//  .quality(java.lang.String)
//  .timestamp(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp)
//  .value(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.quality">quality</a></code> | <code>java.lang.String</code> | The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.timestamp">timestamp</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | The timestamp associated with the asset property value. The default is the current event time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | The value to send to an asset property. |

---

##### `quality`<sup>Optional</sup> <a name="quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.quality"></a>

```java
public java.lang.String getQuality();
```

- *Type:* java.lang.String

The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#quality IoteventsAlarmModel#quality}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.timestamp"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp getTimestamp();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

The timestamp associated with the asset property value. The default is the current event time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#timestamp IoteventsAlarmModel#timestamp}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.value"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

The value to send to an asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#value IoteventsAlarmModel#value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp;

IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.builder()
//  .offsetInNanos(java.lang.String)
//  .timeInSeconds(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.offsetInNanos">offsetInNanos</a></code> | <code>java.lang.String</code> | The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.timeInSeconds">timeInSeconds</a></code> | <code>java.lang.String</code> | The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199. |

---

##### `offsetInNanos`<sup>Optional</sup> <a name="offsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.offsetInNanos"></a>

```java
public java.lang.String getOffsetInNanos();
```

- *Type:* java.lang.String

The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#offset_in_nanos IoteventsAlarmModel#offset_in_nanos}

---

##### `timeInSeconds`<sup>Optional</sup> <a name="timeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.timeInSeconds"></a>

```java
public java.lang.String getTimeInSeconds();
```

- *Type:* java.lang.String

The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#time_in_seconds IoteventsAlarmModel#time_in_seconds}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue;

IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.builder()
//  .booleanValue(java.lang.String)
//  .doubleValue(java.lang.String)
//  .integerValue(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.booleanValue">booleanValue</a></code> | <code>java.lang.String</code> | The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.doubleValue">doubleValue</a></code> | <code>java.lang.String</code> | The asset property value is a double. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.integerValue">integerValue</a></code> | <code>java.lang.String</code> | The asset property value is an integer. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | The asset property value is a string. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.booleanValue"></a>

```java
public java.lang.String getBooleanValue();
```

- *Type:* java.lang.String

The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``.

You must use an expression, and the evaluated result should be a Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#boolean_value IoteventsAlarmModel#boolean_value}

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.doubleValue"></a>

```java
public java.lang.String getDoubleValue();
```

- *Type:* java.lang.String

The asset property value is a double.

You must use an expression, and the evaluated result should be a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#double_value IoteventsAlarmModel#double_value}

---

##### `integerValue`<sup>Optional</sup> <a name="integerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.integerValue"></a>

```java
public java.lang.String getIntegerValue();
```

- *Type:* java.lang.String

The asset property value is an integer.

You must use an expression, and the evaluated result should be an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#integer_value IoteventsAlarmModel#integer_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

The asset property value is a string.

You must use an expression, and the evaluated result should be a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#string_value IoteventsAlarmModel#string_value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish;

IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.builder()
//  .mqttTopic(java.lang.String)
//  .payload(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.mqttTopic">mqttTopic</a></code> | <code>java.lang.String</code> | The MQTT topic of the message. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | You can configure the action payload when you publish a message to an IoTCore topic. |

---

##### `mqttTopic`<sup>Optional</sup> <a name="mqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.mqttTopic"></a>

```java
public java.lang.String getMqttTopic();
```

- *Type:* java.lang.String

The MQTT topic of the message.

You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#mqtt_topic IoteventsAlarmModel#mqtt_topic}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

You can configure the action payload when you publish a message to an IoTCore topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload;

IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.builder()
//  .contentExpression(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.type">type</a></code> | <code>java.lang.String</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda;

IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.builder()
//  .functionArn(java.lang.String)
//  .payload(IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | The ARN of the Lambda function that is executed. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | You can configure the action payload when you send a message to a Lambda function. |

---

##### `functionArn`<sup>Optional</sup> <a name="functionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

The ARN of the Lambda function that is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#function_arn IoteventsAlarmModel#function_arn}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

You can configure the action payload when you send a message to a Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload;

IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.builder()
//  .contentExpression(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.type">type</a></code> | <code>java.lang.String</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSns <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns;

IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.builder()
//  .payload(IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload)
//  .targetArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | You can configure the action payload when you send a message as an Amazon SNS push notification. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | The ARN of the Amazon SNS target where the message is sent. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

You can configure the action payload when you send a message as an Amazon SNS push notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `targetArn`<sup>Optional</sup> <a name="targetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

The ARN of the Amazon SNS target where the message is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#target_arn IoteventsAlarmModel#target_arn}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload;

IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.builder()
//  .contentExpression(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.type">type</a></code> | <code>java.lang.String</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs;

IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.builder()
//  .payload(IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload)
//  .queueUrl(java.lang.String)
//  .useBase64(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | You can configure the action payload when you send a message to an Amazon SQS queue. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | The URL of the SQS queue where the data is written. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.useBase64">useBase64</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

You can configure the action payload when you send a message to an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

The URL of the SQS queue where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#queue_url IoteventsAlarmModel#queue_url}

---

##### `useBase64`<sup>Optional</sup> <a name="useBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.useBase64"></a>

```java
public java.lang.Boolean|IResolvable getUseBase64();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue.

Otherwise, set this to FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#use_base_64 IoteventsAlarmModel#use_base_64}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload;

IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.builder()
//  .contentExpression(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.type">type</a></code> | <code>java.lang.String</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmRule <a name="IoteventsAlarmModelAlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmRule;

IoteventsAlarmModelAlarmRule.builder()
//  .simpleRule(IoteventsAlarmModelAlarmRuleSimpleRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.property.simpleRule">simpleRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | A rule that compares an input property value to a threshold value with a comparison operator. |

---

##### `simpleRule`<sup>Optional</sup> <a name="simpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.property.simpleRule"></a>

```java
public IoteventsAlarmModelAlarmRuleSimpleRule getSimpleRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

A rule that compares an input property value to a threshold value with a comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#simple_rule IoteventsAlarmModel#simple_rule}

---

### IoteventsAlarmModelAlarmRuleSimpleRule <a name="IoteventsAlarmModelAlarmRuleSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmRuleSimpleRule;

IoteventsAlarmModelAlarmRuleSimpleRule.builder()
//  .comparisonOperator(java.lang.String)
//  .inputProperty(java.lang.String)
//  .threshold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.inputProperty">inputProperty</a></code> | <code>java.lang.String</code> | The value on the left side of the comparison operator. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.threshold">threshold</a></code> | <code>java.lang.String</code> | The value on the right side of the comparison operator. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#comparison_operator IoteventsAlarmModel#comparison_operator}

---

##### `inputProperty`<sup>Optional</sup> <a name="inputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.inputProperty"></a>

```java
public java.lang.String getInputProperty();
```

- *Type:* java.lang.String

The value on the left side of the comparison operator.

You can specify an ITE input attribute as an input property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#input_property IoteventsAlarmModel#input_property}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

The value on the right side of the comparison operator.

You can enter a number or specify an ITE input attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#threshold IoteventsAlarmModel#threshold}

---

### IoteventsAlarmModelConfig <a name="IoteventsAlarmModelConfig" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelConfig;

IoteventsAlarmModelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alarmRule(IoteventsAlarmModelAlarmRule)
    .roleArn(java.lang.String)
//  .alarmCapabilities(IoteventsAlarmModelAlarmCapabilities)
//  .alarmEventActions(IoteventsAlarmModelAlarmEventActions)
//  .alarmModelDescription(java.lang.String)
//  .alarmModelName(java.lang.String)
//  .key(java.lang.String)
//  .severity(java.lang.Number)
//  .tags(IResolvable|java.util.List<IoteventsAlarmModelTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmRule">alarmRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | Defines when your alarm is invoked. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmCapabilities">alarmCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | Contains the configuration information of alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmEventActions">alarmEventActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | Contains information about one or more alarm actions. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelDescription">alarmModelDescription</a></code> | <code>java.lang.String</code> | The description of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelName">alarmModelName</a></code> | <code>java.lang.String</code> | The name of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.key">key</a></code> | <code>java.lang.String</code> | An input attribute used as a key to create an alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.severity">severity</a></code> | <code>java.lang.Number</code> | A non-negative integer that reflects the severity level of the alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>></code> | A list of key-value pairs that contain metadata for the alarm model. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alarmRule`<sup>Required</sup> <a name="alarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmRule"></a>

```java
public IoteventsAlarmModelAlarmRule getAlarmRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

Defines when your alarm is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#alarm_rule IoteventsAlarmModel#alarm_rule}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources.

For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#role_arn IoteventsAlarmModel#role_arn}

---

##### `alarmCapabilities`<sup>Optional</sup> <a name="alarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmCapabilities"></a>

```java
public IoteventsAlarmModelAlarmCapabilities getAlarmCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

Contains the configuration information of alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#alarm_capabilities IoteventsAlarmModel#alarm_capabilities}

---

##### `alarmEventActions`<sup>Optional</sup> <a name="alarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmEventActions"></a>

```java
public IoteventsAlarmModelAlarmEventActions getAlarmEventActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

Contains information about one or more alarm actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#alarm_event_actions IoteventsAlarmModel#alarm_event_actions}

---

##### `alarmModelDescription`<sup>Optional</sup> <a name="alarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelDescription"></a>

```java
public java.lang.String getAlarmModelDescription();
```

- *Type:* java.lang.String

The description of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#alarm_model_description IoteventsAlarmModel#alarm_model_description}

---

##### `alarmModelName`<sup>Optional</sup> <a name="alarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelName"></a>

```java
public java.lang.String getAlarmModelName();
```

- *Type:* java.lang.String

The name of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#alarm_model_name IoteventsAlarmModel#alarm_model_name}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

An input attribute used as a key to create an alarm.

ITE routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.severity"></a>

```java
public java.lang.Number getSeverity();
```

- *Type:* java.lang.Number

A non-negative integer that reflects the severity level of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#severity IoteventsAlarmModel#severity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IoteventsAlarmModelTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>>

A list of key-value pairs that contain metadata for the alarm model.

The tags help you manage the alarm model. For more information, see [Tagging your resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the *Developer Guide*.
You can create up to 50 tags for one alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#tags IoteventsAlarmModel#tags}

---

### IoteventsAlarmModelTags <a name="IoteventsAlarmModelTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelTags;

IoteventsAlarmModelTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotevents_alarm_model#value IoteventsAlarmModel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference;

new IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---


### IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference;

new IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resetDisabledOnInitialization">resetDisabledOnInitialization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledOnInitialization` <a name="resetDisabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resetDisabledOnInitialization"></a>

```java
public void resetDisabledOnInitialization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitializationInput">disabledOnInitializationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization">disabledOnInitialization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledOnInitializationInput`<sup>Optional</sup> <a name="disabledOnInitializationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitializationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledOnInitializationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disabledOnInitialization`<sup>Required</sup> <a name="disabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization"></a>

```java
public java.lang.Boolean|IResolvable getDisabledOnInitialization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---


### IoteventsAlarmModelAlarmCapabilitiesOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmCapabilitiesOutputReference;

new IoteventsAlarmModelAlarmCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow">putAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration">putInitializationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetAcknowledgeFlow">resetAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetInitializationConfiguration">resetInitializationConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcknowledgeFlow` <a name="putAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow"></a>

```java
public void putAcknowledgeFlow(IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---

##### `putInitializationConfiguration` <a name="putInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration"></a>

```java
public void putInitializationConfiguration(IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---

##### `resetAcknowledgeFlow` <a name="resetAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetAcknowledgeFlow"></a>

```java
public void resetAcknowledgeFlow()
```

##### `resetInitializationConfiguration` <a name="resetInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetInitializationConfiguration"></a>

```java
public void resetInitializationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow">acknowledgeFlow</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration">initializationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlowInput">acknowledgeFlowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfigurationInput">initializationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acknowledgeFlow`<sup>Required</sup> <a name="acknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow"></a>

```java
public IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference getAcknowledgeFlow();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a>

---

##### `initializationConfiguration`<sup>Required</sup> <a name="initializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration"></a>

```java
public IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference getInitializationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a>

---

##### `acknowledgeFlowInput`<sup>Optional</sup> <a name="acknowledgeFlowInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlowInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow getAcknowledgeFlowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---

##### `initializationConfigurationInput`<sup>Optional</sup> <a name="initializationConfigurationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfigurationInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration getInitializationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmCapabilities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyField">resetHashKeyField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyType">resetHashKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyValue">resetHashKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayloadField">resetPayloadField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyField">resetRangeKeyField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyType">resetRangeKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyValue">resetRangeKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload"></a>

```java
public void putPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---

##### `resetHashKeyField` <a name="resetHashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyField"></a>

```java
public void resetHashKeyField()
```

##### `resetHashKeyType` <a name="resetHashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyType"></a>

```java
public void resetHashKeyType()
```

##### `resetHashKeyValue` <a name="resetHashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyValue"></a>

```java
public void resetHashKeyValue()
```

##### `resetOperation` <a name="resetOperation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetOperation"></a>

```java
public void resetOperation()
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayload"></a>

```java
public void resetPayload()
```

##### `resetPayloadField` <a name="resetPayloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayloadField"></a>

```java
public void resetPayloadField()
```

##### `resetRangeKeyField` <a name="resetRangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyField"></a>

```java
public void resetRangeKeyField()
```

##### `resetRangeKeyType` <a name="resetRangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyType"></a>

```java
public void resetRangeKeyType()
```

##### `resetRangeKeyValue` <a name="resetRangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyValue"></a>

```java
public void resetRangeKeyValue()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetTableName"></a>

```java
public void resetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyFieldInput">hashKeyFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyTypeInput">hashKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValueInput">hashKeyValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadFieldInput">payloadFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadInput">payloadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyFieldInput">rangeKeyFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyTypeInput">rangeKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValueInput">rangeKeyValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField">hashKeyField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType">hashKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue">hashKeyValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField">payloadField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField">rangeKeyField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType">rangeKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue">rangeKeyValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a>

---

##### `hashKeyFieldInput`<sup>Optional</sup> <a name="hashKeyFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyFieldInput"></a>

```java
public java.lang.String getHashKeyFieldInput();
```

- *Type:* java.lang.String

---

##### `hashKeyTypeInput`<sup>Optional</sup> <a name="hashKeyTypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyTypeInput"></a>

```java
public java.lang.String getHashKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `hashKeyValueInput`<sup>Optional</sup> <a name="hashKeyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValueInput"></a>

```java
public java.lang.String getHashKeyValueInput();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `payloadFieldInput`<sup>Optional</sup> <a name="payloadFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadFieldInput"></a>

```java
public java.lang.String getPayloadFieldInput();
```

- *Type:* java.lang.String

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload getPayloadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---

##### `rangeKeyFieldInput`<sup>Optional</sup> <a name="rangeKeyFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyFieldInput"></a>

```java
public java.lang.String getRangeKeyFieldInput();
```

- *Type:* java.lang.String

---

##### `rangeKeyTypeInput`<sup>Optional</sup> <a name="rangeKeyTypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyTypeInput"></a>

```java
public java.lang.String getRangeKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `rangeKeyValueInput`<sup>Optional</sup> <a name="rangeKeyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValueInput"></a>

```java
public java.lang.String getRangeKeyValueInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `hashKeyField`<sup>Required</sup> <a name="hashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField"></a>

```java
public java.lang.String getHashKeyField();
```

- *Type:* java.lang.String

---

##### `hashKeyType`<sup>Required</sup> <a name="hashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType"></a>

```java
public java.lang.String getHashKeyType();
```

- *Type:* java.lang.String

---

##### `hashKeyValue`<sup>Required</sup> <a name="hashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue"></a>

```java
public java.lang.String getHashKeyValue();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `payloadField`<sup>Required</sup> <a name="payloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField"></a>

```java
public java.lang.String getPayloadField();
```

- *Type:* java.lang.String

---

##### `rangeKeyField`<sup>Required</sup> <a name="rangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField"></a>

```java
public java.lang.String getRangeKeyField();
```

- *Type:* java.lang.String

---

##### `rangeKeyType`<sup>Required</sup> <a name="rangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType"></a>

```java
public java.lang.String getRangeKeyType();
```

- *Type:* java.lang.String

---

##### `rangeKeyValue`<sup>Required</sup> <a name="rangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue"></a>

```java
public java.lang.String getRangeKeyValue();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetContentExpression"></a>

```java
public void resetContentExpression()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpressionInput"></a>

```java
public java.lang.String getContentExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload"></a>

```java
public void putPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetPayload"></a>

```java
public void resetPayload()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetTableName"></a>

```java
public void resetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payloadInput">payloadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payloadInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload getPayloadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetContentExpression"></a>

```java
public void resetContentExpression()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpressionInput"></a>

```java
public java.lang.String getContentExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetDeliveryStreamName">resetDeliveryStreamName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetSeparator">resetSeparator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload"></a>

```java
public void putPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---

##### `resetDeliveryStreamName` <a name="resetDeliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetDeliveryStreamName"></a>

```java
public void resetDeliveryStreamName()
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetPayload"></a>

```java
public void resetPayload()
```

##### `resetSeparator` <a name="resetSeparator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetSeparator"></a>

```java
public void resetSeparator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamNameInput">deliveryStreamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payloadInput">payloadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separatorInput">separatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName">deliveryStreamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator">separator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a>

---

##### `deliveryStreamNameInput`<sup>Optional</sup> <a name="deliveryStreamNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamNameInput"></a>

```java
public java.lang.String getDeliveryStreamNameInput();
```

- *Type:* java.lang.String

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payloadInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload getPayloadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separatorInput"></a>

```java
public java.lang.String getSeparatorInput();
```

- *Type:* java.lang.String

---

##### `deliveryStreamName`<sup>Required</sup> <a name="deliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName"></a>

```java
public java.lang.String getDeliveryStreamName();
```

- *Type:* java.lang.String

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator"></a>

```java
public java.lang.String getSeparator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetContentExpression"></a>

```java
public void resetContentExpression()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpressionInput"></a>

```java
public java.lang.String getContentExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetInputName">resetInputName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetPayload">resetPayload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload"></a>

```java
public void putPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---

##### `resetInputName` <a name="resetInputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetInputName"></a>

```java
public void resetInputName()
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetPayload"></a>

```java
public void resetPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputNameInput">inputNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payloadInput">payloadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName">inputName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a>

---

##### `inputNameInput`<sup>Optional</sup> <a name="inputNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputNameInput"></a>

```java
public java.lang.String getInputNameInput();
```

- *Type:* java.lang.String

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payloadInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload getPayloadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---

##### `inputName`<sup>Required</sup> <a name="inputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName"></a>

```java
public java.lang.String getInputName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetContentExpression"></a>

```java
public void resetContentExpression()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpressionInput"></a>

```java
public java.lang.String getContentExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue">putPropertyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetAssetId">resetAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetEntryId">resetEntryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyAlias">resetPropertyAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyId">resetPropertyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyValue">resetPropertyValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPropertyValue` <a name="putPropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue"></a>

```java
public void putPropertyValue(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---

##### `resetAssetId` <a name="resetAssetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetAssetId"></a>

```java
public void resetAssetId()
```

##### `resetEntryId` <a name="resetEntryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetEntryId"></a>

```java
public void resetEntryId()
```

##### `resetPropertyAlias` <a name="resetPropertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyAlias"></a>

```java
public void resetPropertyAlias()
```

##### `resetPropertyId` <a name="resetPropertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyId"></a>

```java
public void resetPropertyId()
```

##### `resetPropertyValue` <a name="resetPropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyValue"></a>

```java
public void resetPropertyValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue">propertyValue</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetIdInput">assetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryIdInput">entryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAliasInput">propertyAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyIdInput">propertyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValueInput">propertyValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId">assetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId">entryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias">propertyAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId">propertyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propertyValue`<sup>Required</sup> <a name="propertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference getPropertyValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a>

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetIdInput"></a>

```java
public java.lang.String getAssetIdInput();
```

- *Type:* java.lang.String

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryIdInput"></a>

```java
public java.lang.String getEntryIdInput();
```

- *Type:* java.lang.String

---

##### `propertyAliasInput`<sup>Optional</sup> <a name="propertyAliasInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAliasInput"></a>

```java
public java.lang.String getPropertyAliasInput();
```

- *Type:* java.lang.String

---

##### `propertyIdInput`<sup>Optional</sup> <a name="propertyIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyIdInput"></a>

```java
public java.lang.String getPropertyIdInput();
```

- *Type:* java.lang.String

---

##### `propertyValueInput`<sup>Optional</sup> <a name="propertyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValueInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue getPropertyValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

---

##### `propertyAlias`<sup>Required</sup> <a name="propertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias"></a>

```java
public java.lang.String getPropertyAlias();
```

- *Type:* java.lang.String

---

##### `propertyId`<sup>Required</sup> <a name="propertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId"></a>

```java
public java.lang.String getPropertyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp">putTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetQuality">resetQuality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimestamp` <a name="putTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp"></a>

```java
public void putTimestamp(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue"></a>

```java
public void putValue(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---

##### `resetQuality` <a name="resetQuality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetQuality"></a>

```java
public void resetQuality()
```

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetTimestamp"></a>

```java
public void resetTimestamp()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp">timestamp</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.qualityInput">qualityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestampInput">timestampInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality">quality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference getTimestamp();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a>

---

##### `qualityInput`<sup>Optional</sup> <a name="qualityInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.qualityInput"></a>

```java
public java.lang.String getQualityInput();
```

- *Type:* java.lang.String

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestampInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp getTimestampInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.valueInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---

##### `quality`<sup>Required</sup> <a name="quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality"></a>

```java
public java.lang.String getQuality();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetOffsetInNanos">resetOffsetInNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetTimeInSeconds">resetTimeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffsetInNanos` <a name="resetOffsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetOffsetInNanos"></a>

```java
public void resetOffsetInNanos()
```

##### `resetTimeInSeconds` <a name="resetTimeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetTimeInSeconds"></a>

```java
public void resetTimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanosInput">offsetInNanosInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSecondsInput">timeInSecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos">offsetInNanos</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds">timeInSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offsetInNanosInput`<sup>Optional</sup> <a name="offsetInNanosInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanosInput"></a>

```java
public java.lang.String getOffsetInNanosInput();
```

- *Type:* java.lang.String

---

##### `timeInSecondsInput`<sup>Optional</sup> <a name="timeInSecondsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSecondsInput"></a>

```java
public java.lang.String getTimeInSecondsInput();
```

- *Type:* java.lang.String

---

##### `offsetInNanos`<sup>Required</sup> <a name="offsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos"></a>

```java
public java.lang.String getOffsetInNanos();
```

- *Type:* java.lang.String

---

##### `timeInSeconds`<sup>Required</sup> <a name="timeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds"></a>

```java
public java.lang.String getTimeInSeconds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetIntegerValue">resetIntegerValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetBooleanValue"></a>

```java
public void resetBooleanValue()
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetDoubleValue"></a>

```java
public void resetDoubleValue()
```

##### `resetIntegerValue` <a name="resetIntegerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetIntegerValue"></a>

```java
public void resetIntegerValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValueInput">integerValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue">booleanValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue">integerValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValueInput"></a>

```java
public java.lang.String getBooleanValueInput();
```

- *Type:* java.lang.String

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValueInput"></a>

```java
public java.lang.String getDoubleValueInput();
```

- *Type:* java.lang.String

---

##### `integerValueInput`<sup>Optional</sup> <a name="integerValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValueInput"></a>

```java
public java.lang.String getIntegerValueInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue"></a>

```java
public java.lang.String getBooleanValue();
```

- *Type:* java.lang.String

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue"></a>

```java
public java.lang.String getDoubleValue();
```

- *Type:* java.lang.String

---

##### `integerValue`<sup>Required</sup> <a name="integerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue"></a>

```java
public java.lang.String getIntegerValue();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetMqttTopic">resetMqttTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetPayload">resetPayload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload"></a>

```java
public void putPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---

##### `resetMqttTopic` <a name="resetMqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetMqttTopic"></a>

```java
public void resetMqttTopic()
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetPayload"></a>

```java
public void resetPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopicInput">mqttTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payloadInput">payloadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic">mqttTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a>

---

##### `mqttTopicInput`<sup>Optional</sup> <a name="mqttTopicInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopicInput"></a>

```java
public java.lang.String getMqttTopicInput();
```

- *Type:* java.lang.String

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payloadInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload getPayloadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---

##### `mqttTopic`<sup>Required</sup> <a name="mqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic"></a>

```java
public java.lang.String getMqttTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetContentExpression"></a>

```java
public void resetContentExpression()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpressionInput"></a>

```java
public java.lang.String getContentExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetFunctionArn">resetFunctionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetPayload">resetPayload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload"></a>

```java
public void putPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---

##### `resetFunctionArn` <a name="resetFunctionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetFunctionArn"></a>

```java
public void resetFunctionArn()
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetPayload"></a>

```java
public void resetPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArnInput">functionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payloadInput">payloadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a>

---

##### `functionArnInput`<sup>Optional</sup> <a name="functionArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArnInput"></a>

```java
public java.lang.String getFunctionArnInput();
```

- *Type:* java.lang.String

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payloadInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload getPayloadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetContentExpression"></a>

```java
public void resetContentExpression()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpressionInput"></a>

```java
public java.lang.String getContentExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsList <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsList" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsList;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IoteventsAlarmModelAlarmEventActionsAlarmActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb">putDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2">putDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents">putIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise">putIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish">putIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns">putSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs">putSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDb">resetDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDBv2">resetDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotEvents">resetIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotSiteWise">resetIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotTopicPublish">resetIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetLambda">resetLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSns">resetSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSqs">resetSqs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamoDb` <a name="putDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb"></a>

```java
public void putDynamoDb(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---

##### `putDynamoDBv2` <a name="putDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2"></a>

```java
public void putDynamoDBv2(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose"></a>

```java
public void putFirehose(IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---

##### `putIotEvents` <a name="putIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents"></a>

```java
public void putIotEvents(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---

##### `putIotSiteWise` <a name="putIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise"></a>

```java
public void putIotSiteWise(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---

##### `putIotTopicPublish` <a name="putIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish"></a>

```java
public void putIotTopicPublish(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---

##### `putLambda` <a name="putLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda"></a>

```java
public void putLambda(IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---

##### `putSns` <a name="putSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns"></a>

```java
public void putSns(IoteventsAlarmModelAlarmEventActionsAlarmActionsSns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---

##### `putSqs` <a name="putSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs"></a>

```java
public void putSqs(IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---

##### `resetDynamoDb` <a name="resetDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDb"></a>

```java
public void resetDynamoDb()
```

##### `resetDynamoDBv2` <a name="resetDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDBv2"></a>

```java
public void resetDynamoDBv2()
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetFirehose"></a>

```java
public void resetFirehose()
```

##### `resetIotEvents` <a name="resetIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotEvents"></a>

```java
public void resetIotEvents()
```

##### `resetIotSiteWise` <a name="resetIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotSiteWise"></a>

```java
public void resetIotSiteWise()
```

##### `resetIotTopicPublish` <a name="resetIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotTopicPublish"></a>

```java
public void resetIotTopicPublish()
```

##### `resetLambda` <a name="resetLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetLambda"></a>

```java
public void resetLambda()
```

##### `resetSns` <a name="resetSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSns"></a>

```java
public void resetSns()
```

##### `resetSqs` <a name="resetSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSqs"></a>

```java
public void resetSqs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb">dynamoDb</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2">dynamoDBv2</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents">iotEvents</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise">iotSiteWise</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish">iotTopicPublish</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs">sqs</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDbInput">dynamoDbInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2Input">dynamoDBv2Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehoseInput">firehoseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEventsInput">iotEventsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWiseInput">iotSiteWiseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublishInput">iotTopicPublishInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.snsInput">snsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqsInput">sqsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamoDb`<sup>Required</sup> <a name="dynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference getDynamoDb();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a>

---

##### `dynamoDBv2`<sup>Required</sup> <a name="dynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference getDynamoDBv2();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference getFirehose();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a>

---

##### `iotEvents`<sup>Required</sup> <a name="iotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference getIotEvents();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a>

---

##### `iotSiteWise`<sup>Required</sup> <a name="iotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference getIotSiteWise();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a>

---

##### `iotTopicPublish`<sup>Required</sup> <a name="iotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference getIotTopicPublish();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference getLambda();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference getSns();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a>

---

##### `sqs`<sup>Required</sup> <a name="sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference getSqs();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a>

---

##### `dynamoDbInput`<sup>Optional</sup> <a name="dynamoDbInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDbInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb getDynamoDbInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---

##### `dynamoDBv2Input`<sup>Optional</sup> <a name="dynamoDBv2Input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2Input"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 getDynamoDBv2Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehoseInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose getFirehoseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---

##### `iotEventsInput`<sup>Optional</sup> <a name="iotEventsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEventsInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents getIotEventsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---

##### `iotSiteWiseInput`<sup>Optional</sup> <a name="iotSiteWiseInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWiseInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise getIotSiteWiseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---

##### `iotTopicPublishInput`<sup>Optional</sup> <a name="iotTopicPublishInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublishInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish getIotTopicPublishInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambdaInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda getLambdaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---

##### `snsInput`<sup>Optional</sup> <a name="snsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.snsInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSns getSnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---

##### `sqsInput`<sup>Optional</sup> <a name="sqsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqsInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs getSqsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetTargetArn">resetTargetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload"></a>

```java
public void putPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetPayload"></a>

```java
public void resetPayload()
```

##### `resetTargetArn` <a name="resetTargetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetTargetArn"></a>

```java
public void resetTargetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payloadInput">payloadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArnInput">targetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payloadInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload getPayloadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArnInput"></a>

```java
public java.lang.String getTargetArnInput();
```

- *Type:* java.lang.String

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetContentExpression"></a>

```java
public void resetContentExpression()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpressionInput"></a>

```java
public java.lang.String getContentExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetUseBase64">resetUseBase64</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload"></a>

```java
public void putPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetPayload"></a>

```java
public void resetPayload()
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetQueueUrl"></a>

```java
public void resetQueueUrl()
```

##### `resetUseBase64` <a name="resetUseBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetUseBase64"></a>

```java
public void resetUseBase64()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payloadInput">payloadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64Input">useBase64Input</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64">useBase64</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payloadInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload getPayloadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `useBase64Input`<sup>Optional</sup> <a name="useBase64Input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64Input"></a>

```java
public java.lang.Boolean|IResolvable getUseBase64Input();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `useBase64`<sup>Required</sup> <a name="useBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64"></a>

```java
public java.lang.Boolean|IResolvable getUseBase64();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetContentExpression"></a>

```java
public void resetContentExpression()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpressionInput"></a>

```java
public java.lang.String getContentExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression"></a>

```java
public java.lang.String getContentExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmEventActionsOutputReference;

new IoteventsAlarmModelAlarmEventActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions">putAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resetAlarmActions">resetAlarmActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlarmActions` <a name="putAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions"></a>

```java
public void putAlarmActions(IResolvable|java.util.List<IoteventsAlarmModelAlarmEventActionsAlarmActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>>

---

##### `resetAlarmActions` <a name="resetAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resetAlarmActions"></a>

```java
public void resetAlarmActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions">alarmActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList">IoteventsAlarmModelAlarmEventActionsAlarmActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActionsInput">alarmActionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions"></a>

```java
public IoteventsAlarmModelAlarmEventActionsAlarmActionsList getAlarmActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList">IoteventsAlarmModelAlarmEventActionsAlarmActionsList</a>

---

##### `alarmActionsInput`<sup>Optional</sup> <a name="alarmActionsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActionsInput"></a>

```java
public IResolvable|java.util.List<IoteventsAlarmModelAlarmEventActionsAlarmActions> getAlarmActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmEventActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---


### IoteventsAlarmModelAlarmRuleOutputReference <a name="IoteventsAlarmModelAlarmRuleOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmRuleOutputReference;

new IoteventsAlarmModelAlarmRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule">putSimpleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resetSimpleRule">resetSimpleRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSimpleRule` <a name="putSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule"></a>

```java
public void putSimpleRule(IoteventsAlarmModelAlarmRuleSimpleRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---

##### `resetSimpleRule` <a name="resetSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resetSimpleRule"></a>

```java
public void resetSimpleRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule">simpleRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRuleInput">simpleRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `simpleRule`<sup>Required</sup> <a name="simpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule"></a>

```java
public IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference getSimpleRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a>

---

##### `simpleRuleInput`<sup>Optional</sup> <a name="simpleRuleInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRuleInput"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmRuleSimpleRule getSimpleRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---


### IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference <a name="IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference;

new IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetInputProperty">resetInputProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetComparisonOperator"></a>

```java
public void resetComparisonOperator()
```

##### `resetInputProperty` <a name="resetInputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetInputProperty"></a>

```java
public void resetInputProperty()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputPropertyInput">inputPropertyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty">inputProperty</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold">threshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `inputPropertyInput`<sup>Optional</sup> <a name="inputPropertyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputPropertyInput"></a>

```java
public java.lang.String getInputPropertyInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.thresholdInput"></a>

```java
public java.lang.String getThresholdInput();
```

- *Type:* java.lang.String

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `inputProperty`<sup>Required</sup> <a name="inputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty"></a>

```java
public java.lang.String getInputProperty();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelAlarmRuleSimpleRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---


### IoteventsAlarmModelTagsList <a name="IoteventsAlarmModelTagsList" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelTagsList;

new IoteventsAlarmModelTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get"></a>

```java
public IoteventsAlarmModelTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IoteventsAlarmModelTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>>

---


### IoteventsAlarmModelTagsOutputReference <a name="IoteventsAlarmModelTagsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotevents_alarm_model.IoteventsAlarmModelTagsOutputReference;

new IoteventsAlarmModelTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IoteventsAlarmModelTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>

---



