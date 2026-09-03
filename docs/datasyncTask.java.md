# `datasyncTask` Submodule <a name="`datasyncTask` Submodule" id="@cdktn/provider-awscc.datasyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncTask <a name="DatasyncTask" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task awscc_datasync_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTask;

DatasyncTask.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinationLocationArn(java.lang.String)
    .sourceLocationArn(java.lang.String)
//  .cloudwatchLogGroupArn(java.lang.String)
//  .excludes(IResolvable|java.util.List<DatasyncTaskExcludes>)
//  .includes(IResolvable|java.util.List<DatasyncTaskIncludes>)
//  .manifestConfig(DatasyncTaskManifestConfig)
//  .name(java.lang.String)
//  .options(DatasyncTaskOptions)
//  .schedule(DatasyncTaskSchedule)
//  .tags(IResolvable|java.util.List<DatasyncTaskTags>)
//  .taskMode(java.lang.String)
//  .taskReportConfig(DatasyncTaskTaskReportConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.destinationLocationArn">destinationLocationArn</a></code> | <code>java.lang.String</code> | The ARN of an AWS storage resource's location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.sourceLocationArn">sourceLocationArn</a></code> | <code>java.lang.String</code> | The ARN of the source location for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.excludes">excludes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.includes">includes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#includes DatasyncTask#includes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.manifestConfig">manifestConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | Configures a manifest, which is a list of files or objects that you want DataSync to transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of a task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | Represents the options that are available to control the behavior of a StartTaskExecution operation. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | Specifies the schedule you want your task to use for repeated executions. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.taskMode">taskMode</a></code> | <code>java.lang.String</code> | Specifies the task mode for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.taskReportConfig">taskReportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.destinationLocationArn"></a>

- *Type:* java.lang.String

The ARN of an AWS storage resource's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.sourceLocationArn"></a>

- *Type:* java.lang.String

The ARN of the source location for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#source_location_arn DatasyncTask#source_location_arn}

---

##### `cloudwatchLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.cloudwatchLogGroupArn"></a>

- *Type:* java.lang.String

The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.excludes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.includes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#includes DatasyncTask#includes}.

---

##### `manifestConfig`<sup>Optional</sup> <a name="manifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.manifestConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

Configures a manifest, which is a list of files or objects that you want DataSync to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#manifest_config DatasyncTask#manifest_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of a task.

This value is a text reference that is used to identify the task in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#name DatasyncTask#name}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

Represents the options that are available to control the behavior of a StartTaskExecution operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#options DatasyncTask#options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

Specifies the schedule you want your task to use for repeated executions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#schedule DatasyncTask#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#tags DatasyncTask#tags}

---

##### `taskMode`<sup>Optional</sup> <a name="taskMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.taskMode"></a>

- *Type:* java.lang.String

Specifies the task mode for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#task_mode DatasyncTask#task_mode}

---

##### `taskReportConfig`<sup>Optional</sup> <a name="taskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.taskReportConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#task_report_config DatasyncTask#task_report_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes">putExcludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes">putIncludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig">putManifestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig">putTaskReportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn">resetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetIncludes">resetIncludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetManifestConfig">resetManifestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskMode">resetTaskMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskReportConfig">resetTaskReportConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExcludes` <a name="putExcludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes"></a>

