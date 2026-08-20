# `datasyncTask` Submodule <a name="`datasyncTask` Submodule" id="@cdktn/provider-awscc.datasyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncTask <a name="DatasyncTask" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task awscc_datasync_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTask(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination_location_arn: str,
  source_location_arn: str,
  cloudwatch_log_group_arn: str = None,
  excludes: IResolvable | typing.List[DatasyncTaskExcludes] = None,
  includes: IResolvable | typing.List[DatasyncTaskIncludes] = None,
  manifest_config: DatasyncTaskManifestConfig = None,
  name: str = None,
  options: DatasyncTaskOptions = None,
  schedule: DatasyncTaskSchedule = None,
  tags: IResolvable | typing.List[DatasyncTaskTags] = None,
  task_mode: str = None,
  task_report_config: DatasyncTaskTaskReportConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.destinationLocationArn">destination_location_arn</a></code> | <code>str</code> | The ARN of an AWS storage resource's location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.sourceLocationArn">source_location_arn</a></code> | <code>str</code> | The ARN of the source location for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.excludes">excludes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.includes">includes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#includes DatasyncTask#includes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.manifestConfig">manifest_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | Configures a manifest, which is a list of files or objects that you want DataSync to transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of a task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | Represents the options that are available to control the behavior of a StartTaskExecution operation. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | Specifies the schedule you want your task to use for repeated executions. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.taskMode">task_mode</a></code> | <code>str</code> | Specifies the task mode for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.taskReportConfig">task_report_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_location_arn`<sup>Required</sup> <a name="destination_location_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.destinationLocationArn"></a>

- *Type:* str

The ARN of an AWS storage resource's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}

---

##### `source_location_arn`<sup>Required</sup> <a name="source_location_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.sourceLocationArn"></a>

- *Type:* str

The ARN of the source location for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#source_location_arn DatasyncTask#source_location_arn}

---

##### `cloudwatch_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.cloudwatchLogGroupArn"></a>

- *Type:* str

The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.excludes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.includes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#includes DatasyncTask#includes}.

---

##### `manifest_config`<sup>Optional</sup> <a name="manifest_config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.manifestConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

Configures a manifest, which is a list of files or objects that you want DataSync to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#manifest_config DatasyncTask#manifest_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.name"></a>

- *Type:* str

The name of a task.

This value is a text reference that is used to identify the task in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#name DatasyncTask#name}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

Represents the options that are available to control the behavior of a StartTaskExecution operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#options DatasyncTask#options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

Specifies the schedule you want your task to use for repeated executions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#schedule DatasyncTask#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#tags DatasyncTask#tags}

---

##### `task_mode`<sup>Optional</sup> <a name="task_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.taskMode"></a>

- *Type:* str

Specifies the task mode for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#task_mode DatasyncTask#task_mode}

---

##### `task_report_config`<sup>Optional</sup> <a name="task_report_config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.taskReportConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#task_report_config DatasyncTask#task_report_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes">put_excludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes">put_includes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig">put_manifest_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig">put_task_report_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn">reset_cloudwatch_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetIncludes">reset_includes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetManifestConfig">reset_manifest_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskMode">reset_task_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskReportConfig">reset_task_report_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_excludes` <a name="put_excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes"></a>

