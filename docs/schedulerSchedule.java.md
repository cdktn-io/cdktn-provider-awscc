# `schedulerSchedule` Submodule <a name="`schedulerSchedule` Submodule" id="@cdktn/provider-awscc.schedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchedulerSchedule <a name="SchedulerSchedule" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule awscc_scheduler_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerSchedule;

SchedulerSchedule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .flexibleTimeWindow(SchedulerScheduleFlexibleTimeWindow)
    .scheduleExpression(java.lang.String)
    .target(SchedulerScheduleTarget)
//  .description(java.lang.String)
//  .endDate(java.lang.String)
//  .groupName(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .name(java.lang.String)
//  .scheduleExpressionTimezone(java.lang.String)
//  .startDate(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.flexibleTimeWindow">flexibleTimeWindow</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | Flexible time window allows configuration of a window within which a schedule can be invoked. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | The scheduling expression. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | The schedule target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.endDate">endDate</a></code> | <code>java.lang.String</code> | The date, in UTC, before which the schedule can invoke its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.groupName">groupName</a></code> | <code>java.lang.String</code> | The name of the schedule group to associate with this schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN for a KMS Key that will be used to encrypt customer data. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>java.lang.String</code> | The timezone in which the scheduling expression is evaluated. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.startDate">startDate</a></code> | <code>java.lang.String</code> | The date, in UTC, after which the schedule can begin invoking its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Specifies whether the schedule is enabled or disabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `flexibleTimeWindow`<sup>Required</sup> <a name="flexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.flexibleTimeWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

Flexible time window allows configuration of a window within which a schedule can be invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#flexible_time_window SchedulerSchedule#flexible_time_window}

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpression"></a>

- *Type:* java.lang.String

The scheduling expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

The schedule target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#target SchedulerSchedule#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#description SchedulerSchedule#description}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.endDate"></a>

- *Type:* java.lang.String

The date, in UTC, before which the schedule can invoke its target.

Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#end_date SchedulerSchedule#end_date}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.groupName"></a>

- *Type:* java.lang.String

The name of the schedule group to associate with this schedule.

If you omit this, the default schedule group is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#group_name SchedulerSchedule#group_name}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

The ARN for a KMS Key that will be used to encrypt customer data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}.

---

##### `scheduleExpressionTimezone`<sup>Optional</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpressionTimezone"></a>

- *Type:* java.lang.String

The timezone in which the scheduling expression is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.startDate"></a>

- *Type:* java.lang.String

The date, in UTC, after which the schedule can begin invoking its target.

Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#start_date SchedulerSchedule#start_date}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Specifies whether the schedule is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#state SchedulerSchedule#state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow">putFlexibleTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetScheduleExpressionTimezone">resetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFlexibleTimeWindow` <a name="putFlexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow"></a>

