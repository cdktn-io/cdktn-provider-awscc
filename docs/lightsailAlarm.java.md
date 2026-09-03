# `lightsailAlarm` Submodule <a name="`lightsailAlarm` Submodule" id="@cdktn/provider-awscc.lightsailAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailAlarm <a name="LightsailAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm awscc_lightsail_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_alarm.LightsailAlarm;

LightsailAlarm.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alarmName(java.lang.String)
    .comparisonOperator(java.lang.String)
    .evaluationPeriods(java.lang.Number)
    .metricName(java.lang.String)
    .monitoredResourceName(java.lang.String)
    .threshold(java.lang.Number)
//  .contactProtocols(java.util.List<java.lang.String>)
//  .datapointsToAlarm(java.lang.Number)
//  .notificationEnabled(java.lang.Boolean|IResolvable)
//  .notificationTriggers(java.util.List<java.lang.String>)
//  .treatMissingData(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.alarmName">alarmName</a></code> | <code>java.lang.String</code> | The name for the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The arithmetic operation to use when comparing the specified statistic to the threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | The number of most recent periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the metric to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.monitoredResourceName">monitoredResourceName</a></code> | <code>java.lang.String</code> | The name of the Lightsail resource that the alarm monitors. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.threshold">threshold</a></code> | <code>java.lang.Number</code> | The value against which the specified statistic is compared. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.contactProtocols">contactProtocols</a></code> | <code>java.util.List<java.lang.String></code> | The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | The number of data points that must be not within the specified threshold to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.notificationEnabled">notificationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.notificationTriggers">notificationTriggers</a></code> | <code>java.util.List<java.lang.String></code> | The alarm states that trigger a notification. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | Sets how this alarm will handle missing data points. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.alarmName"></a>

- *Type:* java.lang.String

The name for the alarm.

Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#alarm_name LightsailAlarm#alarm_name}

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.comparisonOperator"></a>

- *Type:* java.lang.String

The arithmetic operation to use when comparing the specified statistic to the threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#comparison_operator LightsailAlarm#comparison_operator}

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.evaluationPeriods"></a>

- *Type:* java.lang.Number

The number of most recent periods over which data is compared to the specified threshold.

If you are setting an "M out of N" alarm, this value (evaluationPeriods) is the N.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#evaluation_periods LightsailAlarm#evaluation_periods}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.metricName"></a>

- *Type:* java.lang.String

The name of the metric to associate with the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#metric_name LightsailAlarm#metric_name}

---

##### `monitoredResourceName`<sup>Required</sup> <a name="monitoredResourceName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.monitoredResourceName"></a>

- *Type:* java.lang.String

The name of the Lightsail resource that the alarm monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#monitored_resource_name LightsailAlarm#monitored_resource_name}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.threshold"></a>

- *Type:* java.lang.Number

The value against which the specified statistic is compared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#threshold LightsailAlarm#threshold}

---

##### `contactProtocols`<sup>Optional</sup> <a name="contactProtocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.contactProtocols"></a>

- *Type:* java.util.List<java.lang.String>

The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#contact_protocols LightsailAlarm#contact_protocols}

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.datapointsToAlarm"></a>

- *Type:* java.lang.Number

The number of data points that must be not within the specified threshold to trigger the alarm.

If you are setting an "M out of N" alarm, this value (datapointsToAlarm) is the M.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#datapoints_to_alarm LightsailAlarm#datapoints_to_alarm}

---

##### `notificationEnabled`<sup>Optional</sup> <a name="notificationEnabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.notificationEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#notification_enabled LightsailAlarm#notification_enabled}

---

##### `notificationTriggers`<sup>Optional</sup> <a name="notificationTriggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.notificationTriggers"></a>

- *Type:* java.util.List<java.lang.String>

The alarm states that trigger a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#notification_triggers LightsailAlarm#notification_triggers}

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.treatMissingData"></a>

- *Type:* java.lang.String

Sets how this alarm will handle missing data points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#treat_missing_data LightsailAlarm#treat_missing_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetContactProtocols">resetContactProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetDatapointsToAlarm">resetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationEnabled">resetNotificationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationTriggers">resetNotificationTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetTreatMissingData">resetTreatMissingData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetContactProtocols` <a name="resetContactProtocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetContactProtocols"></a>

```java
public void resetContactProtocols()
```

##### `resetDatapointsToAlarm` <a name="resetDatapointsToAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetDatapointsToAlarm"></a>

```java
public void resetDatapointsToAlarm()
```

##### `resetNotificationEnabled` <a name="resetNotificationEnabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationEnabled"></a>

```java
public void resetNotificationEnabled()
```

##### `resetNotificationTriggers` <a name="resetNotificationTriggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationTriggers"></a>

```java
public void resetNotificationTriggers()
```

##### `resetTreatMissingData` <a name="resetTreatMissingData" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetTreatMissingData"></a>

```java
public void resetTreatMissingData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lightsail_alarm.LightsailAlarm;

LightsailAlarm.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lightsail_alarm.LightsailAlarm;

LightsailAlarm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lightsail_alarm.LightsailAlarm;

LightsailAlarm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lightsail_alarm.LightsailAlarm;

LightsailAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LightsailAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LightsailAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LightsailAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LightsailAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LightsailAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmArn">alarmArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmNameInput">alarmNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocolsInput">contactProtocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarmInput">datapointsToAlarmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceNameInput">monitoredResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabledInput">notificationEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggersInput">notificationTriggersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingDataInput">treatMissingDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocols">contactProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceName">monitoredResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabled">notificationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggers">notificationTriggers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alarmArn`<sup>Required</sup> <a name="alarmArn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmArn"></a>