```python
def put_excludes(
  value: IResolvable | typing.List[DatasyncTaskExcludes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>]

---

##### `put_includes` <a name="put_includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes"></a>

```python
def put_includes(
  value: IResolvable | typing.List[DatasyncTaskIncludes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>]

---

##### `put_manifest_config` <a name="put_manifest_config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig"></a>

```python
def put_manifest_config(
  action: str = None,
  format: str = None,
  source: DatasyncTaskManifestConfigSource = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig.parameter.action"></a>

- *Type:* str

Specifies what DataSync uses the manifest for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#action DatasyncTask#action}

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig.parameter.format"></a>

- *Type:* str

Specifies the file format of your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#format DatasyncTask#format}

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

Specifies the manifest that you want DataSync to use and where it's hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#source DatasyncTask#source}

---

##### `put_options` <a name="put_options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions"></a>

```python
def put_options(
  atime: str = None,
  bytes_per_second: typing.Union[int, float] = None,
  gid: str = None,
  log_level: str = None,
  mtime: str = None,
  object_tags: str = None,
  overwrite_mode: str = None,
  posix_permissions: str = None,
  preserve_deleted_files: str = None,
  preserve_devices: str = None,
  security_descriptor_copy_flags: str = None,
  task_queueing: str = None,
  transfer_mode: str = None,
  uid: str = None,
  verify_mode: str = None
) -> None
```

###### `atime`<sup>Optional</sup> <a name="atime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.atime"></a>

- *Type:* str

A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#atime DatasyncTask#atime}

---

###### `bytes_per_second`<sup>Optional</sup> <a name="bytes_per_second" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.bytesPerSecond"></a>

- *Type:* typing.Union[int, float]

A value that limits the bandwidth used by AWS DataSync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}

---

###### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.gid"></a>

- *Type:* str

The group ID (GID) of the file's owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#gid DatasyncTask#gid}

---

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.logLevel"></a>

- *Type:* str

A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#log_level DatasyncTask#log_level}

---

###### `mtime`<sup>Optional</sup> <a name="mtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.mtime"></a>

- *Type:* str

A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#mtime DatasyncTask#mtime}

---

###### `object_tags`<sup>Optional</sup> <a name="object_tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.objectTags"></a>

- *Type:* str

A value that determines whether object tags should be read from the source object store and written to the destination object store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#object_tags DatasyncTask#object_tags}

---

###### `overwrite_mode`<sup>Optional</sup> <a name="overwrite_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.overwriteMode"></a>

- *Type:* str

A value that determines whether files at the destination should be overwritten or preserved when copying files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}

---

###### `posix_permissions`<sup>Optional</sup> <a name="posix_permissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.posixPermissions"></a>

- *Type:* str

A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#posix_permissions DatasyncTask#posix_permissions}

---

###### `preserve_deleted_files`<sup>Optional</sup> <a name="preserve_deleted_files" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.preserveDeletedFiles"></a>

- *Type:* str

A value that specifies whether files in the destination that don't exist in the source file system should be preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}

---

###### `preserve_devices`<sup>Optional</sup> <a name="preserve_devices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.preserveDevices"></a>

- *Type:* str

A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#preserve_devices DatasyncTask#preserve_devices}

---

###### `security_descriptor_copy_flags`<sup>Optional</sup> <a name="security_descriptor_copy_flags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.securityDescriptorCopyFlags"></a>

- *Type:* str

A value that determines which components of the SMB security descriptor are copied during transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}

---

###### `task_queueing`<sup>Optional</sup> <a name="task_queueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.taskQueueing"></a>

- *Type:* str

A value that determines whether tasks should be queued before executing the tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#task_queueing DatasyncTask#task_queueing}

---

###### `transfer_mode`<sup>Optional</sup> <a name="transfer_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.transferMode"></a>

- *Type:* str

A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#transfer_mode DatasyncTask#transfer_mode}

---

###### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.uid"></a>

- *Type:* str

The user ID (UID) of the file's owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#uid DatasyncTask#uid}

---

###### `verify_mode`<sup>Optional</sup> <a name="verify_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.verifyMode"></a>

- *Type:* str

A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#verify_mode DatasyncTask#verify_mode}

---

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule"></a>

```python
def put_schedule(
  schedule_expression: str = None,
  status: str = None
) -> None
```

###### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule.parameter.scheduleExpression"></a>

- *Type:* str

A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#schedule_expression DatasyncTask#schedule_expression}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule.parameter.status"></a>

- *Type:* str

Specifies status of a schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#status DatasyncTask#status}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DatasyncTaskTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>]

---

##### `put_task_report_config` <a name="put_task_report_config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig"></a>

```python
def put_task_report_config(
  destination: DatasyncTaskTaskReportConfigDestination = None,
  object_version_ids: str = None,
  output_type: str = None,
  overrides: DatasyncTaskTaskReportConfigOverrides = None,
  report_level: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig.parameter.destination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

Specifies where DataSync uploads your task report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#destination DatasyncTask#destination}

---

###### `object_version_ids`<sup>Optional</sup> <a name="object_version_ids" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig.parameter.objectVersionIds"></a>

- *Type:* str

Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#object_version_ids DatasyncTask#object_version_ids}

---

###### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig.parameter.outputType"></a>

- *Type:* str

Specifies the type of task report that you want.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#output_type DatasyncTask#output_type}

---

###### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig.parameter.overrides"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

Customizes the reporting level for aspects of your task report.

For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that Datasync attempted to delete in your destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#overrides DatasyncTask#overrides}

---

###### `report_level`<sup>Optional</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig.parameter.reportLevel"></a>

- *Type:* str

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

##### `reset_cloudwatch_log_group_arn` <a name="reset_cloudwatch_log_group_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn"></a>

```python
def reset_cloudwatch_log_group_arn() -> None
```

##### `reset_excludes` <a name="reset_excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_includes` <a name="reset_includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetIncludes"></a>

```python
def reset_includes() -> None
```

##### `reset_manifest_config` <a name="reset_manifest_config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetManifestConfig"></a>

```python
def reset_manifest_config() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_task_mode` <a name="reset_task_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskMode"></a>

```python
def reset_task_mode() -> None
```

##### `reset_task_report_config` <a name="reset_task_report_config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskReportConfig"></a>

```python
def reset_task_report_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatasyncTask resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatasyncTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatasyncTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatasyncTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationNetworkInterfaceArns">destination_network_interface_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludes">excludes</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList">DatasyncTaskExcludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includes">includes</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList">DatasyncTaskIncludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfig">manifest_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference">DatasyncTaskManifestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceNetworkInterfaceArns">source_network_interface_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList">DatasyncTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskArn">task_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfig">task_report_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference">DatasyncTaskTaskReportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput">cloudwatch_log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArnInput">destination_location_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludesInput">excludes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includesInput">includes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfigInput">manifest_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.optionsInput">options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArnInput">source_location_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskModeInput">task_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfigInput">task_report_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArn">destination_location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArn">source_location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskMode">task_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_network_interface_arns`<sup>Required</sup> <a name="destination_network_interface_arns" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationNetworkInterfaceArns"></a>

```python
destination_network_interface_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludes"></a>

```python
excludes: DatasyncTaskExcludesList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList">DatasyncTaskExcludesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includes"></a>

```python
includes: DatasyncTaskIncludesList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList">DatasyncTaskIncludesList</a>

---

##### `manifest_config`<sup>Required</sup> <a name="manifest_config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfig"></a>

```python
manifest_config: DatasyncTaskManifestConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference">DatasyncTaskManifestConfigOutputReference</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.options"></a>

```python
options: DatasyncTaskOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.schedule"></a>

```python
schedule: DatasyncTaskScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a>

---

##### `source_network_interface_arns`<sup>Required</sup> <a name="source_network_interface_arns" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceNetworkInterfaceArns"></a>

```python
source_network_interface_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tags"></a>

```python
tags: DatasyncTaskTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList">DatasyncTaskTagsList</a>

---

##### `task_arn`<sup>Required</sup> <a name="task_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskArn"></a>

```python
task_arn: str
```

- *Type:* str

---

##### `task_report_config`<sup>Required</sup> <a name="task_report_config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfig"></a>

```python
task_report_config: DatasyncTaskTaskReportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference">DatasyncTaskTaskReportConfigOutputReference</a>

---

##### `cloudwatch_log_group_arn_input`<sup>Optional</sup> <a name="cloudwatch_log_group_arn_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput"></a>

```python
cloudwatch_log_group_arn_input: str
```

- *Type:* str

---

##### `destination_location_arn_input`<sup>Optional</sup> <a name="destination_location_arn_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArnInput"></a>

```python
destination_location_arn_input: str
```

- *Type:* str

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludesInput"></a>

```python
excludes_input: IResolvable | typing.List[DatasyncTaskExcludes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>]

---

##### `includes_input`<sup>Optional</sup> <a name="includes_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includesInput"></a>

```python
includes_input: IResolvable | typing.List[DatasyncTaskIncludes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>]

---

##### `manifest_config_input`<sup>Optional</sup> <a name="manifest_config_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfigInput"></a>

```python
manifest_config_input: IResolvable | DatasyncTaskManifestConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.optionsInput"></a>

```python
options_input: IResolvable | DatasyncTaskOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.scheduleInput"></a>

```python
schedule_input: IResolvable | DatasyncTaskSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `source_location_arn_input`<sup>Optional</sup> <a name="source_location_arn_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArnInput"></a>

```python
source_location_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DatasyncTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>]

---

##### `task_mode_input`<sup>Optional</sup> <a name="task_mode_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskModeInput"></a>

```python
task_mode_input: str
```

- *Type:* str

---

##### `task_report_config_input`<sup>Optional</sup> <a name="task_report_config_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfigInput"></a>

```python
task_report_config_input: IResolvable | DatasyncTaskTaskReportConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `destination_location_arn`<sup>Required</sup> <a name="destination_location_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArn"></a>

```python
destination_location_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_location_arn`<sup>Required</sup> <a name="source_location_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArn"></a>

```python
source_location_arn: str
```

- *Type:* str

---

##### `task_mode`<sup>Required</sup> <a name="task_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskMode"></a>

```python
task_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncTaskConfig <a name="DatasyncTaskConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination_location_arn: str,
  source_location_arn: str,
  cloudwatch_log_group_arn: str = None,
  excludes: IResolvable | typing.List[DatasyncTaskExcludes] = None,
  includes: IResolvable | typing.List[DatasyncTaskIncludes] = None,
  manifest_config: DatasyncTaskManifestConfig = None,
  name: str = None,
  options: DatasyncTaskOptions = None,
  schedule: DatasyncTaskSchedule = None,
  tags: IResolvable | typing.List[DatasyncTaskTags] = None,
  task_mode: str = None,
  task_report_config: DatasyncTaskTaskReportConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn">destination_location_arn</a></code> | <code>str</code> | The ARN of an AWS storage resource's location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn">source_location_arn</a></code> | <code>str</code> | The ARN of the source location for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.excludes">excludes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.includes">includes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#includes DatasyncTask#includes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.manifestConfig">manifest_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | Configures a manifest, which is a list of files or objects that you want DataSync to transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.name">name</a></code> | <code>str</code> | The name of a task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | Represents the options that are available to control the behavior of a StartTaskExecution operation. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | Specifies the schedule you want your task to use for repeated executions. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskMode">task_mode</a></code> | <code>str</code> | Specifies the task mode for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskReportConfig">task_report_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_location_arn`<sup>Required</sup> <a name="destination_location_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn"></a>

```python
destination_location_arn: str
```

- *Type:* str

The ARN of an AWS storage resource's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}

---

##### `source_location_arn`<sup>Required</sup> <a name="source_location_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn"></a>

```python
source_location_arn: str
```

- *Type:* str

The ARN of the source location for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#source_location_arn DatasyncTask#source_location_arn}

---

##### `cloudwatch_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.excludes"></a>

```python
excludes: IResolvable | typing.List[DatasyncTaskExcludes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.includes"></a>

```python
includes: IResolvable | typing.List[DatasyncTaskIncludes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#includes DatasyncTask#includes}.

---

##### `manifest_config`<sup>Optional</sup> <a name="manifest_config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.manifestConfig"></a>

```python
manifest_config: DatasyncTaskManifestConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

Configures a manifest, which is a list of files or objects that you want DataSync to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#manifest_config DatasyncTask#manifest_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of a task.

This value is a text reference that is used to identify the task in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#name DatasyncTask#name}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.options"></a>

```python
options: DatasyncTaskOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

Represents the options that are available to control the behavior of a StartTaskExecution operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#options DatasyncTask#options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.schedule"></a>

```python
schedule: DatasyncTaskSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

Specifies the schedule you want your task to use for repeated executions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#schedule DatasyncTask#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DatasyncTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#tags DatasyncTask#tags}

---

##### `task_mode`<sup>Optional</sup> <a name="task_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskMode"></a>

```python
task_mode: str
```

- *Type:* str

Specifies the task mode for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#task_mode DatasyncTask#task_mode}

---

##### `task_report_config`<sup>Optional</sup> <a name="task_report_config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskReportConfig"></a>

```python
task_report_config: DatasyncTaskTaskReportConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#task_report_config DatasyncTask#task_report_config}

---

### DatasyncTaskExcludes <a name="DatasyncTaskExcludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskExcludes(
  filter_type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.filterType">filter_type</a></code> | <code>str</code> | The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.value">value</a></code> | <code>str</code> | A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "\|". |

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.value"></a>

```python
value: str
```

- *Type:* str

A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskIncludes <a name="DatasyncTaskIncludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskIncludes(
  filter_type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.filterType">filter_type</a></code> | <code>str</code> | The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.value">value</a></code> | <code>str</code> | A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "\|". |

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.value"></a>

```python
value: str
```

- *Type:* str

A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskManifestConfig <a name="DatasyncTaskManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskManifestConfig(
  action: str = None,
  format: str = None,
  source: DatasyncTaskManifestConfigSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.action">action</a></code> | <code>str</code> | Specifies what DataSync uses the manifest for. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.format">format</a></code> | <code>str</code> | Specifies the file format of your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a></code> | Specifies the manifest that you want DataSync to use and where it's hosted. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Specifies what DataSync uses the manifest for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#action DatasyncTask#action}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.format"></a>

```python
format: str
```

- *Type:* str

Specifies the file format of your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#format DatasyncTask#format}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.source"></a>

```python
source: DatasyncTaskManifestConfigSource
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

Specifies the manifest that you want DataSync to use and where it's hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#source DatasyncTask#source}

---

### DatasyncTaskManifestConfigSource <a name="DatasyncTaskManifestConfigSource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskManifestConfigSource(
  s3: DatasyncTaskManifestConfigSourceS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a></code> | Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.property.s3"></a>

```python
s3: DatasyncTaskManifestConfigSourceS3
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3 DatasyncTask#s3}

---

### DatasyncTaskManifestConfigSourceS3 <a name="DatasyncTaskManifestConfigSourceS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskManifestConfigSourceS3(
  bucket_access_role_arn: str = None,
  manifest_object_path: str = None,
  manifest_object_version_id: str = None,
  s3_bucket_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.bucketAccessRoleArn">bucket_access_role_arn</a></code> | <code>str</code> | Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectPath">manifest_object_path</a></code> | <code>str</code> | Specifies the Amazon S3 object key of your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectVersionId">manifest_object_version_id</a></code> | <code>str</code> | Specifies the object version ID of the manifest that you want DataSync to use. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest. |

---

##### `bucket_access_role_arn`<sup>Optional</sup> <a name="bucket_access_role_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.bucketAccessRoleArn"></a>

```python
bucket_access_role_arn: str
```

- *Type:* str

Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#bucket_access_role_arn DatasyncTask#bucket_access_role_arn}

---

##### `manifest_object_path`<sup>Optional</sup> <a name="manifest_object_path" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectPath"></a>

```python
manifest_object_path: str
```

- *Type:* str

Specifies the Amazon S3 object key of your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#manifest_object_path DatasyncTask#manifest_object_path}

---

##### `manifest_object_version_id`<sup>Optional</sup> <a name="manifest_object_version_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectVersionId"></a>

```python
manifest_object_version_id: str
```

- *Type:* str

Specifies the object version ID of the manifest that you want DataSync to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#manifest_object_version_id DatasyncTask#manifest_object_version_id}

---

##### `s3_bucket_arn`<sup>Optional</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3_bucket_arn DatasyncTask#s3_bucket_arn}

---

### DatasyncTaskOptions <a name="DatasyncTaskOptions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskOptions(
  atime: str = None,
  bytes_per_second: typing.Union[int, float] = None,
  gid: str = None,
  log_level: str = None,
  mtime: str = None,
  object_tags: str = None,
  overwrite_mode: str = None,
  posix_permissions: str = None,
  preserve_deleted_files: str = None,
  preserve_devices: str = None,
  security_descriptor_copy_flags: str = None,
  task_queueing: str = None,
  transfer_mode: str = None,
  uid: str = None,
  verify_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.atime">atime</a></code> | <code>str</code> | A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to). |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond">bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | A value that limits the bandwidth used by AWS DataSync. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.gid">gid</a></code> | <code>str</code> | The group ID (GID) of the file's owners. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.logLevel">log_level</a></code> | <code>str</code> | A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.mtime">mtime</a></code> | <code>str</code> | A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.objectTags">object_tags</a></code> | <code>str</code> | A value that determines whether object tags should be read from the source object store and written to the destination object store. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.overwriteMode">overwrite_mode</a></code> | <code>str</code> | A value that determines whether files at the destination should be overwritten or preserved when copying files. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.posixPermissions">posix_permissions</a></code> | <code>str</code> | A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles">preserve_deleted_files</a></code> | <code>str</code> | A value that specifies whether files in the destination that don't exist in the source file system should be preserved. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDevices">preserve_devices</a></code> | <code>str</code> | A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags">security_descriptor_copy_flags</a></code> | <code>str</code> | A value that determines which components of the SMB security descriptor are copied during transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.taskQueueing">task_queueing</a></code> | <code>str</code> | A value that determines whether tasks should be queued before executing the tasks. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.transferMode">transfer_mode</a></code> | <code>str</code> | A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.uid">uid</a></code> | <code>str</code> | The user ID (UID) of the file's owner. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.verifyMode">verify_mode</a></code> | <code>str</code> | A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred. |

---

##### `atime`<sup>Optional</sup> <a name="atime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.atime"></a>

```python
atime: str
```

- *Type:* str

A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#atime DatasyncTask#atime}

---

##### `bytes_per_second`<sup>Optional</sup> <a name="bytes_per_second" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond"></a>

```python
bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A value that limits the bandwidth used by AWS DataSync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.gid"></a>

```python
gid: str
```

- *Type:* str

The group ID (GID) of the file's owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#gid DatasyncTask#gid}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#log_level DatasyncTask#log_level}

---

##### `mtime`<sup>Optional</sup> <a name="mtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.mtime"></a>

```python
mtime: str
```

- *Type:* str

A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#mtime DatasyncTask#mtime}

---

##### `object_tags`<sup>Optional</sup> <a name="object_tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.objectTags"></a>

```python
object_tags: str
```

- *Type:* str

A value that determines whether object tags should be read from the source object store and written to the destination object store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#object_tags DatasyncTask#object_tags}

---

##### `overwrite_mode`<sup>Optional</sup> <a name="overwrite_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.overwriteMode"></a>

```python
overwrite_mode: str
```

- *Type:* str

A value that determines whether files at the destination should be overwritten or preserved when copying files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}

---

##### `posix_permissions`<sup>Optional</sup> <a name="posix_permissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.posixPermissions"></a>

```python
posix_permissions: str
```

- *Type:* str

A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#posix_permissions DatasyncTask#posix_permissions}

---

##### `preserve_deleted_files`<sup>Optional</sup> <a name="preserve_deleted_files" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles"></a>

```python
preserve_deleted_files: str
```

- *Type:* str

A value that specifies whether files in the destination that don't exist in the source file system should be preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}

---

##### `preserve_devices`<sup>Optional</sup> <a name="preserve_devices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDevices"></a>

```python
preserve_devices: str
```

- *Type:* str

A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#preserve_devices DatasyncTask#preserve_devices}

---

##### `security_descriptor_copy_flags`<sup>Optional</sup> <a name="security_descriptor_copy_flags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags"></a>

```python
security_descriptor_copy_flags: str
```

- *Type:* str

A value that determines which components of the SMB security descriptor are copied during transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}

---

##### `task_queueing`<sup>Optional</sup> <a name="task_queueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.taskQueueing"></a>

```python
task_queueing: str
```

- *Type:* str

A value that determines whether tasks should be queued before executing the tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#task_queueing DatasyncTask#task_queueing}

---

##### `transfer_mode`<sup>Optional</sup> <a name="transfer_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.transferMode"></a>

```python
transfer_mode: str
```

- *Type:* str

A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#transfer_mode DatasyncTask#transfer_mode}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.uid"></a>

```python
uid: str
```

- *Type:* str

The user ID (UID) of the file's owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#uid DatasyncTask#uid}

---

##### `verify_mode`<sup>Optional</sup> <a name="verify_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.verifyMode"></a>

```python
verify_mode: str
```

- *Type:* str

A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#verify_mode DatasyncTask#verify_mode}

---

### DatasyncTaskSchedule <a name="DatasyncTaskSchedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskSchedule(
  schedule_expression: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.status">status</a></code> | <code>str</code> | Specifies status of a schedule. |

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#schedule_expression DatasyncTask#schedule_expression}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.status"></a>

```python
status: str
```

- *Type:* str

Specifies status of a schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#status DatasyncTask#status}

---

### DatasyncTaskTags <a name="DatasyncTaskTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.key">key</a></code> | <code>str</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.value">value</a></code> | <code>str</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#key DatasyncTask#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskTaskReportConfig <a name="DatasyncTaskTaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfig(
  destination: DatasyncTaskTaskReportConfigDestination = None,
  object_version_ids: str = None,
  output_type: str = None,
  overrides: DatasyncTaskTaskReportConfigOverrides = None,
  report_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a></code> | Specifies where DataSync uploads your task report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.objectVersionIds">object_version_ids</a></code> | <code>str</code> | Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.outputType">output_type</a></code> | <code>str</code> | Specifies the type of task report that you want. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a></code> | Customizes the reporting level for aspects of your task report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.reportLevel">report_level</a></code> | <code>str</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.destination"></a>

```python
destination: DatasyncTaskTaskReportConfigDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

Specifies where DataSync uploads your task report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#destination DatasyncTask#destination}

---

##### `object_version_ids`<sup>Optional</sup> <a name="object_version_ids" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.objectVersionIds"></a>

```python
object_version_ids: str
```

- *Type:* str

Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#object_version_ids DatasyncTask#object_version_ids}

---

##### `output_type`<sup>Optional</sup> <a name="output_type" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

Specifies the type of task report that you want.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#output_type DatasyncTask#output_type}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.overrides"></a>

```python
overrides: DatasyncTaskTaskReportConfigOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

Customizes the reporting level for aspects of your task report.

For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that Datasync attempted to delete in your destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#overrides DatasyncTask#overrides}

---

##### `report_level`<sup>Optional</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigDestination <a name="DatasyncTaskTaskReportConfigDestination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigDestination(
  s3: DatasyncTaskTaskReportConfigDestinationS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a></code> | Specifies the Amazon S3 bucket where DataSync uploads your task report. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.property.s3"></a>

```python
s3: DatasyncTaskTaskReportConfigDestinationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

Specifies the Amazon S3 bucket where DataSync uploads your task report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3 DatasyncTask#s3}

---

### DatasyncTaskTaskReportConfigDestinationS3 <a name="DatasyncTaskTaskReportConfigDestinationS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigDestinationS3(
  bucket_access_role_arn: str = None,
  s3_bucket_arn: str = None,
  subdirectory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.bucketAccessRoleArn">bucket_access_role_arn</a></code> | <code>str</code> | Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | Specifies the ARN of the S3 bucket where Datasync uploads your report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.subdirectory">subdirectory</a></code> | <code>str</code> | Specifies a bucket prefix for your report. |

---

##### `bucket_access_role_arn`<sup>Optional</sup> <a name="bucket_access_role_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.bucketAccessRoleArn"></a>

```python
bucket_access_role_arn: str
```

- *Type:* str

Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#bucket_access_role_arn DatasyncTask#bucket_access_role_arn}

---

##### `s3_bucket_arn`<sup>Optional</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

Specifies the ARN of the S3 bucket where Datasync uploads your report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3_bucket_arn DatasyncTask#s3_bucket_arn}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

Specifies a bucket prefix for your report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#subdirectory DatasyncTask#subdirectory}

---

### DatasyncTaskTaskReportConfigOverrides <a name="DatasyncTaskTaskReportConfigOverrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigOverrides(
  deleted: DatasyncTaskTaskReportConfigOverridesDeleted = None,
  skipped: DatasyncTaskTaskReportConfigOverridesSkipped = None,
  transferred: DatasyncTaskTaskReportConfigOverridesTransferred = None,
  verified: DatasyncTaskTaskReportConfigOverridesVerified = None
)
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

```python
deleted: DatasyncTaskTaskReportConfigOverridesDeleted
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to delete in your destination location.

This only applies if you configure your task to delete data in the destination that isn't in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#deleted DatasyncTask#deleted}

---

##### `skipped`<sup>Optional</sup> <a name="skipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.skipped"></a>

```python
skipped: DatasyncTaskTaskReportConfigOverridesSkipped
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to skip during your transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#skipped DatasyncTask#skipped}

---

##### `transferred`<sup>Optional</sup> <a name="transferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.transferred"></a>

```python
transferred: DatasyncTaskTaskReportConfigOverridesTransferred
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#transferred DatasyncTask#transferred}

---

##### `verified`<sup>Optional</sup> <a name="verified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.verified"></a>

```python
verified: DatasyncTaskTaskReportConfigOverridesVerified
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to verify at the end of your transfer.

This only applies if you configure your task to verify data during and after the transfer (which Datasync does by default)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#verified DatasyncTask#verified}

---

### DatasyncTaskTaskReportConfigOverridesDeleted <a name="DatasyncTaskTaskReportConfigOverridesDeleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted(
  report_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.property.reportLevel">report_level</a></code> | <code>str</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `report_level`<sup>Optional</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesSkipped <a name="DatasyncTaskTaskReportConfigOverridesSkipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped(
  report_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.property.reportLevel">report_level</a></code> | <code>str</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `report_level`<sup>Optional</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesTransferred <a name="DatasyncTaskTaskReportConfigOverridesTransferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred(
  report_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.property.reportLevel">report_level</a></code> | <code>str</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `report_level`<sup>Optional</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesVerified <a name="DatasyncTaskTaskReportConfigOverridesVerified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified(
  report_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.property.reportLevel">report_level</a></code> | <code>str</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `report_level`<sup>Optional</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncTaskExcludesList <a name="DatasyncTaskExcludesList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskExcludesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasyncTaskExcludesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatasyncTaskExcludes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>]

---


### DatasyncTaskExcludesOutputReference <a name="DatasyncTaskExcludesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskExcludesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_type` <a name="reset_filter_type" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskExcludes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---


### DatasyncTaskIncludesList <a name="DatasyncTaskIncludesList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskIncludesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasyncTaskIncludesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatasyncTaskIncludes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>]

---


### DatasyncTaskIncludesOutputReference <a name="DatasyncTaskIncludesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskIncludesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_type` <a name="reset_filter_type" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskIncludes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---


### DatasyncTaskManifestConfigOutputReference <a name="DatasyncTaskManifestConfigOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskManifestConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source` <a name="put_source" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource"></a>

```python
def put_source(
  s3: DatasyncTaskManifestConfigSourceS3 = None
) -> None
```

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3 DatasyncTask#s3}

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference">DatasyncTaskManifestConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.sourceInput">source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.source"></a>

```python
source: DatasyncTaskManifestConfigSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference">DatasyncTaskManifestConfigSourceOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.sourceInput"></a>

```python
source_input: IResolvable | DatasyncTaskManifestConfigSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskManifestConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

---


### DatasyncTaskManifestConfigSourceOutputReference <a name="DatasyncTaskManifestConfigSourceOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskManifestConfigSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3"></a>

```python
def put_s3(
  bucket_access_role_arn: str = None,
  manifest_object_path: str = None,
  manifest_object_version_id: str = None,
  s3_bucket_arn: str = None
) -> None
```

###### `bucket_access_role_arn`<sup>Optional</sup> <a name="bucket_access_role_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3.parameter.bucketAccessRoleArn"></a>

- *Type:* str

Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#bucket_access_role_arn DatasyncTask#bucket_access_role_arn}

---

###### `manifest_object_path`<sup>Optional</sup> <a name="manifest_object_path" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3.parameter.manifestObjectPath"></a>

- *Type:* str

Specifies the Amazon S3 object key of your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#manifest_object_path DatasyncTask#manifest_object_path}

---

###### `manifest_object_version_id`<sup>Optional</sup> <a name="manifest_object_version_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3.parameter.manifestObjectVersionId"></a>

- *Type:* str

Specifies the object version ID of the manifest that you want DataSync to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#manifest_object_version_id DatasyncTask#manifest_object_version_id}

---

###### `s3_bucket_arn`<sup>Optional</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3.parameter.s3BucketArn"></a>

- *Type:* str

Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3_bucket_arn DatasyncTask#s3_bucket_arn}

---

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference">DatasyncTaskManifestConfigSourceS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3"></a>

```python
s3: DatasyncTaskManifestConfigSourceS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference">DatasyncTaskManifestConfigSourceS3OutputReference</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | DatasyncTaskManifestConfigSourceS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskManifestConfigSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

---


### DatasyncTaskManifestConfigSourceS3OutputReference <a name="DatasyncTaskManifestConfigSourceS3OutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetBucketAccessRoleArn">reset_bucket_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectPath">reset_manifest_object_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectVersionId">reset_manifest_object_version_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetS3BucketArn">reset_s3_bucket_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_access_role_arn` <a name="reset_bucket_access_role_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetBucketAccessRoleArn"></a>

```python
def reset_bucket_access_role_arn() -> None
```

##### `reset_manifest_object_path` <a name="reset_manifest_object_path" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectPath"></a>

```python
def reset_manifest_object_path() -> None
```

##### `reset_manifest_object_version_id` <a name="reset_manifest_object_version_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectVersionId"></a>

```python
def reset_manifest_object_version_id() -> None
```

##### `reset_s3_bucket_arn` <a name="reset_s3_bucket_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetS3BucketArn"></a>

```python
def reset_s3_bucket_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArnInput">bucket_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPathInput">manifest_object_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionIdInput">manifest_object_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArnInput">s3_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn">bucket_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath">manifest_object_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId">manifest_object_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_access_role_arn_input`<sup>Optional</sup> <a name="bucket_access_role_arn_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArnInput"></a>

```python
bucket_access_role_arn_input: str
```

- *Type:* str

---

##### `manifest_object_path_input`<sup>Optional</sup> <a name="manifest_object_path_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPathInput"></a>

```python
manifest_object_path_input: str
```

- *Type:* str

---

##### `manifest_object_version_id_input`<sup>Optional</sup> <a name="manifest_object_version_id_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionIdInput"></a>

```python
manifest_object_version_id_input: str
```

- *Type:* str

---

##### `s3_bucket_arn_input`<sup>Optional</sup> <a name="s3_bucket_arn_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArnInput"></a>

```python
s3_bucket_arn_input: str
```

- *Type:* str

---

##### `bucket_access_role_arn`<sup>Required</sup> <a name="bucket_access_role_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn"></a>

```python
bucket_access_role_arn: str
```

- *Type:* str

---

##### `manifest_object_path`<sup>Required</sup> <a name="manifest_object_path" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath"></a>

```python
manifest_object_path: str
```

- *Type:* str

---

##### `manifest_object_version_id`<sup>Required</sup> <a name="manifest_object_version_id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId"></a>

```python
manifest_object_version_id: str
```

- *Type:* str

---

##### `s3_bucket_arn`<sup>Required</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskManifestConfigSourceS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

---


### DatasyncTaskOptionsOutputReference <a name="DatasyncTaskOptionsOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime">reset_atime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond">reset_bytes_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid">reset_gid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime">reset_mtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetObjectTags">reset_object_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode">reset_overwrite_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions">reset_posix_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles">reset_preserve_deleted_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices">reset_preserve_devices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags">reset_security_descriptor_copy_flags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing">reset_task_queueing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode">reset_transfer_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid">reset_uid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode">reset_verify_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_atime` <a name="reset_atime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime"></a>

```python
def reset_atime() -> None
```

##### `reset_bytes_per_second` <a name="reset_bytes_per_second" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond"></a>

```python
def reset_bytes_per_second() -> None
```

##### `reset_gid` <a name="reset_gid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid"></a>

```python
def reset_gid() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_mtime` <a name="reset_mtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime"></a>

```python
def reset_mtime() -> None
```

##### `reset_object_tags` <a name="reset_object_tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetObjectTags"></a>

```python
def reset_object_tags() -> None
```

##### `reset_overwrite_mode` <a name="reset_overwrite_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode"></a>

```python
def reset_overwrite_mode() -> None
```

##### `reset_posix_permissions` <a name="reset_posix_permissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions"></a>

```python
def reset_posix_permissions() -> None
```

##### `reset_preserve_deleted_files` <a name="reset_preserve_deleted_files" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles"></a>

```python
def reset_preserve_deleted_files() -> None
```

##### `reset_preserve_devices` <a name="reset_preserve_devices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices"></a>

```python
def reset_preserve_devices() -> None
```

##### `reset_security_descriptor_copy_flags` <a name="reset_security_descriptor_copy_flags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags"></a>

```python
def reset_security_descriptor_copy_flags() -> None
```

##### `reset_task_queueing` <a name="reset_task_queueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing"></a>

```python
def reset_task_queueing() -> None
```

##### `reset_transfer_mode` <a name="reset_transfer_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode"></a>

```python
def reset_transfer_mode() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```

##### `reset_verify_mode` <a name="reset_verify_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode"></a>

```python
def reset_verify_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput">atime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput">bytes_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput">gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput">mtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTagsInput">object_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput">overwrite_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput">posix_permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput">preserve_deleted_files_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput">preserve_devices_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput">security_descriptor_copy_flags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput">task_queueing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput">transfer_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput">uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput">verify_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime">atime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond">bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid">gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime">mtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTags">object_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode">overwrite_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions">posix_permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles">preserve_deleted_files</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices">preserve_devices</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags">security_descriptor_copy_flags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing">task_queueing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode">transfer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode">verify_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `atime_input`<sup>Optional</sup> <a name="atime_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput"></a>

```python
atime_input: str
```

- *Type:* str

---

##### `bytes_per_second_input`<sup>Optional</sup> <a name="bytes_per_second_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput"></a>

```python
bytes_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput"></a>

```python
gid_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `mtime_input`<sup>Optional</sup> <a name="mtime_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput"></a>

```python
mtime_input: str
```

- *Type:* str

---

##### `object_tags_input`<sup>Optional</sup> <a name="object_tags_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTagsInput"></a>

```python
object_tags_input: str
```

- *Type:* str

---

##### `overwrite_mode_input`<sup>Optional</sup> <a name="overwrite_mode_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput"></a>

```python
overwrite_mode_input: str
```

- *Type:* str

---

##### `posix_permissions_input`<sup>Optional</sup> <a name="posix_permissions_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput"></a>

```python
posix_permissions_input: str
```

- *Type:* str

---

##### `preserve_deleted_files_input`<sup>Optional</sup> <a name="preserve_deleted_files_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput"></a>

```python
preserve_deleted_files_input: str
```

- *Type:* str

---

##### `preserve_devices_input`<sup>Optional</sup> <a name="preserve_devices_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput"></a>

```python
preserve_devices_input: str
```

- *Type:* str

---

##### `security_descriptor_copy_flags_input`<sup>Optional</sup> <a name="security_descriptor_copy_flags_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput"></a>

```python
security_descriptor_copy_flags_input: str
```

- *Type:* str

---

##### `task_queueing_input`<sup>Optional</sup> <a name="task_queueing_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput"></a>

```python
task_queueing_input: str
```

- *Type:* str

---

##### `transfer_mode_input`<sup>Optional</sup> <a name="transfer_mode_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput"></a>

```python
transfer_mode_input: str
```

- *Type:* str

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput"></a>

```python
uid_input: str
```

- *Type:* str

---

##### `verify_mode_input`<sup>Optional</sup> <a name="verify_mode_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput"></a>

```python
verify_mode_input: str
```

- *Type:* str

---

##### `atime`<sup>Required</sup> <a name="atime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime"></a>

```python
atime: str
```

- *Type:* str

---

##### `bytes_per_second`<sup>Required</sup> <a name="bytes_per_second" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond"></a>

```python
bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid"></a>

```python
gid: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `mtime`<sup>Required</sup> <a name="mtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime"></a>

```python
mtime: str
```

- *Type:* str

---

##### `object_tags`<sup>Required</sup> <a name="object_tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTags"></a>

```python
object_tags: str
```

- *Type:* str

---

##### `overwrite_mode`<sup>Required</sup> <a name="overwrite_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode"></a>

```python
overwrite_mode: str
```

- *Type:* str

---

##### `posix_permissions`<sup>Required</sup> <a name="posix_permissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions"></a>

```python
posix_permissions: str
```

- *Type:* str

---

##### `preserve_deleted_files`<sup>Required</sup> <a name="preserve_deleted_files" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles"></a>

```python
preserve_deleted_files: str
```

- *Type:* str

---

##### `preserve_devices`<sup>Required</sup> <a name="preserve_devices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices"></a>

```python
preserve_devices: str
```

- *Type:* str

---

##### `security_descriptor_copy_flags`<sup>Required</sup> <a name="security_descriptor_copy_flags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags"></a>

```python
security_descriptor_copy_flags: str
```

- *Type:* str

---

##### `task_queueing`<sup>Required</sup> <a name="task_queueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing"></a>

```python
task_queueing: str
```

- *Type:* str

---

##### `transfer_mode`<sup>Required</sup> <a name="transfer_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode"></a>

```python
transfer_mode: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `verify_mode`<sup>Required</sup> <a name="verify_mode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode"></a>

```python
verify_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---


### DatasyncTaskScheduleOutputReference <a name="DatasyncTaskScheduleOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---


### DatasyncTaskTagsList <a name="DatasyncTaskTagsList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasyncTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatasyncTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>]

---


### DatasyncTaskTagsOutputReference <a name="DatasyncTaskTagsOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>

---


### DatasyncTaskTaskReportConfigDestinationOutputReference <a name="DatasyncTaskTaskReportConfigDestinationOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3"></a>

```python
def put_s3(
  bucket_access_role_arn: str = None,
  s3_bucket_arn: str = None,
  subdirectory: str = None
) -> None
```

###### `bucket_access_role_arn`<sup>Optional</sup> <a name="bucket_access_role_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3.parameter.bucketAccessRoleArn"></a>

- *Type:* str

Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#bucket_access_role_arn DatasyncTask#bucket_access_role_arn}

---

###### `s3_bucket_arn`<sup>Optional</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3.parameter.s3BucketArn"></a>

- *Type:* str

Specifies the ARN of the S3 bucket where Datasync uploads your report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3_bucket_arn DatasyncTask#s3_bucket_arn}

---

###### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3.parameter.subdirectory"></a>

- *Type:* str

Specifies a bucket prefix for your report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#subdirectory DatasyncTask#subdirectory}

---

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference">DatasyncTaskTaskReportConfigDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3"></a>

```python
s3: DatasyncTaskTaskReportConfigDestinationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference">DatasyncTaskTaskReportConfigDestinationS3OutputReference</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | DatasyncTaskTaskReportConfigDestinationS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskTaskReportConfigDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

---


### DatasyncTaskTaskReportConfigDestinationS3OutputReference <a name="DatasyncTaskTaskReportConfigDestinationS3OutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetBucketAccessRoleArn">reset_bucket_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetS3BucketArn">reset_s3_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetSubdirectory">reset_subdirectory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_access_role_arn` <a name="reset_bucket_access_role_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetBucketAccessRoleArn"></a>

```python
def reset_bucket_access_role_arn() -> None
```

##### `reset_s3_bucket_arn` <a name="reset_s3_bucket_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetS3BucketArn"></a>

```python
def reset_s3_bucket_arn() -> None
```

##### `reset_subdirectory` <a name="reset_subdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetSubdirectory"></a>

```python
def reset_subdirectory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArnInput">bucket_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArnInput">s3_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectoryInput">subdirectory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn">bucket_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory">subdirectory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_access_role_arn_input`<sup>Optional</sup> <a name="bucket_access_role_arn_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArnInput"></a>

```python
bucket_access_role_arn_input: str
```

- *Type:* str

---

##### `s3_bucket_arn_input`<sup>Optional</sup> <a name="s3_bucket_arn_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArnInput"></a>

```python
s3_bucket_arn_input: str
```

- *Type:* str

---

##### `subdirectory_input`<sup>Optional</sup> <a name="subdirectory_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectoryInput"></a>

```python
subdirectory_input: str
```

- *Type:* str

---

##### `bucket_access_role_arn`<sup>Required</sup> <a name="bucket_access_role_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn"></a>

```python
bucket_access_role_arn: str
```

- *Type:* str

---

##### `s3_bucket_arn`<sup>Required</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskTaskReportConfigDestinationS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

---


### DatasyncTaskTaskReportConfigOutputReference <a name="DatasyncTaskTaskReportConfigOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetObjectVersionIds">reset_object_version_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOutputType">reset_output_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOverrides">reset_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetReportLevel">reset_report_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination"></a>

```python
def put_destination(
  s3: DatasyncTaskTaskReportConfigDestinationS3 = None
) -> None
```

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

Specifies the Amazon S3 bucket where DataSync uploads your task report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3 DatasyncTask#s3}

---

##### `put_overrides` <a name="put_overrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides"></a>

```python
def put_overrides(
  deleted: DatasyncTaskTaskReportConfigOverridesDeleted = None,
  skipped: DatasyncTaskTaskReportConfigOverridesSkipped = None,
  transferred: DatasyncTaskTaskReportConfigOverridesTransferred = None,
  verified: DatasyncTaskTaskReportConfigOverridesVerified = None
) -> None
```

###### `deleted`<sup>Optional</sup> <a name="deleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides.parameter.deleted"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to delete in your destination location.

This only applies if you configure your task to delete data in the destination that isn't in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#deleted DatasyncTask#deleted}

---

###### `skipped`<sup>Optional</sup> <a name="skipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides.parameter.skipped"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to skip during your transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#skipped DatasyncTask#skipped}

---

###### `transferred`<sup>Optional</sup> <a name="transferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides.parameter.transferred"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#transferred DatasyncTask#transferred}

---

###### `verified`<sup>Optional</sup> <a name="verified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides.parameter.verified"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to verify at the end of your transfer.

This only applies if you configure your task to verify data during and after the transfer (which Datasync does by default)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#verified DatasyncTask#verified}

---

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_object_version_ids` <a name="reset_object_version_ids" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetObjectVersionIds"></a>

```python
def reset_object_version_ids() -> None
```

##### `reset_output_type` <a name="reset_output_type" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOutputType"></a>

```python
def reset_output_type() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOverrides"></a>

```python
def reset_overrides() -> None
```

##### `reset_report_level` <a name="reset_report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetReportLevel"></a>

```python
def reset_report_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference">DatasyncTaskTaskReportConfigDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference">DatasyncTaskTaskReportConfigOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destinationInput">destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIdsInput">object_version_ids_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overridesInput">overrides_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevelInput">report_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds">object_version_ids</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevel">report_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destination"></a>

```python
destination: DatasyncTaskTaskReportConfigDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference">DatasyncTaskTaskReportConfigDestinationOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overrides"></a>

```python
overrides: DatasyncTaskTaskReportConfigOverridesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference">DatasyncTaskTaskReportConfigOverridesOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destinationInput"></a>

```python
destination_input: IResolvable | DatasyncTaskTaskReportConfigDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

---

##### `object_version_ids_input`<sup>Optional</sup> <a name="object_version_ids_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIdsInput"></a>

```python
object_version_ids_input: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overridesInput"></a>

```python
overrides_input: IResolvable | DatasyncTaskTaskReportConfigOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

---

##### `report_level_input`<sup>Optional</sup> <a name="report_level_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevelInput"></a>

```python
report_level_input: str
```

- *Type:* str

---

##### `object_version_ids`<sup>Required</sup> <a name="object_version_ids" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds"></a>

```python
object_version_ids: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `report_level`<sup>Required</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskTaskReportConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

---


### DatasyncTaskTaskReportConfigOverridesDeletedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesDeletedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resetReportLevel">reset_report_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_report_level` <a name="reset_report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resetReportLevel"></a>

```python
def reset_report_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevelInput">report_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel">report_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `report_level_input`<sup>Optional</sup> <a name="report_level_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevelInput"></a>

```python
report_level_input: str
```

- *Type:* str

---

##### `report_level`<sup>Required</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskTaskReportConfigOverridesDeleted
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

---


### DatasyncTaskTaskReportConfigOverridesOutputReference <a name="DatasyncTaskTaskReportConfigOverridesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted">put_deleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped">put_skipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred">put_transferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified">put_verified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetDeleted">reset_deleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetSkipped">reset_skipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetTransferred">reset_transferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetVerified">reset_verified</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_deleted` <a name="put_deleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted"></a>

```python
def put_deleted(
  report_level: str = None
) -> None
```

###### `report_level`<sup>Optional</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted.parameter.reportLevel"></a>

- *Type:* str

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

##### `put_skipped` <a name="put_skipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped"></a>

```python
def put_skipped(
  report_level: str = None
) -> None
```

###### `report_level`<sup>Optional</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped.parameter.reportLevel"></a>

- *Type:* str

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

##### `put_transferred` <a name="put_transferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred"></a>

```python
def put_transferred(
  report_level: str = None
) -> None
```

###### `report_level`<sup>Optional</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred.parameter.reportLevel"></a>

- *Type:* str

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

##### `put_verified` <a name="put_verified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified"></a>

```python
def put_verified(
  report_level: str = None
) -> None
```

###### `report_level`<sup>Optional</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified.parameter.reportLevel"></a>

- *Type:* str

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

##### `reset_deleted` <a name="reset_deleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetDeleted"></a>

```python
def reset_deleted() -> None
```

##### `reset_skipped` <a name="reset_skipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetSkipped"></a>

```python
def reset_skipped() -> None
```

##### `reset_transferred` <a name="reset_transferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetTransferred"></a>

```python
def reset_transferred() -> None
```

##### `reset_verified` <a name="reset_verified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetVerified"></a>

```python
def reset_verified() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted">deleted</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped">skipped</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred">transferred</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verified">verified</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deletedInput">deleted_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skippedInput">skipped_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferredInput">transferred_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verifiedInput">verified_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted"></a>

```python
deleted: DatasyncTaskTaskReportConfigOverridesDeletedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a>

---

##### `skipped`<sup>Required</sup> <a name="skipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped"></a>

```python
skipped: DatasyncTaskTaskReportConfigOverridesSkippedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a>

---

##### `transferred`<sup>Required</sup> <a name="transferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred"></a>

```python
transferred: DatasyncTaskTaskReportConfigOverridesTransferredOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a>

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verified"></a>

```python
verified: DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a>

---

##### `deleted_input`<sup>Optional</sup> <a name="deleted_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deletedInput"></a>

```python
deleted_input: IResolvable | DatasyncTaskTaskReportConfigOverridesDeleted
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

---

##### `skipped_input`<sup>Optional</sup> <a name="skipped_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skippedInput"></a>

```python
skipped_input: IResolvable | DatasyncTaskTaskReportConfigOverridesSkipped
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

---

##### `transferred_input`<sup>Optional</sup> <a name="transferred_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferredInput"></a>

```python
transferred_input: IResolvable | DatasyncTaskTaskReportConfigOverridesTransferred
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

---

##### `verified_input`<sup>Optional</sup> <a name="verified_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verifiedInput"></a>

```python
verified_input: IResolvable | DatasyncTaskTaskReportConfigOverridesVerified
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskTaskReportConfigOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

---


### DatasyncTaskTaskReportConfigOverridesSkippedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesSkippedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resetReportLevel">reset_report_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_report_level` <a name="reset_report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resetReportLevel"></a>

```python
def reset_report_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevelInput">report_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel">report_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `report_level_input`<sup>Optional</sup> <a name="report_level_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevelInput"></a>

```python
report_level_input: str
```

- *Type:* str

---

##### `report_level`<sup>Required</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskTaskReportConfigOverridesSkipped
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

---


### DatasyncTaskTaskReportConfigOverridesTransferredOutputReference <a name="DatasyncTaskTaskReportConfigOverridesTransferredOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resetReportLevel">reset_report_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_report_level` <a name="reset_report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resetReportLevel"></a>

```python
def reset_report_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevelInput">report_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel">report_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `report_level_input`<sup>Optional</sup> <a name="report_level_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevelInput"></a>

```python
report_level_input: str
```

- *Type:* str

---

##### `report_level`<sup>Required</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskTaskReportConfigOverridesTransferred
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

---


### DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_task

datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resetReportLevel">reset_report_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_report_level` <a name="reset_report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resetReportLevel"></a>

```python
def reset_report_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevelInput">report_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel">report_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `report_level_input`<sup>Optional</sup> <a name="report_level_input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevelInput"></a>

```python
report_level_input: str
```

- *Type:* str

---

##### `report_level`<sup>Required</sup> <a name="report_level" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncTaskTaskReportConfigOverridesVerified
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

---