```java
public void putFlexibleTimeWindow(SchedulerScheduleFlexibleTimeWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget"></a>

```java
public void putTarget(SchedulerScheduleTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetEndDate"></a>

```java
public void resetEndDate()
```

##### `resetGroupName` <a name="resetGroupName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetGroupName"></a>

```java
public void resetGroupName()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetName"></a>

```java
public void resetName()
```

##### `resetScheduleExpressionTimezone` <a name="resetScheduleExpressionTimezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetScheduleExpressionTimezone"></a>

```java
public void resetScheduleExpressionTimezone()
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetStartDate"></a>

```java
public void resetStartDate()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SchedulerSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerSchedule;

SchedulerSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerSchedule;

SchedulerSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerSchedule;

SchedulerSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerSchedule;

SchedulerSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SchedulerSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SchedulerSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SchedulerSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SchedulerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SchedulerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindow">flexibleTimeWindow</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference">SchedulerScheduleFlexibleTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference">SchedulerScheduleTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDateInput">endDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindowInput">flexibleTimeWindowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezoneInput">scheduleExpressionTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDateInput">startDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.targetInput">targetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `flexibleTimeWindow`<sup>Required</sup> <a name="flexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindow"></a>

```java
public SchedulerScheduleFlexibleTimeWindowOutputReference getFlexibleTimeWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference">SchedulerScheduleFlexibleTimeWindowOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.target"></a>

```java
public SchedulerScheduleTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference">SchedulerScheduleTargetOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDateInput"></a>

```java
public java.lang.String getEndDateInput();
```

- *Type:* java.lang.String

---

##### `flexibleTimeWindowInput`<sup>Optional</sup> <a name="flexibleTimeWindowInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindowInput"></a>

```java
public IResolvable|SchedulerScheduleFlexibleTimeWindow getFlexibleTimeWindowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="scheduleExpressionTimezoneInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezoneInput"></a>

```java
public java.lang.String getScheduleExpressionTimezoneInput();
```

- *Type:* java.lang.String

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDateInput"></a>

```java
public java.lang.String getStartDateInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.targetInput"></a>

```java
public IResolvable|SchedulerScheduleTarget getTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionTimezone`<sup>Required</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezone"></a>

```java
public java.lang.String getScheduleExpressionTimezone();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SchedulerScheduleConfig <a name="SchedulerScheduleConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleConfig;

SchedulerScheduleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .flexibleTimeWindow(SchedulerScheduleFlexibleTimeWindow)
    .scheduleExpression(java.lang.String)
    .target(SchedulerScheduleTarget)
//  .description(java.lang.String)
//  .endDate(java.lang.String)
//  .groupName(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .name(java.lang.String)
//  .scheduleExpressionTimezone(java.lang.String)
//  .startDate(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.flexibleTimeWindow">flexibleTimeWindow</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | Flexible time window allows configuration of a window within which a schedule can be invoked. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | The scheduling expression. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | The schedule target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.endDate">endDate</a></code> | <code>java.lang.String</code> | The date, in UTC, before which the schedule can invoke its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.groupName">groupName</a></code> | <code>java.lang.String</code> | The name of the schedule group to associate with this schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN for a KMS Key that will be used to encrypt customer data. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>java.lang.String</code> | The timezone in which the scheduling expression is evaluated. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.startDate">startDate</a></code> | <code>java.lang.String</code> | The date, in UTC, after which the schedule can begin invoking its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.state">state</a></code> | <code>java.lang.String</code> | Specifies whether the schedule is enabled or disabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `flexibleTimeWindow`<sup>Required</sup> <a name="flexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.flexibleTimeWindow"></a>

```java
public SchedulerScheduleFlexibleTimeWindow getFlexibleTimeWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

Flexible time window allows configuration of a window within which a schedule can be invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#flexible_time_window SchedulerSchedule#flexible_time_window}

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

The scheduling expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.target"></a>

```java
public SchedulerScheduleTarget getTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

The schedule target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#target SchedulerSchedule#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#description SchedulerSchedule#description}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

The date, in UTC, before which the schedule can invoke its target.

Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#end_date SchedulerSchedule#end_date}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

The name of the schedule group to associate with this schedule.

If you omit this, the default schedule group is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#group_name SchedulerSchedule#group_name}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The ARN for a KMS Key that will be used to encrypt customer data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}.

---

##### `scheduleExpressionTimezone`<sup>Optional</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpressionTimezone"></a>

```java
public java.lang.String getScheduleExpressionTimezone();
```

- *Type:* java.lang.String

The timezone in which the scheduling expression is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

The date, in UTC, after which the schedule can begin invoking its target.

Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#start_date SchedulerSchedule#start_date}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Specifies whether the schedule is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#state SchedulerSchedule#state}

---

### SchedulerScheduleFlexibleTimeWindow <a name="SchedulerScheduleFlexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleFlexibleTimeWindow;

SchedulerScheduleFlexibleTimeWindow.builder()
    .mode(java.lang.String)
//  .maximumWindowInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.mode">mode</a></code> | <code>java.lang.String</code> | Determines whether the schedule is executed within a flexible time window. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.maximumWindowInMinutes">maximumWindowInMinutes</a></code> | <code>java.lang.Number</code> | The maximum time window during which a schedule can be invoked. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Determines whether the schedule is executed within a flexible time window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#mode SchedulerSchedule#mode}

---

##### `maximumWindowInMinutes`<sup>Optional</sup> <a name="maximumWindowInMinutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.maximumWindowInMinutes"></a>

```java
public java.lang.Number getMaximumWindowInMinutes();
```

- *Type:* java.lang.Number

The maximum time window during which a schedule can be invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#maximum_window_in_minutes SchedulerSchedule#maximum_window_in_minutes}

---

### SchedulerScheduleTarget <a name="SchedulerScheduleTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTarget;

SchedulerScheduleTarget.builder()
    .arn(java.lang.String)
    .roleArn(java.lang.String)
//  .deadLetterConfig(SchedulerScheduleTargetDeadLetterConfig)
//  .ecsParameters(SchedulerScheduleTargetEcsParameters)
//  .eventBridgeParameters(SchedulerScheduleTargetEventBridgeParameters)
//  .input(java.lang.String)
//  .kinesisParameters(SchedulerScheduleTargetKinesisParameters)
//  .retryPolicy(SchedulerScheduleTargetRetryPolicy)
//  .sageMakerPipelineParameters(SchedulerScheduleTargetSageMakerPipelineParameters)
//  .sqsParameters(SchedulerScheduleTargetSqsParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.arn">arn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | A DeadLetterConfig object that contains information about a dead-letter queue configuration. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.ecsParameters">ecsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | The custom parameters to be used when the target is an Amazon ECS task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.eventBridgeParameters">eventBridgeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a></code> | EventBridge PutEvent predefined target type. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.input">input</a></code> | <code>java.lang.String</code> | The text, or well-formed JSON, passed to the target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.kinesisParameters">kinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | A RetryPolicy object that includes information about the retry policy settings. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sageMakerPipelineParameters">sageMakerPipelineParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a></code> | These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sqsParameters">sqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | Contains the message group ID to use when the target is a FIFO queue. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#role_arn SchedulerSchedule#role_arn}

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.deadLetterConfig"></a>

```java
public SchedulerScheduleTargetDeadLetterConfig getDeadLetterConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

A DeadLetterConfig object that contains information about a dead-letter queue configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#dead_letter_config SchedulerSchedule#dead_letter_config}

---

##### `ecsParameters`<sup>Optional</sup> <a name="ecsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.ecsParameters"></a>

```java
public SchedulerScheduleTargetEcsParameters getEcsParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

The custom parameters to be used when the target is an Amazon ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#ecs_parameters SchedulerSchedule#ecs_parameters}

---

##### `eventBridgeParameters`<sup>Optional</sup> <a name="eventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.eventBridgeParameters"></a>

```java
public SchedulerScheduleTargetEventBridgeParameters getEventBridgeParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

EventBridge PutEvent predefined target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#event_bridge_parameters SchedulerSchedule#event_bridge_parameters}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

The text, or well-formed JSON, passed to the target.

If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#input SchedulerSchedule#input}

---

##### `kinesisParameters`<sup>Optional</sup> <a name="kinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.kinesisParameters"></a>

```java
public SchedulerScheduleTargetKinesisParameters getKinesisParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#kinesis_parameters SchedulerSchedule#kinesis_parameters}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.retryPolicy"></a>

```java
public SchedulerScheduleTargetRetryPolicy getRetryPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

A RetryPolicy object that includes information about the retry policy settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#retry_policy SchedulerSchedule#retry_policy}

---

##### `sageMakerPipelineParameters`<sup>Optional</sup> <a name="sageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sageMakerPipelineParameters"></a>

```java
public SchedulerScheduleTargetSageMakerPipelineParameters getSageMakerPipelineParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#sage_maker_pipeline_parameters SchedulerSchedule#sage_maker_pipeline_parameters}

---

##### `sqsParameters`<sup>Optional</sup> <a name="sqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sqsParameters"></a>

```java
public SchedulerScheduleTargetSqsParameters getSqsParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

Contains the message group ID to use when the target is a FIFO queue.

If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#sqs_parameters SchedulerSchedule#sqs_parameters}

---

### SchedulerScheduleTargetDeadLetterConfig <a name="SchedulerScheduleTargetDeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetDeadLetterConfig;

SchedulerScheduleTargetDeadLetterConfig.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | The ARN of the SQS queue specified as the target for the dead-letter queue. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The ARN of the SQS queue specified as the target for the dead-letter queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}

---

### SchedulerScheduleTargetEcsParameters <a name="SchedulerScheduleTargetEcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParameters;

SchedulerScheduleTargetEcsParameters.builder()
//  .capacityProviderStrategy(IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersCapacityProviderStrategy>)
//  .enableEcsManagedTags(java.lang.Boolean|IResolvable)
//  .enableExecuteCommand(java.lang.Boolean|IResolvable)
//  .group(java.lang.String)
//  .launchType(java.lang.String)
//  .networkConfiguration(SchedulerScheduleTargetEcsParametersNetworkConfiguration)
//  .placementConstraints(IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersPlacementConstraints>)
//  .placementStrategy(IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersPlacementStrategy>)
//  .platformVersion(java.lang.String)
//  .propagateTags(java.lang.String)
//  .referenceId(java.lang.String)
//  .tags(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .taskCount(java.lang.Number)
//  .taskDefinitionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>></code> | The capacity provider strategy to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable Amazon ECS managed tags for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to enable the execute command functionality for the containers in this task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.group">group</a></code> | <code>java.lang.String</code> | Specifies an ECS task group for the task. The maximum length is 255 characters. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.launchType">launchType</a></code> | <code>java.lang.String</code> | Specifies the launch type on which your task is running. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | This structure specifies the network configuration for an ECS task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementConstraints">placementConstraints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>></code> | An array of placement constraint objects to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementStrategy">placementStrategy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>></code> | The placement strategy objects to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | Specifies whether to propagate the tags from the task definition to the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.referenceId">referenceId</a></code> | <code>java.lang.String</code> | The reference ID to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | The metadata that you apply to the task to help you categorize and organize them. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskCount">taskCount</a></code> | <code>java.lang.Number</code> | The number of tasks to create based on TaskDefinition. The default is 1. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>java.lang.String</code> | The ARN of the task definition to use if the event target is an Amazon ECS task. |

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.capacityProviderStrategy"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersCapacityProviderStrategy> getCapacityProviderStrategy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>>

The capacity provider strategy to use for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#capacity_provider_strategy SchedulerSchedule#capacity_provider_strategy}

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableEcsManagedTags"></a>

```java
public java.lang.Boolean|IResolvable getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable Amazon ECS managed tags for the task.

For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#enable_ecs_managed_tags SchedulerSchedule#enable_ecs_managed_tags}

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableExecuteCommand"></a>

```java
public java.lang.Boolean|IResolvable getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to enable the execute command functionality for the containers in this task.

If true, this enables execute command functionality on all containers in the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#enable_execute_command SchedulerSchedule#enable_execute_command}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Specifies an ECS task group for the task. The maximum length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#group SchedulerSchedule#group}

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

Specifies the launch type on which your task is running.

The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#launch_type SchedulerSchedule#launch_type}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.networkConfiguration"></a>

```java
public SchedulerScheduleTargetEcsParametersNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

This structure specifies the network configuration for an ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#network_configuration SchedulerSchedule#network_configuration}

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementConstraints"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersPlacementConstraints> getPlacementConstraints();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>>

An array of placement constraint objects to use for the task.

You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#placement_constraints SchedulerSchedule#placement_constraints}

---

##### `placementStrategy`<sup>Optional</sup> <a name="placementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementStrategy"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersPlacementStrategy> getPlacementStrategy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>>

The placement strategy objects to use for the task.

You can specify a maximum of five strategy rules per task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#placement_strategy SchedulerSchedule#placement_strategy}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#platform_version SchedulerSchedule#platform_version}

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

Specifies whether to propagate the tags from the task definition to the task.

If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#propagate_tags SchedulerSchedule#propagate_tags}

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.referenceId"></a>

```java
public java.lang.String getReferenceId();
```

- *Type:* java.lang.String

The reference ID to use for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#reference_id SchedulerSchedule#reference_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.tags"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

The metadata that you apply to the task to help you categorize and organize them.

Each tag consists of a key and an optional value, both of which you define. To learn more, see RunTask in the Amazon ECS API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#tags SchedulerSchedule#tags}

---

##### `taskCount`<sup>Optional</sup> <a name="taskCount" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskCount"></a>

```java
public java.lang.Number getTaskCount();
```

- *Type:* java.lang.Number

The number of tasks to create based on TaskDefinition. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#task_count SchedulerSchedule#task_count}

---

##### `taskDefinitionArn`<sup>Optional</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskDefinitionArn"></a>

```java
public java.lang.String getTaskDefinitionArn();
```

- *Type:* java.lang.String

The ARN of the task definition to use if the event target is an Amazon ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#task_definition_arn SchedulerSchedule#task_definition_arn}

---

### SchedulerScheduleTargetEcsParametersCapacityProviderStrategy <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy;

SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.builder()
//  .base(java.lang.Number)
//  .capacityProvider(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.base">base</a></code> | <code>java.lang.Number</code> | The base value designates how many tasks, at a minimum, to run on the specified capacity provider. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | The short name of the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.weight">weight</a></code> | <code>java.lang.Number</code> | The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. |

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

The base value designates how many tasks, at a minimum, to run on the specified capacity provider.

Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#base SchedulerSchedule#base}

---

##### `capacityProvider`<sup>Optional</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

The short name of the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#capacity_provider SchedulerSchedule#capacity_provider}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider.

The weight value is taken into consideration after the base value, if defined, is satisfied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#weight SchedulerSchedule#weight}

---

### SchedulerScheduleTargetEcsParametersNetworkConfiguration <a name="SchedulerScheduleTargetEcsParametersNetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration;

SchedulerScheduleTargetEcsParametersNetworkConfiguration.builder()
//  .awsvpcConfiguration(SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.awsvpcConfiguration">awsvpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a></code> | This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. |

---

##### `awsvpcConfiguration`<sup>Optional</sup> <a name="awsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.awsvpcConfiguration"></a>

```java
public SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration getAwsvpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used.

This structure is relevant only for ECS tasks that use the awsvpc network mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#awsvpc_configuration SchedulerSchedule#awsvpc_configuration}

---

### SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration;

SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.builder()
//  .assignPublicIp(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.String</code> | Specifies whether the task's elastic network interface receives a public IP address. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the security groups associated with the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the subnets associated with the task. |

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp"></a>

```java
public java.lang.String getAssignPublicIp();
```

- *Type:* java.lang.String

Specifies whether the task's elastic network interface receives a public IP address.

You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#assign_public_ip SchedulerSchedule#assign_public_ip}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Specifies the security groups associated with the task.

These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#security_groups SchedulerSchedule#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Specifies the subnets associated with the task.

These subnets must all be in the same VPC. You can specify as many as 16 subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#subnets SchedulerSchedule#subnets}

---

### SchedulerScheduleTargetEcsParametersPlacementConstraints <a name="SchedulerScheduleTargetEcsParametersPlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersPlacementConstraints;

SchedulerScheduleTargetEcsParametersPlacementConstraints.builder()
//  .expression(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.expression">expression</a></code> | <code>java.lang.String</code> | A cluster query language expression to apply to the constraint. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.type">type</a></code> | <code>java.lang.String</code> | The type of constraint. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

A cluster query language expression to apply to the constraint.

You cannot specify an expression if the constraint type is distinctInstance. To learn more, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#expression SchedulerSchedule#expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of constraint.

Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#type SchedulerSchedule#type}

---

### SchedulerScheduleTargetEcsParametersPlacementStrategy <a name="SchedulerScheduleTargetEcsParametersPlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersPlacementStrategy;

SchedulerScheduleTargetEcsParametersPlacementStrategy.builder()
//  .field(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.field">field</a></code> | <code>java.lang.String</code> | The field to apply the placement strategy against. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.type">type</a></code> | <code>java.lang.String</code> | The type of placement strategy. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

The field to apply the placement strategy against.

For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#field SchedulerSchedule#field}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of placement strategy.

The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#type SchedulerSchedule#type}

---

### SchedulerScheduleTargetEventBridgeParameters <a name="SchedulerScheduleTargetEventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEventBridgeParameters;

SchedulerScheduleTargetEventBridgeParameters.builder()
//  .detailType(java.lang.String)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.detailType">detailType</a></code> | <code>java.lang.String</code> | Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.source">source</a></code> | <code>java.lang.String</code> | The source of the event. |

---

##### `detailType`<sup>Optional</sup> <a name="detailType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.detailType"></a>

```java
public java.lang.String getDetailType();
```

- *Type:* java.lang.String

Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#detail_type SchedulerSchedule#detail_type}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The source of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#source SchedulerSchedule#source}

---

### SchedulerScheduleTargetKinesisParameters <a name="SchedulerScheduleTargetKinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetKinesisParameters;

SchedulerScheduleTargetKinesisParameters.builder()
//  .partitionKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.property.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | The custom parameter used as the Kinesis partition key. |

---

##### `partitionKey`<sup>Optional</sup> <a name="partitionKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.property.partitionKey"></a>

```java
public java.lang.String getPartitionKey();
```

- *Type:* java.lang.String

The custom parameter used as the Kinesis partition key.

For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#partition_key SchedulerSchedule#partition_key}

---

### SchedulerScheduleTargetRetryPolicy <a name="SchedulerScheduleTargetRetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetRetryPolicy;

SchedulerScheduleTargetRetryPolicy.builder()
//  .maximumEventAgeInSeconds(java.lang.Number)
//  .maximumRetryAttempts(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | The maximum amount of time, in seconds, to continue to make retry attempts. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>java.lang.Number</code> | The maximum number of retry attempts to make before the request fails. |

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumEventAgeInSeconds"></a>

```java
public java.lang.Number getMaximumEventAgeInSeconds();
```

- *Type:* java.lang.Number

The maximum amount of time, in seconds, to continue to make retry attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#maximum_event_age_in_seconds SchedulerSchedule#maximum_event_age_in_seconds}

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumRetryAttempts"></a>

```java
public java.lang.Number getMaximumRetryAttempts();
```

- *Type:* java.lang.Number

The maximum number of retry attempts to make before the request fails.

Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the MaximumEventAgeInSeconds is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#maximum_retry_attempts SchedulerSchedule#maximum_retry_attempts}

---

### SchedulerScheduleTargetSageMakerPipelineParameters <a name="SchedulerScheduleTargetSageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetSageMakerPipelineParameters;

SchedulerScheduleTargetSageMakerPipelineParameters.builder()
//  .pipelineParameterList(IResolvable|java.util.List<SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.property.pipelineParameterList">pipelineParameterList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>></code> | List of Parameter names and values for SageMaker Model Building Pipeline execution. |

---

##### `pipelineParameterList`<sup>Optional</sup> <a name="pipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.property.pipelineParameterList"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct> getPipelineParameterList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>>

List of Parameter names and values for SageMaker Model Building Pipeline execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#pipeline_parameter_list SchedulerSchedule#pipeline_parameter_list}

---

### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct;

SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.name">name</a></code> | <code>java.lang.String</code> | Name of parameter to start execution of a SageMaker Model Building Pipeline. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.value">value</a></code> | <code>java.lang.String</code> | Value of parameter to start execution of a SageMaker Model Building Pipeline. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of parameter to start execution of a SageMaker Model Building Pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of parameter to start execution of a SageMaker Model Building Pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#value SchedulerSchedule#value}

---

### SchedulerScheduleTargetSqsParameters <a name="SchedulerScheduleTargetSqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetSqsParameters;

SchedulerScheduleTargetSqsParameters.builder()
//  .messageGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.property.messageGroupId">messageGroupId</a></code> | <code>java.lang.String</code> | The FIFO message group ID to use as the target. |

---

##### `messageGroupId`<sup>Optional</sup> <a name="messageGroupId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.property.messageGroupId"></a>

```java
public java.lang.String getMessageGroupId();
```

- *Type:* java.lang.String

The FIFO message group ID to use as the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#message_group_id SchedulerSchedule#message_group_id}

---

## Classes <a name="Classes" id="Classes"></a>

### SchedulerScheduleFlexibleTimeWindowOutputReference <a name="SchedulerScheduleFlexibleTimeWindowOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleFlexibleTimeWindowOutputReference;

new SchedulerScheduleFlexibleTimeWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resetMaximumWindowInMinutes">resetMaximumWindowInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumWindowInMinutes` <a name="resetMaximumWindowInMinutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resetMaximumWindowInMinutes"></a>

```java
public void resetMaximumWindowInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutesInput">maximumWindowInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes">maximumWindowInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumWindowInMinutesInput`<sup>Optional</sup> <a name="maximumWindowInMinutesInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutesInput"></a>

```java
public java.lang.Number getMaximumWindowInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `maximumWindowInMinutes`<sup>Required</sup> <a name="maximumWindowInMinutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes"></a>

```java
public java.lang.Number getMaximumWindowInMinutes();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleFlexibleTimeWindow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

---


### SchedulerScheduleTargetDeadLetterConfigOutputReference <a name="SchedulerScheduleTargetDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetDeadLetterConfigOutputReference;

new SchedulerScheduleTargetDeadLetterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetDeadLetterConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

---


### SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList;

new SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get"></a>

```java
public SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersCapacityProviderStrategy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>>

---


### SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference;

new SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider">resetCapacityProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetBase"></a>

```java
public void resetBase()
```

##### `resetCapacityProvider` <a name="resetCapacityProvider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider"></a>

```java
public void resetCapacityProvider()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.baseInput"></a>

```java
public java.lang.Number getBaseInput();
```

- *Type:* java.lang.Number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```java
public java.lang.String getCapacityProviderInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetEcsParametersCapacityProviderStrategy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>

---


### SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference;

new SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetAssignPublicIp"></a>

```java
public void resetAssignPublicIp()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIpInput"></a>

```java
public java.lang.String getAssignPublicIpInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp"></a>

```java
public java.lang.String getAssignPublicIp();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

---


### SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference;

new SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration">putAwsvpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetAwsvpcConfiguration">resetAwsvpcConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsvpcConfiguration` <a name="putAwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration"></a>

```java
public void putAwsvpcConfiguration(SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

---

##### `resetAwsvpcConfiguration` <a name="resetAwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetAwsvpcConfiguration"></a>

```java
public void resetAwsvpcConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfiguration">awsvpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfigurationInput">awsvpcConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsvpcConfiguration`<sup>Required</sup> <a name="awsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfiguration"></a>

```java
public SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference getAwsvpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference</a>

---

##### `awsvpcConfigurationInput`<sup>Optional</sup> <a name="awsvpcConfigurationInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfigurationInput"></a>

```java
public IResolvable|SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration getAwsvpcConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetEcsParametersNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---


### SchedulerScheduleTargetEcsParametersOutputReference <a name="SchedulerScheduleTargetEcsParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersOutputReference;

new SchedulerScheduleTargetEcsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints">putPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy">putPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableEcsManagedTags">resetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableExecuteCommand">resetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementConstraints">resetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementStrategy">resetPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetReferenceId">resetReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskCount">resetTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskDefinitionArn">resetTaskDefinitionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy"></a>

```java
public void putCapacityProviderStrategy(IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersCapacityProviderStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(SchedulerScheduleTargetEcsParametersNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---

##### `putPlacementConstraints` <a name="putPlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints"></a>

```java
public void putPlacementConstraints(IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersPlacementConstraints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>>

---

##### `putPlacementStrategy` <a name="putPlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy"></a>

```java
public void putPlacementStrategy(IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersPlacementStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>>

---

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetCapacityProviderStrategy"></a>

```java
public void resetCapacityProviderStrategy()
```

##### `resetEnableEcsManagedTags` <a name="resetEnableEcsManagedTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableEcsManagedTags"></a>

```java
public void resetEnableEcsManagedTags()
```

##### `resetEnableExecuteCommand` <a name="resetEnableExecuteCommand" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableExecuteCommand"></a>

```java
public void resetEnableExecuteCommand()
```

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetLaunchType"></a>

```java
public void resetLaunchType()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetPlacementConstraints` <a name="resetPlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementConstraints"></a>

```java
public void resetPlacementConstraints()
```

##### `resetPlacementStrategy` <a name="resetPlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementStrategy"></a>

```java
public void resetPlacementStrategy()
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlatformVersion"></a>

```java
public void resetPlatformVersion()
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPropagateTags"></a>

```java
public void resetPropagateTags()
```

##### `resetReferenceId` <a name="resetReferenceId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetReferenceId"></a>

```java
public void resetReferenceId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaskCount` <a name="resetTaskCount" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskCount"></a>

```java
public void resetTaskCount()
```

##### `resetTaskDefinitionArn` <a name="resetTaskDefinitionArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskDefinitionArn"></a>

```java
public void resetTaskDefinitionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList">SchedulerScheduleTargetEcsParametersPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy">placementStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList">SchedulerScheduleTargetEcsParametersPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTagsInput">enableEcsManagedTagsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommandInput">enableExecuteCommandInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchTypeInput">launchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraintsInput">placementConstraintsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategyInput">placementStrategyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersionInput">platformVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTagsInput">propagateTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceIdInput">referenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCountInput">taskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArnInput">taskDefinitionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchType">launchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceId">referenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCount">taskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy"></a>

```java
public SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList getCapacityProviderStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration"></a>

```java
public SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a>

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints"></a>

```java
public SchedulerScheduleTargetEcsParametersPlacementConstraintsList getPlacementConstraints();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList">SchedulerScheduleTargetEcsParametersPlacementConstraintsList</a>

---

##### `placementStrategy`<sup>Required</sup> <a name="placementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy"></a>

```java
public SchedulerScheduleTargetEcsParametersPlacementStrategyList getPlacementStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList">SchedulerScheduleTargetEcsParametersPlacementStrategyList</a>

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategyInput"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersCapacityProviderStrategy> getCapacityProviderStrategyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>>

---

##### `enableEcsManagedTagsInput`<sup>Optional</sup> <a name="enableEcsManagedTagsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableEcsManagedTagsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableExecuteCommandInput`<sup>Optional</sup> <a name="enableExecuteCommandInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommandInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableExecuteCommandInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchTypeInput"></a>

```java
public java.lang.String getLaunchTypeInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfigurationInput"></a>

```java
public IResolvable|SchedulerScheduleTargetEcsParametersNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---

##### `placementConstraintsInput`<sup>Optional</sup> <a name="placementConstraintsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraintsInput"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersPlacementConstraints> getPlacementConstraintsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>>

---

##### `placementStrategyInput`<sup>Optional</sup> <a name="placementStrategyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategyInput"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersPlacementStrategy> getPlacementStrategyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>>

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersionInput"></a>

```java
public java.lang.String getPlatformVersionInput();
```

- *Type:* java.lang.String

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTagsInput"></a>

```java
public java.lang.String getPropagateTagsInput();
```

- *Type:* java.lang.String

---

##### `referenceIdInput`<sup>Optional</sup> <a name="referenceIdInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceIdInput"></a>

```java
public java.lang.String getReferenceIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `taskCountInput`<sup>Optional</sup> <a name="taskCountInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCountInput"></a>

```java
public java.lang.Number getTaskCountInput();
```

- *Type:* java.lang.Number

---

##### `taskDefinitionArnInput`<sup>Optional</sup> <a name="taskDefinitionArnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArnInput"></a>

```java
public java.lang.String getTaskDefinitionArnInput();
```

- *Type:* java.lang.String

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags"></a>

```java
public java.lang.Boolean|IResolvable getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand"></a>

```java
public java.lang.Boolean|IResolvable getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceId"></a>

```java
public java.lang.String getReferenceId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tags"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCount"></a>

```java
public java.lang.Number getTaskCount();
```

- *Type:* java.lang.Number

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn"></a>

```java
public java.lang.String getTaskDefinitionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetEcsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

---


### SchedulerScheduleTargetEcsParametersPlacementConstraintsList <a name="SchedulerScheduleTargetEcsParametersPlacementConstraintsList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList;

new SchedulerScheduleTargetEcsParametersPlacementConstraintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get"></a>

```java
public SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersPlacementConstraints> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>>

---


### SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference <a name="SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference;

new SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetEcsParametersPlacementConstraints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>

---


### SchedulerScheduleTargetEcsParametersPlacementStrategyList <a name="SchedulerScheduleTargetEcsParametersPlacementStrategyList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList;

new SchedulerScheduleTargetEcsParametersPlacementStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get"></a>

```java
public SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetEcsParametersPlacementStrategy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>>

---


### SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference <a name="SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference;

new SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetField"></a>

```java
public void resetField()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetEcsParametersPlacementStrategy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>

---


### SchedulerScheduleTargetEventBridgeParametersOutputReference <a name="SchedulerScheduleTargetEventBridgeParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetEventBridgeParametersOutputReference;

new SchedulerScheduleTargetEventBridgeParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetDetailType">resetDetailType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDetailType` <a name="resetDetailType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetDetailType"></a>

```java
public void resetDetailType()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailTypeInput">detailTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailType">detailType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `detailTypeInput`<sup>Optional</sup> <a name="detailTypeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailTypeInput"></a>

```java
public java.lang.String getDetailTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `detailType`<sup>Required</sup> <a name="detailType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailType"></a>

```java
public java.lang.String getDetailType();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetEventBridgeParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

---


### SchedulerScheduleTargetKinesisParametersOutputReference <a name="SchedulerScheduleTargetKinesisParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetKinesisParametersOutputReference;

new SchedulerScheduleTargetKinesisParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resetPartitionKey">resetPartitionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPartitionKey` <a name="resetPartitionKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resetPartitionKey"></a>

```java
public void resetPartitionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKeyInput">partitionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKeyInput"></a>

```java
public java.lang.String getPartitionKeyInput();
```

- *Type:* java.lang.String

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey"></a>

```java
public java.lang.String getPartitionKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetKinesisParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

---


### SchedulerScheduleTargetOutputReference <a name="SchedulerScheduleTargetOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetOutputReference;

new SchedulerScheduleTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig">putDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters">putEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters">putEventBridgeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters">putKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters">putSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters">putSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetDeadLetterConfig">resetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEcsParameters">resetEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEventBridgeParameters">resetEventBridgeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetKinesisParameters">resetKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSageMakerPipelineParameters">resetSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSqsParameters">resetSqsParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeadLetterConfig` <a name="putDeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig"></a>

```java
public void putDeadLetterConfig(SchedulerScheduleTargetDeadLetterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

---

##### `putEcsParameters` <a name="putEcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters"></a>

```java
public void putEcsParameters(SchedulerScheduleTargetEcsParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

---

##### `putEventBridgeParameters` <a name="putEventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters"></a>

```java
public void putEventBridgeParameters(SchedulerScheduleTargetEventBridgeParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

---

##### `putKinesisParameters` <a name="putKinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters"></a>

```java
public void putKinesisParameters(SchedulerScheduleTargetKinesisParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy"></a>

```java
public void putRetryPolicy(SchedulerScheduleTargetRetryPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

---

##### `putSageMakerPipelineParameters` <a name="putSageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters"></a>

```java
public void putSageMakerPipelineParameters(SchedulerScheduleTargetSageMakerPipelineParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

---

##### `putSqsParameters` <a name="putSqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters"></a>

```java
public void putSqsParameters(SchedulerScheduleTargetSqsParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

---

##### `resetDeadLetterConfig` <a name="resetDeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetDeadLetterConfig"></a>

```java
public void resetDeadLetterConfig()
```

##### `resetEcsParameters` <a name="resetEcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEcsParameters"></a>

```java
public void resetEcsParameters()
```

##### `resetEventBridgeParameters` <a name="resetEventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEventBridgeParameters"></a>

```java
public void resetEventBridgeParameters()
```

##### `resetInput` <a name="resetInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetInput"></a>

```java
public void resetInput()
```

##### `resetKinesisParameters` <a name="resetKinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetKinesisParameters"></a>

```java
public void resetKinesisParameters()
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetRetryPolicy"></a>

```java
public void resetRetryPolicy()
```

##### `resetSageMakerPipelineParameters` <a name="resetSageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSageMakerPipelineParameters"></a>

```java
public void resetSageMakerPipelineParameters()
```

##### `resetSqsParameters` <a name="resetSqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSqsParameters"></a>

```java
public void resetSqsParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference">SchedulerScheduleTargetDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParameters">ecsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference">SchedulerScheduleTargetEcsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParameters">eventBridgeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference">SchedulerScheduleTargetEventBridgeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParameters">kinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference">SchedulerScheduleTargetKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference">SchedulerScheduleTargetRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParameters">sageMakerPipelineParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference">SchedulerScheduleTargetSageMakerPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParameters">sqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference">SchedulerScheduleTargetSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfigInput">deadLetterConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParametersInput">ecsParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParametersInput">eventBridgeParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.inputInput">inputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParametersInput">kinesisParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParametersInput">sageMakerPipelineParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParametersInput">sqsParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.input">input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deadLetterConfig`<sup>Required</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfig"></a>

```java
public SchedulerScheduleTargetDeadLetterConfigOutputReference getDeadLetterConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference">SchedulerScheduleTargetDeadLetterConfigOutputReference</a>

---

##### `ecsParameters`<sup>Required</sup> <a name="ecsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParameters"></a>

```java
public SchedulerScheduleTargetEcsParametersOutputReference getEcsParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference">SchedulerScheduleTargetEcsParametersOutputReference</a>

---

##### `eventBridgeParameters`<sup>Required</sup> <a name="eventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParameters"></a>

```java
public SchedulerScheduleTargetEventBridgeParametersOutputReference getEventBridgeParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference">SchedulerScheduleTargetEventBridgeParametersOutputReference</a>

---

##### `kinesisParameters`<sup>Required</sup> <a name="kinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParameters"></a>

```java
public SchedulerScheduleTargetKinesisParametersOutputReference getKinesisParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference">SchedulerScheduleTargetKinesisParametersOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicy"></a>

```java
public SchedulerScheduleTargetRetryPolicyOutputReference getRetryPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference">SchedulerScheduleTargetRetryPolicyOutputReference</a>

---

##### `sageMakerPipelineParameters`<sup>Required</sup> <a name="sageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParameters"></a>

```java
public SchedulerScheduleTargetSageMakerPipelineParametersOutputReference getSageMakerPipelineParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference">SchedulerScheduleTargetSageMakerPipelineParametersOutputReference</a>

---

##### `sqsParameters`<sup>Required</sup> <a name="sqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParameters"></a>

```java
public SchedulerScheduleTargetSqsParametersOutputReference getSqsParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference">SchedulerScheduleTargetSqsParametersOutputReference</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `deadLetterConfigInput`<sup>Optional</sup> <a name="deadLetterConfigInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfigInput"></a>

```java
public IResolvable|SchedulerScheduleTargetDeadLetterConfig getDeadLetterConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

---

##### `ecsParametersInput`<sup>Optional</sup> <a name="ecsParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParametersInput"></a>

```java
public IResolvable|SchedulerScheduleTargetEcsParameters getEcsParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

---

##### `eventBridgeParametersInput`<sup>Optional</sup> <a name="eventBridgeParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParametersInput"></a>

```java
public IResolvable|SchedulerScheduleTargetEventBridgeParameters getEventBridgeParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.inputInput"></a>

```java
public java.lang.String getInputInput();
```

- *Type:* java.lang.String

---

##### `kinesisParametersInput`<sup>Optional</sup> <a name="kinesisParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParametersInput"></a>

```java
public IResolvable|SchedulerScheduleTargetKinesisParameters getKinesisParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicyInput"></a>

```java
public IResolvable|SchedulerScheduleTargetRetryPolicy getRetryPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `sageMakerPipelineParametersInput`<sup>Optional</sup> <a name="sageMakerPipelineParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParametersInput"></a>

```java
public IResolvable|SchedulerScheduleTargetSageMakerPipelineParameters getSageMakerPipelineParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

---

##### `sqsParametersInput`<sup>Optional</sup> <a name="sqsParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParametersInput"></a>

```java
public IResolvable|SchedulerScheduleTargetSqsParameters getSqsParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

---


### SchedulerScheduleTargetRetryPolicyOutputReference <a name="SchedulerScheduleTargetRetryPolicyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetRetryPolicyOutputReference;

new SchedulerScheduleTargetRetryPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds">resetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumRetryAttempts">resetMaximumRetryAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumEventAgeInSeconds` <a name="resetMaximumEventAgeInSeconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds"></a>

```java
public void resetMaximumEventAgeInSeconds()
```

##### `resetMaximumRetryAttempts` <a name="resetMaximumRetryAttempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumRetryAttempts"></a>

```java
public void resetMaximumRetryAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput">maximumEventAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput">maximumRetryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="maximumEventAgeInSecondsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput"></a>

```java
public java.lang.Number getMaximumEventAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maximumRetryAttemptsInput`<sup>Optional</sup> <a name="maximumRetryAttemptsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput"></a>

```java
public java.lang.Number getMaximumRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```java
public java.lang.Number getMaximumEventAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```java
public java.lang.Number getMaximumRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetRetryPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

---


### SchedulerScheduleTargetSageMakerPipelineParametersOutputReference <a name="SchedulerScheduleTargetSageMakerPipelineParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference;

new SchedulerScheduleTargetSageMakerPipelineParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList">putPipelineParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resetPipelineParameterList">resetPipelineParameterList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPipelineParameterList` <a name="putPipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList"></a>

```java
public void putPipelineParameterList(IResolvable|java.util.List<SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>>

---

##### `resetPipelineParameterList` <a name="resetPipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resetPipelineParameterList"></a>

```java
public void resetPipelineParameterList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterList">pipelineParameterList</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput">pipelineParameterListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pipelineParameterList`<sup>Required</sup> <a name="pipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterList"></a>

```java
public SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList getPipelineParameterList();
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList</a>

---

##### `pipelineParameterListInput`<sup>Optional</sup> <a name="pipelineParameterListInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct> getPipelineParameterListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetSageMakerPipelineParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

---


### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList;

new SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get"></a>

```java
public SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>>

---


### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference;

new SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>

---


### SchedulerScheduleTargetSqsParametersOutputReference <a name="SchedulerScheduleTargetSqsParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scheduler_schedule.SchedulerScheduleTargetSqsParametersOutputReference;

new SchedulerScheduleTargetSqsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resetMessageGroupId">resetMessageGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageGroupId` <a name="resetMessageGroupId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resetMessageGroupId"></a>

```java
public void resetMessageGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupIdInput">messageGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId">messageGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageGroupIdInput`<sup>Optional</sup> <a name="messageGroupIdInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupIdInput"></a>

```java
public java.lang.String getMessageGroupIdInput();
```

- *Type:* java.lang.String

---

##### `messageGroupId`<sup>Required</sup> <a name="messageGroupId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId"></a>

```java
public java.lang.String getMessageGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|SchedulerScheduleTargetSqsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

---