```java
public java.lang.String getAlarmArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmNameInput"></a>

```java
public java.lang.String getAlarmNameInput();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `contactProtocolsInput`<sup>Optional</sup> <a name="contactProtocolsInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocolsInput"></a>

```java
public java.util.List<java.lang.String> getContactProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `datapointsToAlarmInput`<sup>Optional</sup> <a name="datapointsToAlarmInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarmInput"></a>

```java
public java.lang.Number getDatapointsToAlarmInput();
```

- *Type:* java.lang.Number

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `monitoredResourceNameInput`<sup>Optional</sup> <a name="monitoredResourceNameInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceNameInput"></a>

```java
public java.lang.String getMonitoredResourceNameInput();
```

- *Type:* java.lang.String

---

##### `notificationEnabledInput`<sup>Optional</sup> <a name="notificationEnabledInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getNotificationEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notificationTriggersInput`<sup>Optional</sup> <a name="notificationTriggersInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggersInput"></a>

```java
public java.util.List<java.lang.String> getNotificationTriggersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `treatMissingDataInput`<sup>Optional</sup> <a name="treatMissingDataInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingDataInput"></a>

```java
public java.lang.String getTreatMissingDataInput();
```

- *Type:* java.lang.String

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `contactProtocols`<sup>Required</sup> <a name="contactProtocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocols"></a>

```java
public java.util.List<java.lang.String> getContactProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `datapointsToAlarm`<sup>Required</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarm"></a>

```java
public java.lang.Number getDatapointsToAlarm();
```

- *Type:* java.lang.Number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `monitoredResourceName`<sup>Required</sup> <a name="monitoredResourceName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceName"></a>

```java
public java.lang.String getMonitoredResourceName();
```

- *Type:* java.lang.String

---

##### `notificationEnabled`<sup>Required</sup> <a name="notificationEnabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getNotificationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notificationTriggers`<sup>Required</sup> <a name="notificationTriggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggers"></a>

```java
public java.util.List<java.lang.String> getNotificationTriggers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingData"></a>

```java
public java.lang.String getTreatMissingData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailAlarmConfig <a name="LightsailAlarmConfig" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_alarm.LightsailAlarmConfig;

LightsailAlarmConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alarmName(java.lang.String)
    .comparisonOperator(java.lang.String)
    .evaluationPeriods(java.lang.Number)
    .metricName(java.lang.String)
    .monitoredResourceName(java.lang.String)
    .threshold(java.lang.Number)
//  .contactProtocols(java.util.List<java.lang.String>)
//  .datapointsToAlarm(java.lang.Number)
//  .notificationEnabled(java.lang.Boolean|IResolvable)
//  .notificationTriggers(java.util.List<java.lang.String>)
//  .treatMissingData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | The name for the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The arithmetic operation to use when comparing the specified statistic to the threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | The number of most recent periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the metric to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.monitoredResourceName">monitoredResourceName</a></code> | <code>java.lang.String</code> | The name of the Lightsail resource that the alarm monitors. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The value against which the specified statistic is compared. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.contactProtocols">contactProtocols</a></code> | <code>java.util.List<java.lang.String></code> | The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | The number of data points that must be not within the specified threshold to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationEnabled">notificationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationTriggers">notificationTriggers</a></code> | <code>java.util.List<java.lang.String></code> | The alarm states that trigger a notification. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | Sets how this alarm will handle missing data points. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

The name for the alarm.

Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#alarm_name LightsailAlarm#alarm_name}

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The arithmetic operation to use when comparing the specified statistic to the threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#comparison_operator LightsailAlarm#comparison_operator}

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

The number of most recent periods over which data is compared to the specified threshold.

If you are setting an "M out of N" alarm, this value (evaluationPeriods) is the N.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#evaluation_periods LightsailAlarm#evaluation_periods}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The name of the metric to associate with the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#metric_name LightsailAlarm#metric_name}

---

##### `monitoredResourceName`<sup>Required</sup> <a name="monitoredResourceName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.monitoredResourceName"></a>

```java
public java.lang.String getMonitoredResourceName();
```

- *Type:* java.lang.String

The name of the Lightsail resource that the alarm monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#monitored_resource_name LightsailAlarm#monitored_resource_name}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The value against which the specified statistic is compared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#threshold LightsailAlarm#threshold}

---

##### `contactProtocols`<sup>Optional</sup> <a name="contactProtocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.contactProtocols"></a>

```java
public java.util.List<java.lang.String> getContactProtocols();
```

- *Type:* java.util.List<java.lang.String>

The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#contact_protocols LightsailAlarm#contact_protocols}

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.datapointsToAlarm"></a>

```java
public java.lang.Number getDatapointsToAlarm();
```

- *Type:* java.lang.Number

The number of data points that must be not within the specified threshold to trigger the alarm.

If you are setting an "M out of N" alarm, this value (datapointsToAlarm) is the M.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#datapoints_to_alarm LightsailAlarm#datapoints_to_alarm}

---

##### `notificationEnabled`<sup>Optional</sup> <a name="notificationEnabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getNotificationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#notification_enabled LightsailAlarm#notification_enabled}

---

##### `notificationTriggers`<sup>Optional</sup> <a name="notificationTriggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationTriggers"></a>

```java
public java.util.List<java.lang.String> getNotificationTriggers();
```

- *Type:* java.util.List<java.lang.String>

The alarm states that trigger a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#notification_triggers LightsailAlarm#notification_triggers}

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.treatMissingData"></a>

```java
public java.lang.String getTreatMissingData();
```

- *Type:* java.lang.String

Sets how this alarm will handle missing data points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_alarm#treat_missing_data LightsailAlarm#treat_missing_data}

---