```java
public void putExcludes(IResolvable|java.util.List<DatasyncTaskExcludes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>>

---

##### `putIncludes` <a name="putIncludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes"></a>

```java
public void putIncludes(IResolvable|java.util.List<DatasyncTaskIncludes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>>

---

##### `putManifestConfig` <a name="putManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig"></a>

```java
public void putManifestConfig(DatasyncTaskManifestConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions"></a>

```java
public void putOptions(DatasyncTaskOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule"></a>

```java
public void putSchedule(DatasyncTaskSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DatasyncTaskTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>>

---

##### `putTaskReportConfig` <a name="putTaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig"></a>

```java
public void putTaskReportConfig(DatasyncTaskTaskReportConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

---

##### `resetCloudwatchLogGroupArn` <a name="resetCloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn"></a>

```java
public void resetCloudwatchLogGroupArn()
```

##### `resetExcludes` <a name="resetExcludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetIncludes"></a>

```java
public void resetIncludes()
```

##### `resetManifestConfig` <a name="resetManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetManifestConfig"></a>

```java
public void resetManifestConfig()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetName"></a>

```java
public void resetName()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaskMode` <a name="resetTaskMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskMode"></a>

```java
public void resetTaskMode()
```

##### `resetTaskReportConfig` <a name="resetTaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskReportConfig"></a>

```java
public void resetTaskReportConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTask;

DatasyncTask.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTask;

DatasyncTask.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTask;

DatasyncTask.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTask;

DatasyncTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatasyncTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatasyncTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatasyncTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatasyncTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationNetworkInterfaceArns">destinationNetworkInterfaceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludes">excludes</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList">DatasyncTaskExcludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includes">includes</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList">DatasyncTaskIncludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfig">manifestConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference">DatasyncTaskManifestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceNetworkInterfaceArns">sourceNetworkInterfaceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList">DatasyncTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskArn">taskArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfig">taskReportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference">DatasyncTaskTaskReportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput">cloudwatchLogGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArnInput">destinationLocationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludesInput">excludesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includesInput">includesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfigInput">manifestConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.optionsInput">optionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.scheduleInput">scheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArnInput">sourceLocationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskModeInput">taskModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfigInput">taskReportConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArn">destinationLocationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArn">sourceLocationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskMode">taskMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationNetworkInterfaceArns`<sup>Required</sup> <a name="destinationNetworkInterfaceArns" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationNetworkInterfaceArns"></a>

```java
public java.util.List<java.lang.String> getDestinationNetworkInterfaceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludes"></a>

```java
public DatasyncTaskExcludesList getExcludes();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList">DatasyncTaskExcludesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includes"></a>

```java
public DatasyncTaskIncludesList getIncludes();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList">DatasyncTaskIncludesList</a>

---

##### `manifestConfig`<sup>Required</sup> <a name="manifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfig"></a>

```java
public DatasyncTaskManifestConfigOutputReference getManifestConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference">DatasyncTaskManifestConfigOutputReference</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.options"></a>

```java
public DatasyncTaskOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.schedule"></a>

```java
public DatasyncTaskScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a>

---

##### `sourceNetworkInterfaceArns`<sup>Required</sup> <a name="sourceNetworkInterfaceArns" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceNetworkInterfaceArns"></a>

```java
public java.util.List<java.lang.String> getSourceNetworkInterfaceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tags"></a>

```java
public DatasyncTaskTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList">DatasyncTaskTagsList</a>

---

##### `taskArn`<sup>Required</sup> <a name="taskArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskArn"></a>

```java
public java.lang.String getTaskArn();
```

- *Type:* java.lang.String

---

##### `taskReportConfig`<sup>Required</sup> <a name="taskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfig"></a>

```java
public DatasyncTaskTaskReportConfigOutputReference getTaskReportConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference">DatasyncTaskTaskReportConfigOutputReference</a>

---

##### `cloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogGroupArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput"></a>

```java
public java.lang.String getCloudwatchLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `destinationLocationArnInput`<sup>Optional</sup> <a name="destinationLocationArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArnInput"></a>

```java
public java.lang.String getDestinationLocationArnInput();
```

- *Type:* java.lang.String

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludesInput"></a>

```java
public IResolvable|java.util.List<DatasyncTaskExcludes> getExcludesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>>

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includesInput"></a>

```java
public IResolvable|java.util.List<DatasyncTaskIncludes> getIncludesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>>

---

##### `manifestConfigInput`<sup>Optional</sup> <a name="manifestConfigInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfigInput"></a>

```java
public IResolvable|DatasyncTaskManifestConfig getManifestConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.optionsInput"></a>

```java
public IResolvable|DatasyncTaskOptions getOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.scheduleInput"></a>

```java
public IResolvable|DatasyncTaskSchedule getScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `sourceLocationArnInput`<sup>Optional</sup> <a name="sourceLocationArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArnInput"></a>

```java
public java.lang.String getSourceLocationArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DatasyncTaskTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>>

---

##### `taskModeInput`<sup>Optional</sup> <a name="taskModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskModeInput"></a>

```java
public java.lang.String getTaskModeInput();
```

- *Type:* java.lang.String

---

##### `taskReportConfigInput`<sup>Optional</sup> <a name="taskReportConfigInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfigInput"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfig getTaskReportConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArn"></a>

```java
public java.lang.String getDestinationLocationArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArn"></a>

```java
public java.lang.String getSourceLocationArn();
```

- *Type:* java.lang.String

---

##### `taskMode`<sup>Required</sup> <a name="taskMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskMode"></a>

```java
public java.lang.String getTaskMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncTaskConfig <a name="DatasyncTaskConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskConfig;

DatasyncTaskConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinationLocationArn(java.lang.String)
    .sourceLocationArn(java.lang.String)
//  .cloudwatchLogGroupArn(java.lang.String)
//  .excludes(IResolvable|java.util.List<DatasyncTaskExcludes>)
//  .includes(IResolvable|java.util.List<DatasyncTaskIncludes>)
//  .manifestConfig(DatasyncTaskManifestConfig)
//  .name(java.lang.String)
//  .options(DatasyncTaskOptions)
//  .schedule(DatasyncTaskSchedule)
//  .tags(IResolvable|java.util.List<DatasyncTaskTags>)
//  .taskMode(java.lang.String)
//  .taskReportConfig(DatasyncTaskTaskReportConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn">destinationLocationArn</a></code> | <code>java.lang.String</code> | The ARN of an AWS storage resource's location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn">sourceLocationArn</a></code> | <code>java.lang.String</code> | The ARN of the source location for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.excludes">excludes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.includes">includes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#includes DatasyncTask#includes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.manifestConfig">manifestConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | Configures a manifest, which is a list of files or objects that you want DataSync to transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of a task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | Represents the options that are available to control the behavior of a StartTaskExecution operation. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | Specifies the schedule you want your task to use for repeated executions. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskMode">taskMode</a></code> | <code>java.lang.String</code> | Specifies the task mode for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskReportConfig">taskReportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn"></a>

```java
public java.lang.String getDestinationLocationArn();
```

- *Type:* java.lang.String

The ARN of an AWS storage resource's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn"></a>

```java
public java.lang.String getSourceLocationArn();
```

- *Type:* java.lang.String

The ARN of the source location for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#source_location_arn DatasyncTask#source_location_arn}

---

##### `cloudwatchLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.excludes"></a>

```java
public IResolvable|java.util.List<DatasyncTaskExcludes> getExcludes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.includes"></a>

```java
public IResolvable|java.util.List<DatasyncTaskIncludes> getIncludes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#includes DatasyncTask#includes}.

---

##### `manifestConfig`<sup>Optional</sup> <a name="manifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.manifestConfig"></a>

```java
public DatasyncTaskManifestConfig getManifestConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

Configures a manifest, which is a list of files or objects that you want DataSync to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#manifest_config DatasyncTask#manifest_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of a task.

This value is a text reference that is used to identify the task in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#name DatasyncTask#name}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.options"></a>

```java
public DatasyncTaskOptions getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

Represents the options that are available to control the behavior of a StartTaskExecution operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#options DatasyncTask#options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.schedule"></a>

```java
public DatasyncTaskSchedule getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

Specifies the schedule you want your task to use for repeated executions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#schedule DatasyncTask#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DatasyncTaskTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#tags DatasyncTask#tags}

---

##### `taskMode`<sup>Optional</sup> <a name="taskMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskMode"></a>

```java
public java.lang.String getTaskMode();
```

- *Type:* java.lang.String

Specifies the task mode for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#task_mode DatasyncTask#task_mode}

---

##### `taskReportConfig`<sup>Optional</sup> <a name="taskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskReportConfig"></a>

```java
public DatasyncTaskTaskReportConfig getTaskReportConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#task_report_config DatasyncTask#task_report_config}

---

### DatasyncTaskExcludes <a name="DatasyncTaskExcludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskExcludes;

DatasyncTaskExcludes.builder()
//  .filterType(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.filterType">filterType</a></code> | <code>java.lang.String</code> | The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.value">value</a></code> | <code>java.lang.String</code> | A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "\|". |

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskIncludes <a name="DatasyncTaskIncludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskIncludes;

DatasyncTaskIncludes.builder()
//  .filterType(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.filterType">filterType</a></code> | <code>java.lang.String</code> | The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.value">value</a></code> | <code>java.lang.String</code> | A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "\|". |

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskManifestConfig <a name="DatasyncTaskManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskManifestConfig;

DatasyncTaskManifestConfig.builder()
//  .action(java.lang.String)
//  .format(java.lang.String)
//  .source(DatasyncTaskManifestConfigSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.action">action</a></code> | <code>java.lang.String</code> | Specifies what DataSync uses the manifest for. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.format">format</a></code> | <code>java.lang.String</code> | Specifies the file format of your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a></code> | Specifies the manifest that you want DataSync to use and where it's hosted. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Specifies what DataSync uses the manifest for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#action DatasyncTask#action}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Specifies the file format of your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#format DatasyncTask#format}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.source"></a>

```java
public DatasyncTaskManifestConfigSource getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

Specifies the manifest that you want DataSync to use and where it's hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#source DatasyncTask#source}

---

### DatasyncTaskManifestConfigSource <a name="DatasyncTaskManifestConfigSource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskManifestConfigSource;

DatasyncTaskManifestConfigSource.builder()
//  .s3(DatasyncTaskManifestConfigSourceS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a></code> | Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.property.s3"></a>

```java
public DatasyncTaskManifestConfigSourceS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#s3 DatasyncTask#s3}

---

### DatasyncTaskManifestConfigSourceS3 <a name="DatasyncTaskManifestConfigSourceS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskManifestConfigSourceS3;

DatasyncTaskManifestConfigSourceS3.builder()
//  .bucketAccessRoleArn(java.lang.String)
//  .manifestObjectPath(java.lang.String)
//  .manifestObjectVersionId(java.lang.String)
//  .s3BucketArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>java.lang.String</code> | Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectPath">manifestObjectPath</a></code> | <code>java.lang.String</code> | Specifies the Amazon S3 object key of your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectVersionId">manifestObjectVersionId</a></code> | <code>java.lang.String</code> | Specifies the object version ID of the manifest that you want DataSync to use. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.s3BucketArn">s3BucketArn</a></code> | <code>java.lang.String</code> | Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest. |

---

##### `bucketAccessRoleArn`<sup>Optional</sup> <a name="bucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.bucketAccessRoleArn"></a>

```java
public java.lang.String getBucketAccessRoleArn();
```

- *Type:* java.lang.String

Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#bucket_access_role_arn DatasyncTask#bucket_access_role_arn}

---

##### `manifestObjectPath`<sup>Optional</sup> <a name="manifestObjectPath" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectPath"></a>

```java
public java.lang.String getManifestObjectPath();
```

- *Type:* java.lang.String

Specifies the Amazon S3 object key of your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#manifest_object_path DatasyncTask#manifest_object_path}

---

##### `manifestObjectVersionId`<sup>Optional</sup> <a name="manifestObjectVersionId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectVersionId"></a>

```java
public java.lang.String getManifestObjectVersionId();
```

- *Type:* java.lang.String

Specifies the object version ID of the manifest that you want DataSync to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#manifest_object_version_id DatasyncTask#manifest_object_version_id}

---

##### `s3BucketArn`<sup>Optional</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.s3BucketArn"></a>

```java
public java.lang.String getS3BucketArn();
```

- *Type:* java.lang.String

Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#s3_bucket_arn DatasyncTask#s3_bucket_arn}

---

### DatasyncTaskOptions <a name="DatasyncTaskOptions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskOptions;

DatasyncTaskOptions.builder()
//  .atime(java.lang.String)
//  .bytesPerSecond(java.lang.Number)
//  .gid(java.lang.String)
//  .logLevel(java.lang.String)
//  .mtime(java.lang.String)
//  .objectTags(java.lang.String)
//  .overwriteMode(java.lang.String)
//  .posixPermissions(java.lang.String)
//  .preserveDeletedFiles(java.lang.String)
//  .preserveDevices(java.lang.String)
//  .securityDescriptorCopyFlags(java.lang.String)
//  .taskQueueing(java.lang.String)
//  .transferMode(java.lang.String)
//  .uid(java.lang.String)
//  .verifyMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.atime">atime</a></code> | <code>java.lang.String</code> | A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to). |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond">bytesPerSecond</a></code> | <code>java.lang.Number</code> | A value that limits the bandwidth used by AWS DataSync. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.gid">gid</a></code> | <code>java.lang.String</code> | The group ID (GID) of the file's owners. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.mtime">mtime</a></code> | <code>java.lang.String</code> | A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.objectTags">objectTags</a></code> | <code>java.lang.String</code> | A value that determines whether object tags should be read from the source object store and written to the destination object store. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.overwriteMode">overwriteMode</a></code> | <code>java.lang.String</code> | A value that determines whether files at the destination should be overwritten or preserved when copying files. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.posixPermissions">posixPermissions</a></code> | <code>java.lang.String</code> | A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles">preserveDeletedFiles</a></code> | <code>java.lang.String</code> | A value that specifies whether files in the destination that don't exist in the source file system should be preserved. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDevices">preserveDevices</a></code> | <code>java.lang.String</code> | A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags">securityDescriptorCopyFlags</a></code> | <code>java.lang.String</code> | A value that determines which components of the SMB security descriptor are copied during transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.taskQueueing">taskQueueing</a></code> | <code>java.lang.String</code> | A value that determines whether tasks should be queued before executing the tasks. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.transferMode">transferMode</a></code> | <code>java.lang.String</code> | A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.uid">uid</a></code> | <code>java.lang.String</code> | The user ID (UID) of the file's owner. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.verifyMode">verifyMode</a></code> | <code>java.lang.String</code> | A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred. |

---

##### `atime`<sup>Optional</sup> <a name="atime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.atime"></a>

```java
public java.lang.String getAtime();
```

- *Type:* java.lang.String

A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#atime DatasyncTask#atime}

---

##### `bytesPerSecond`<sup>Optional</sup> <a name="bytesPerSecond" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond"></a>

```java
public java.lang.Number getBytesPerSecond();
```

- *Type:* java.lang.Number

A value that limits the bandwidth used by AWS DataSync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.gid"></a>

```java
public java.lang.String getGid();
```

- *Type:* java.lang.String

The group ID (GID) of the file's owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#gid DatasyncTask#gid}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#log_level DatasyncTask#log_level}

---

##### `mtime`<sup>Optional</sup> <a name="mtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.mtime"></a>

```java
public java.lang.String getMtime();
```

- *Type:* java.lang.String

A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#mtime DatasyncTask#mtime}

---

##### `objectTags`<sup>Optional</sup> <a name="objectTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.objectTags"></a>

```java
public java.lang.String getObjectTags();
```

- *Type:* java.lang.String

A value that determines whether object tags should be read from the source object store and written to the destination object store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#object_tags DatasyncTask#object_tags}

---

##### `overwriteMode`<sup>Optional</sup> <a name="overwriteMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.overwriteMode"></a>

```java
public java.lang.String getOverwriteMode();
```

- *Type:* java.lang.String

A value that determines whether files at the destination should be overwritten or preserved when copying files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}

---

##### `posixPermissions`<sup>Optional</sup> <a name="posixPermissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.posixPermissions"></a>

```java
public java.lang.String getPosixPermissions();
```

- *Type:* java.lang.String

A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#posix_permissions DatasyncTask#posix_permissions}

---

##### `preserveDeletedFiles`<sup>Optional</sup> <a name="preserveDeletedFiles" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles"></a>

```java
public java.lang.String getPreserveDeletedFiles();
```

- *Type:* java.lang.String

A value that specifies whether files in the destination that don't exist in the source file system should be preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}

---

##### `preserveDevices`<sup>Optional</sup> <a name="preserveDevices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDevices"></a>

```java
public java.lang.String getPreserveDevices();
```

- *Type:* java.lang.String

A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#preserve_devices DatasyncTask#preserve_devices}

---

##### `securityDescriptorCopyFlags`<sup>Optional</sup> <a name="securityDescriptorCopyFlags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags"></a>

```java
public java.lang.String getSecurityDescriptorCopyFlags();
```

- *Type:* java.lang.String

A value that determines which components of the SMB security descriptor are copied during transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}

---

##### `taskQueueing`<sup>Optional</sup> <a name="taskQueueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.taskQueueing"></a>

```java
public java.lang.String getTaskQueueing();
```

- *Type:* java.lang.String

A value that determines whether tasks should be queued before executing the tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#task_queueing DatasyncTask#task_queueing}

---

##### `transferMode`<sup>Optional</sup> <a name="transferMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.transferMode"></a>

```java
public java.lang.String getTransferMode();
```

- *Type:* java.lang.String

A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#transfer_mode DatasyncTask#transfer_mode}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

The user ID (UID) of the file's owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#uid DatasyncTask#uid}

---

##### `verifyMode`<sup>Optional</sup> <a name="verifyMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.verifyMode"></a>

```java
public java.lang.String getVerifyMode();
```

- *Type:* java.lang.String

A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#verify_mode DatasyncTask#verify_mode}

---

### DatasyncTaskSchedule <a name="DatasyncTaskSchedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskSchedule;

DatasyncTaskSchedule.builder()
//  .scheduleExpression(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.status">status</a></code> | <code>java.lang.String</code> | Specifies status of a schedule. |

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#schedule_expression DatasyncTask#schedule_expression}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Specifies status of a schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#status DatasyncTask#status}

---

### DatasyncTaskTags <a name="DatasyncTaskTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTags;

DatasyncTaskTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.key">key</a></code> | <code>java.lang.String</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#key DatasyncTask#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskTaskReportConfig <a name="DatasyncTaskTaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfig;

DatasyncTaskTaskReportConfig.builder()
//  .destination(DatasyncTaskTaskReportConfigDestination)
//  .objectVersionIds(java.lang.String)
//  .outputType(java.lang.String)
//  .overrides(DatasyncTaskTaskReportConfigOverrides)
//  .reportLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a></code> | Specifies where DataSync uploads your task report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.objectVersionIds">objectVersionIds</a></code> | <code>java.lang.String</code> | Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.outputType">outputType</a></code> | <code>java.lang.String</code> | Specifies the type of task report that you want. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a></code> | Customizes the reporting level for aspects of your task report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.reportLevel">reportLevel</a></code> | <code>java.lang.String</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.destination"></a>

```java
public DatasyncTaskTaskReportConfigDestination getDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

Specifies where DataSync uploads your task report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#destination DatasyncTask#destination}

---

##### `objectVersionIds`<sup>Optional</sup> <a name="objectVersionIds" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.objectVersionIds"></a>

```java
public java.lang.String getObjectVersionIds();
```

- *Type:* java.lang.String

Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#object_version_ids DatasyncTask#object_version_ids}

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

Specifies the type of task report that you want.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#output_type DatasyncTask#output_type}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.overrides"></a>

```java
public DatasyncTaskTaskReportConfigOverrides getOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

Customizes the reporting level for aspects of your task report.

For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that Datasync attempted to delete in your destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#overrides DatasyncTask#overrides}

---

##### `reportLevel`<sup>Optional</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.reportLevel"></a>

```java
public java.lang.String getReportLevel();
```

- *Type:* java.lang.String

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigDestination <a name="DatasyncTaskTaskReportConfigDestination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigDestination;

DatasyncTaskTaskReportConfigDestination.builder()
//  .s3(DatasyncTaskTaskReportConfigDestinationS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a></code> | Specifies the Amazon S3 bucket where DataSync uploads your task report. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.property.s3"></a>

```java
public DatasyncTaskTaskReportConfigDestinationS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

Specifies the Amazon S3 bucket where DataSync uploads your task report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#s3 DatasyncTask#s3}

---

### DatasyncTaskTaskReportConfigDestinationS3 <a name="DatasyncTaskTaskReportConfigDestinationS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigDestinationS3;

DatasyncTaskTaskReportConfigDestinationS3.builder()
//  .bucketAccessRoleArn(java.lang.String)
//  .s3BucketArn(java.lang.String)
//  .subdirectory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>java.lang.String</code> | Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.s3BucketArn">s3BucketArn</a></code> | <code>java.lang.String</code> | Specifies the ARN of the S3 bucket where Datasync uploads your report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | Specifies a bucket prefix for your report. |

---

##### `bucketAccessRoleArn`<sup>Optional</sup> <a name="bucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.bucketAccessRoleArn"></a>

```java
public java.lang.String getBucketAccessRoleArn();
```

- *Type:* java.lang.String

Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#bucket_access_role_arn DatasyncTask#bucket_access_role_arn}

---

##### `s3BucketArn`<sup>Optional</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.s3BucketArn"></a>

```java
public java.lang.String getS3BucketArn();
```

- *Type:* java.lang.String

Specifies the ARN of the S3 bucket where Datasync uploads your report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#s3_bucket_arn DatasyncTask#s3_bucket_arn}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

Specifies a bucket prefix for your report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#subdirectory DatasyncTask#subdirectory}

---

### DatasyncTaskTaskReportConfigOverrides <a name="DatasyncTaskTaskReportConfigOverrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigOverrides;

DatasyncTaskTaskReportConfigOverrides.builder()
//  .deleted(DatasyncTaskTaskReportConfigOverridesDeleted)
//  .skipped(DatasyncTaskTaskReportConfigOverridesSkipped)
//  .transferred(DatasyncTaskTaskReportConfigOverridesTransferred)
//  .verified(DatasyncTaskTaskReportConfigOverridesVerified)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.deleted">deleted</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to delete in your destination location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.skipped">skipped</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to skip during your transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.transferred">transferred</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.verified">verified</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to verify at the end of your transfer. |

---

##### `deleted`<sup>Optional</sup> <a name="deleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.deleted"></a>

```java
public DatasyncTaskTaskReportConfigOverridesDeleted getDeleted();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to delete in your destination location.

This only applies if you configure your task to delete data in the destination that isn't in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#deleted DatasyncTask#deleted}

---

##### `skipped`<sup>Optional</sup> <a name="skipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.skipped"></a>

```java
public DatasyncTaskTaskReportConfigOverridesSkipped getSkipped();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to skip during your transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#skipped DatasyncTask#skipped}

---

##### `transferred`<sup>Optional</sup> <a name="transferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.transferred"></a>

```java
public DatasyncTaskTaskReportConfigOverridesTransferred getTransferred();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#transferred DatasyncTask#transferred}

---

##### `verified`<sup>Optional</sup> <a name="verified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.verified"></a>

```java
public DatasyncTaskTaskReportConfigOverridesVerified getVerified();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to verify at the end of your transfer.

This only applies if you configure your task to verify data during and after the transfer (which Datasync does by default)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#verified DatasyncTask#verified}

---

### DatasyncTaskTaskReportConfigOverridesDeleted <a name="DatasyncTaskTaskReportConfigOverridesDeleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigOverridesDeleted;

DatasyncTaskTaskReportConfigOverridesDeleted.builder()
//  .reportLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.property.reportLevel">reportLevel</a></code> | <code>java.lang.String</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `reportLevel`<sup>Optional</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.property.reportLevel"></a>

```java
public java.lang.String getReportLevel();
```

- *Type:* java.lang.String

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesSkipped <a name="DatasyncTaskTaskReportConfigOverridesSkipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigOverridesSkipped;

DatasyncTaskTaskReportConfigOverridesSkipped.builder()
//  .reportLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.property.reportLevel">reportLevel</a></code> | <code>java.lang.String</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `reportLevel`<sup>Optional</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.property.reportLevel"></a>

```java
public java.lang.String getReportLevel();
```

- *Type:* java.lang.String

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesTransferred <a name="DatasyncTaskTaskReportConfigOverridesTransferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigOverridesTransferred;

DatasyncTaskTaskReportConfigOverridesTransferred.builder()
//  .reportLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.property.reportLevel">reportLevel</a></code> | <code>java.lang.String</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `reportLevel`<sup>Optional</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.property.reportLevel"></a>

```java
public java.lang.String getReportLevel();
```

- *Type:* java.lang.String

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesVerified <a name="DatasyncTaskTaskReportConfigOverridesVerified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigOverridesVerified;

DatasyncTaskTaskReportConfigOverridesVerified.builder()
//  .reportLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.property.reportLevel">reportLevel</a></code> | <code>java.lang.String</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `reportLevel`<sup>Optional</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.property.reportLevel"></a>

```java
public java.lang.String getReportLevel();
```

- *Type:* java.lang.String

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncTaskExcludesList <a name="DatasyncTaskExcludesList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskExcludesList;

new DatasyncTaskExcludesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get"></a>

```java
public DatasyncTaskExcludesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatasyncTaskExcludes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>>

---


### DatasyncTaskExcludesOutputReference <a name="DatasyncTaskExcludesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskExcludesOutputReference;

new DatasyncTaskExcludesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType"></a>

```java
public void resetFilterType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskExcludes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---


### DatasyncTaskIncludesList <a name="DatasyncTaskIncludesList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskIncludesList;

new DatasyncTaskIncludesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get"></a>

```java
public DatasyncTaskIncludesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatasyncTaskIncludes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>>

---


### DatasyncTaskIncludesOutputReference <a name="DatasyncTaskIncludesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskIncludesOutputReference;

new DatasyncTaskIncludesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType"></a>

```java
public void resetFilterType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskIncludes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---


### DatasyncTaskManifestConfigOutputReference <a name="DatasyncTaskManifestConfigOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskManifestConfigOutputReference;

new DatasyncTaskManifestConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource"></a>

```java
public void putSource(DatasyncTaskManifestConfigSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference">DatasyncTaskManifestConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.sourceInput">sourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.source"></a>

```java
public DatasyncTaskManifestConfigSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference">DatasyncTaskManifestConfigSourceOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.sourceInput"></a>

```java
public IResolvable|DatasyncTaskManifestConfigSource getSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskManifestConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

---


### DatasyncTaskManifestConfigSourceOutputReference <a name="DatasyncTaskManifestConfigSourceOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskManifestConfigSourceOutputReference;

new DatasyncTaskManifestConfigSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3"></a>

```java
public void putS3(DatasyncTaskManifestConfigSourceS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

---

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference">DatasyncTaskManifestConfigSourceS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3"></a>

```java
public DatasyncTaskManifestConfigSourceS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference">DatasyncTaskManifestConfigSourceS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3Input"></a>

```java
public IResolvable|DatasyncTaskManifestConfigSourceS3 getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskManifestConfigSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

---


### DatasyncTaskManifestConfigSourceS3OutputReference <a name="DatasyncTaskManifestConfigSourceS3OutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskManifestConfigSourceS3OutputReference;

new DatasyncTaskManifestConfigSourceS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetBucketAccessRoleArn">resetBucketAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectPath">resetManifestObjectPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectVersionId">resetManifestObjectVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetS3BucketArn">resetS3BucketArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketAccessRoleArn` <a name="resetBucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetBucketAccessRoleArn"></a>

```java
public void resetBucketAccessRoleArn()
```

##### `resetManifestObjectPath` <a name="resetManifestObjectPath" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectPath"></a>

```java
public void resetManifestObjectPath()
```

##### `resetManifestObjectVersionId` <a name="resetManifestObjectVersionId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectVersionId"></a>

```java
public void resetManifestObjectVersionId()
```

##### `resetS3BucketArn` <a name="resetS3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetS3BucketArn"></a>

```java
public void resetS3BucketArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArnInput">bucketAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPathInput">manifestObjectPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionIdInput">manifestObjectVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArnInput">s3BucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath">manifestObjectPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId">manifestObjectVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn">s3BucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketAccessRoleArnInput`<sup>Optional</sup> <a name="bucketAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArnInput"></a>

```java
public java.lang.String getBucketAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `manifestObjectPathInput`<sup>Optional</sup> <a name="manifestObjectPathInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPathInput"></a>

```java
public java.lang.String getManifestObjectPathInput();
```

- *Type:* java.lang.String

---

##### `manifestObjectVersionIdInput`<sup>Optional</sup> <a name="manifestObjectVersionIdInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionIdInput"></a>

```java
public java.lang.String getManifestObjectVersionIdInput();
```

- *Type:* java.lang.String

---

##### `s3BucketArnInput`<sup>Optional</sup> <a name="s3BucketArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArnInput"></a>

```java
public java.lang.String getS3BucketArnInput();
```

- *Type:* java.lang.String

---

##### `bucketAccessRoleArn`<sup>Required</sup> <a name="bucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn"></a>

```java
public java.lang.String getBucketAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `manifestObjectPath`<sup>Required</sup> <a name="manifestObjectPath" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath"></a>

```java
public java.lang.String getManifestObjectPath();
```

- *Type:* java.lang.String

---

##### `manifestObjectVersionId`<sup>Required</sup> <a name="manifestObjectVersionId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId"></a>

```java
public java.lang.String getManifestObjectVersionId();
```

- *Type:* java.lang.String

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn"></a>

```java
public java.lang.String getS3BucketArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskManifestConfigSourceS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

---


### DatasyncTaskOptionsOutputReference <a name="DatasyncTaskOptionsOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskOptionsOutputReference;

new DatasyncTaskOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime">resetAtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond">resetBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime">resetMtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetObjectTags">resetObjectTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode">resetOverwriteMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions">resetPosixPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles">resetPreserveDeletedFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices">resetPreserveDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags">resetSecurityDescriptorCopyFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing">resetTaskQueueing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode">resetTransferMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid">resetUid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode">resetVerifyMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtime` <a name="resetAtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime"></a>

```java
public void resetAtime()
```

##### `resetBytesPerSecond` <a name="resetBytesPerSecond" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond"></a>

```java
public void resetBytesPerSecond()
```

##### `resetGid` <a name="resetGid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid"></a>

```java
public void resetGid()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetMtime` <a name="resetMtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime"></a>

```java
public void resetMtime()
```

##### `resetObjectTags` <a name="resetObjectTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetObjectTags"></a>

```java
public void resetObjectTags()
```

##### `resetOverwriteMode` <a name="resetOverwriteMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode"></a>

```java
public void resetOverwriteMode()
```

##### `resetPosixPermissions` <a name="resetPosixPermissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions"></a>

```java
public void resetPosixPermissions()
```

##### `resetPreserveDeletedFiles` <a name="resetPreserveDeletedFiles" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles"></a>

```java
public void resetPreserveDeletedFiles()
```

##### `resetPreserveDevices` <a name="resetPreserveDevices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices"></a>

```java
public void resetPreserveDevices()
```

##### `resetSecurityDescriptorCopyFlags` <a name="resetSecurityDescriptorCopyFlags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags"></a>

```java
public void resetSecurityDescriptorCopyFlags()
```

##### `resetTaskQueueing` <a name="resetTaskQueueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing"></a>

```java
public void resetTaskQueueing()
```

##### `resetTransferMode` <a name="resetTransferMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode"></a>

```java
public void resetTransferMode()
```

##### `resetUid` <a name="resetUid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid"></a>

```java
public void resetUid()
```

##### `resetVerifyMode` <a name="resetVerifyMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode"></a>

```java
public void resetVerifyMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput">atimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput">bytesPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput">gidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput">mtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTagsInput">objectTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput">overwriteModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput">posixPermissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput">preserveDeletedFilesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput">preserveDevicesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput">securityDescriptorCopyFlagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput">taskQueueingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput">transferModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput">uidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput">verifyModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime">atime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond">bytesPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid">gid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime">mtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTags">objectTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode">overwriteMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions">posixPermissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles">preserveDeletedFiles</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices">preserveDevices</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags">securityDescriptorCopyFlags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing">taskQueueing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode">transferMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode">verifyMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `atimeInput`<sup>Optional</sup> <a name="atimeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput"></a>

```java
public java.lang.String getAtimeInput();
```

- *Type:* java.lang.String

---

##### `bytesPerSecondInput`<sup>Optional</sup> <a name="bytesPerSecondInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput"></a>

```java
public java.lang.Number getBytesPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput"></a>

```java
public java.lang.String getGidInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `mtimeInput`<sup>Optional</sup> <a name="mtimeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput"></a>

```java
public java.lang.String getMtimeInput();
```

- *Type:* java.lang.String

---

##### `objectTagsInput`<sup>Optional</sup> <a name="objectTagsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTagsInput"></a>

```java
public java.lang.String getObjectTagsInput();
```

- *Type:* java.lang.String

---

##### `overwriteModeInput`<sup>Optional</sup> <a name="overwriteModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput"></a>

```java
public java.lang.String getOverwriteModeInput();
```

- *Type:* java.lang.String

---

##### `posixPermissionsInput`<sup>Optional</sup> <a name="posixPermissionsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput"></a>

```java
public java.lang.String getPosixPermissionsInput();
```

- *Type:* java.lang.String

---

##### `preserveDeletedFilesInput`<sup>Optional</sup> <a name="preserveDeletedFilesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput"></a>

```java
public java.lang.String getPreserveDeletedFilesInput();
```

- *Type:* java.lang.String

---

##### `preserveDevicesInput`<sup>Optional</sup> <a name="preserveDevicesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput"></a>

```java
public java.lang.String getPreserveDevicesInput();
```

- *Type:* java.lang.String

---

##### `securityDescriptorCopyFlagsInput`<sup>Optional</sup> <a name="securityDescriptorCopyFlagsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput"></a>

```java
public java.lang.String getSecurityDescriptorCopyFlagsInput();
```

- *Type:* java.lang.String

---

##### `taskQueueingInput`<sup>Optional</sup> <a name="taskQueueingInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput"></a>

```java
public java.lang.String getTaskQueueingInput();
```

- *Type:* java.lang.String

---

##### `transferModeInput`<sup>Optional</sup> <a name="transferModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput"></a>

```java
public java.lang.String getTransferModeInput();
```

- *Type:* java.lang.String

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput"></a>

```java
public java.lang.String getUidInput();
```

- *Type:* java.lang.String

---

##### `verifyModeInput`<sup>Optional</sup> <a name="verifyModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput"></a>

```java
public java.lang.String getVerifyModeInput();
```

- *Type:* java.lang.String

---

##### `atime`<sup>Required</sup> <a name="atime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime"></a>

```java
public java.lang.String getAtime();
```

- *Type:* java.lang.String

---

##### `bytesPerSecond`<sup>Required</sup> <a name="bytesPerSecond" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond"></a>

```java
public java.lang.Number getBytesPerSecond();
```

- *Type:* java.lang.Number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid"></a>

```java
public java.lang.String getGid();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `mtime`<sup>Required</sup> <a name="mtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime"></a>

```java
public java.lang.String getMtime();
```

- *Type:* java.lang.String

---

##### `objectTags`<sup>Required</sup> <a name="objectTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTags"></a>

```java
public java.lang.String getObjectTags();
```

- *Type:* java.lang.String

---

##### `overwriteMode`<sup>Required</sup> <a name="overwriteMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode"></a>

```java
public java.lang.String getOverwriteMode();
```

- *Type:* java.lang.String

---

##### `posixPermissions`<sup>Required</sup> <a name="posixPermissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions"></a>

```java
public java.lang.String getPosixPermissions();
```

- *Type:* java.lang.String

---

##### `preserveDeletedFiles`<sup>Required</sup> <a name="preserveDeletedFiles" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles"></a>

```java
public java.lang.String getPreserveDeletedFiles();
```

- *Type:* java.lang.String

---

##### `preserveDevices`<sup>Required</sup> <a name="preserveDevices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices"></a>

```java
public java.lang.String getPreserveDevices();
```

- *Type:* java.lang.String

---

##### `securityDescriptorCopyFlags`<sup>Required</sup> <a name="securityDescriptorCopyFlags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags"></a>

```java
public java.lang.String getSecurityDescriptorCopyFlags();
```

- *Type:* java.lang.String

---

##### `taskQueueing`<sup>Required</sup> <a name="taskQueueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing"></a>

```java
public java.lang.String getTaskQueueing();
```

- *Type:* java.lang.String

---

##### `transferMode`<sup>Required</sup> <a name="transferMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode"></a>

```java
public java.lang.String getTransferMode();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `verifyMode`<sup>Required</sup> <a name="verifyMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode"></a>

```java
public java.lang.String getVerifyMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---


### DatasyncTaskScheduleOutputReference <a name="DatasyncTaskScheduleOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskScheduleOutputReference;

new DatasyncTaskScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetScheduleExpression"></a>

```java
public void resetScheduleExpression()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---


### DatasyncTaskTagsList <a name="DatasyncTaskTagsList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTagsList;

new DatasyncTaskTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get"></a>

```java
public DatasyncTaskTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatasyncTaskTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>>

---


### DatasyncTaskTagsOutputReference <a name="DatasyncTaskTagsOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTagsOutputReference;

new DatasyncTaskTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>

---


### DatasyncTaskTaskReportConfigDestinationOutputReference <a name="DatasyncTaskTaskReportConfigDestinationOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigDestinationOutputReference;

new DatasyncTaskTaskReportConfigDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3"></a>

```java
public void putS3(DatasyncTaskTaskReportConfigDestinationS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

---

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference">DatasyncTaskTaskReportConfigDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3"></a>

```java
public DatasyncTaskTaskReportConfigDestinationS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference">DatasyncTaskTaskReportConfigDestinationS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3Input"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigDestinationS3 getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

---


### DatasyncTaskTaskReportConfigDestinationS3OutputReference <a name="DatasyncTaskTaskReportConfigDestinationS3OutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigDestinationS3OutputReference;

new DatasyncTaskTaskReportConfigDestinationS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetBucketAccessRoleArn">resetBucketAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetS3BucketArn">resetS3BucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketAccessRoleArn` <a name="resetBucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetBucketAccessRoleArn"></a>

```java
public void resetBucketAccessRoleArn()
```

##### `resetS3BucketArn` <a name="resetS3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetS3BucketArn"></a>

```java
public void resetS3BucketArn()
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetSubdirectory"></a>

```java
public void resetSubdirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArnInput">bucketAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArnInput">s3BucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectoryInput">subdirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn">s3BucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketAccessRoleArnInput`<sup>Optional</sup> <a name="bucketAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArnInput"></a>

```java
public java.lang.String getBucketAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3BucketArnInput`<sup>Optional</sup> <a name="s3BucketArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArnInput"></a>

```java
public java.lang.String getS3BucketArnInput();
```

- *Type:* java.lang.String

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectoryInput"></a>

```java
public java.lang.String getSubdirectoryInput();
```

- *Type:* java.lang.String

---

##### `bucketAccessRoleArn`<sup>Required</sup> <a name="bucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn"></a>

```java
public java.lang.String getBucketAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn"></a>

```java
public java.lang.String getS3BucketArn();
```

- *Type:* java.lang.String

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigDestinationS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

---


### DatasyncTaskTaskReportConfigOutputReference <a name="DatasyncTaskTaskReportConfigOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigOutputReference;

new DatasyncTaskTaskReportConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetObjectVersionIds">resetObjectVersionIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOutputType">resetOutputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetReportLevel">resetReportLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination"></a>

```java
public void putDestination(DatasyncTaskTaskReportConfigDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

---

##### `putOverrides` <a name="putOverrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides"></a>

```java
public void putOverrides(DatasyncTaskTaskReportConfigOverrides value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetObjectVersionIds` <a name="resetObjectVersionIds" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetObjectVersionIds"></a>

```java
public void resetObjectVersionIds()
```

##### `resetOutputType` <a name="resetOutputType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOutputType"></a>

```java
public void resetOutputType()
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOverrides"></a>

```java
public void resetOverrides()
```

##### `resetReportLevel` <a name="resetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetReportLevel"></a>

```java
public void resetReportLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference">DatasyncTaskTaskReportConfigDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference">DatasyncTaskTaskReportConfigOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destinationInput">destinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIdsInput">objectVersionIdsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overridesInput">overridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevelInput">reportLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds">objectVersionIds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevel">reportLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destination"></a>

```java
public DatasyncTaskTaskReportConfigDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference">DatasyncTaskTaskReportConfigDestinationOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overrides"></a>

```java
public DatasyncTaskTaskReportConfigOverridesOutputReference getOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference">DatasyncTaskTaskReportConfigOverridesOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destinationInput"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigDestination getDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

---

##### `objectVersionIdsInput`<sup>Optional</sup> <a name="objectVersionIdsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIdsInput"></a>

```java
public java.lang.String getObjectVersionIdsInput();
```

- *Type:* java.lang.String

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputTypeInput"></a>

```java
public java.lang.String getOutputTypeInput();
```

- *Type:* java.lang.String

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overridesInput"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigOverrides getOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

---

##### `reportLevelInput`<sup>Optional</sup> <a name="reportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevelInput"></a>

```java
public java.lang.String getReportLevelInput();
```

- *Type:* java.lang.String

---

##### `objectVersionIds`<sup>Required</sup> <a name="objectVersionIds" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds"></a>

```java
public java.lang.String getObjectVersionIds();
```

- *Type:* java.lang.String

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevel"></a>

```java
public java.lang.String getReportLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

---


### DatasyncTaskTaskReportConfigOverridesDeletedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesDeletedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference;

new DatasyncTaskTaskReportConfigOverridesDeletedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resetReportLevel">resetReportLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReportLevel` <a name="resetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resetReportLevel"></a>

```java
public void resetReportLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevelInput">reportLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel">reportLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reportLevelInput`<sup>Optional</sup> <a name="reportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevelInput"></a>

```java
public java.lang.String getReportLevelInput();
```

- *Type:* java.lang.String

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel"></a>

```java
public java.lang.String getReportLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigOverridesDeleted getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

---


### DatasyncTaskTaskReportConfigOverridesOutputReference <a name="DatasyncTaskTaskReportConfigOverridesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigOverridesOutputReference;

new DatasyncTaskTaskReportConfigOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted">putDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped">putSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred">putTransferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified">putVerified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetDeleted">resetDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetSkipped">resetSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetTransferred">resetTransferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetVerified">resetVerified</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeleted` <a name="putDeleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted"></a>

```java
public void putDeleted(DatasyncTaskTaskReportConfigOverridesDeleted value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

---

##### `putSkipped` <a name="putSkipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped"></a>

```java
public void putSkipped(DatasyncTaskTaskReportConfigOverridesSkipped value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

---

##### `putTransferred` <a name="putTransferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred"></a>

```java
public void putTransferred(DatasyncTaskTaskReportConfigOverridesTransferred value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

---

##### `putVerified` <a name="putVerified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified"></a>

```java
public void putVerified(DatasyncTaskTaskReportConfigOverridesVerified value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

---

##### `resetDeleted` <a name="resetDeleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetDeleted"></a>

```java
public void resetDeleted()
```

##### `resetSkipped` <a name="resetSkipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetSkipped"></a>

```java
public void resetSkipped()
```

##### `resetTransferred` <a name="resetTransferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetTransferred"></a>

```java
public void resetTransferred()
```

##### `resetVerified` <a name="resetVerified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetVerified"></a>

```java
public void resetVerified()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted">deleted</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped">skipped</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred">transferred</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verified">verified</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deletedInput">deletedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skippedInput">skippedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferredInput">transferredInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verifiedInput">verifiedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted"></a>

```java
public DatasyncTaskTaskReportConfigOverridesDeletedOutputReference getDeleted();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a>

---

##### `skipped`<sup>Required</sup> <a name="skipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped"></a>

```java
public DatasyncTaskTaskReportConfigOverridesSkippedOutputReference getSkipped();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a>

---

##### `transferred`<sup>Required</sup> <a name="transferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred"></a>

```java
public DatasyncTaskTaskReportConfigOverridesTransferredOutputReference getTransferred();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a>

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verified"></a>

```java
public DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference getVerified();
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a>

---

##### `deletedInput`<sup>Optional</sup> <a name="deletedInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deletedInput"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigOverridesDeleted getDeletedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

---

##### `skippedInput`<sup>Optional</sup> <a name="skippedInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skippedInput"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigOverridesSkipped getSkippedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

---

##### `transferredInput`<sup>Optional</sup> <a name="transferredInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferredInput"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigOverridesTransferred getTransferredInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

---

##### `verifiedInput`<sup>Optional</sup> <a name="verifiedInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verifiedInput"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigOverridesVerified getVerifiedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

---


### DatasyncTaskTaskReportConfigOverridesSkippedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesSkippedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference;

new DatasyncTaskTaskReportConfigOverridesSkippedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resetReportLevel">resetReportLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReportLevel` <a name="resetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resetReportLevel"></a>

```java
public void resetReportLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevelInput">reportLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel">reportLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reportLevelInput`<sup>Optional</sup> <a name="reportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevelInput"></a>

```java
public java.lang.String getReportLevelInput();
```

- *Type:* java.lang.String

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel"></a>

```java
public java.lang.String getReportLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigOverridesSkipped getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

---


### DatasyncTaskTaskReportConfigOverridesTransferredOutputReference <a name="DatasyncTaskTaskReportConfigOverridesTransferredOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference;

new DatasyncTaskTaskReportConfigOverridesTransferredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resetReportLevel">resetReportLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReportLevel` <a name="resetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resetReportLevel"></a>

```java
public void resetReportLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevelInput">reportLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel">reportLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reportLevelInput`<sup>Optional</sup> <a name="reportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevelInput"></a>

```java
public java.lang.String getReportLevelInput();
```

- *Type:* java.lang.String

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel"></a>

```java
public java.lang.String getReportLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigOverridesTransferred getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

---


### DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datasync_task.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference;

new DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resetReportLevel">resetReportLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReportLevel` <a name="resetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resetReportLevel"></a>

```java
public void resetReportLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevelInput">reportLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel">reportLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reportLevelInput`<sup>Optional</sup> <a name="reportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevelInput"></a>

```java
public java.lang.String getReportLevelInput();
```

- *Type:* java.lang.String

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel"></a>

```java
public java.lang.String getReportLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue"></a>

```java
public IResolvable|DatasyncTaskTaskReportConfigOverridesVerified getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

---



