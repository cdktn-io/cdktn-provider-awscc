# `ssmMaintenanceWindowTask` Submodule <a name="`ssmMaintenanceWindowTask` Submodule" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindowTask <a name="SsmMaintenanceWindowTask" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task awscc_ssm_maintenance_window_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTask(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  priority: typing.Union[int, float],
  task_arn: str,
  task_type: str,
  window_id: str,
  cutoff_behavior: str = None,
  description: str = None,
  logging_info: SsmMaintenanceWindowTaskLoggingInfo = None,
  max_concurrency: str = None,
  max_errors: str = None,
  name: str = None,
  service_role_arn: str = None,
  targets: IResolvable | typing.List[SsmMaintenanceWindowTaskTargets] = None,
  task_invocation_parameters: SsmMaintenanceWindowTaskTaskInvocationParameters = None,
  task_parameters: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the task in the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.taskArn">task_arn</a></code> | <code>str</code> | The resource that the task uses during execution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.taskType">task_type</a></code> | <code>str</code> | The type of task. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.windowId">window_id</a></code> | <code>str</code> | The ID of the maintenance window where the task is registered. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.cutoffBehavior">cutoff_behavior</a></code> | <code>str</code> | The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the task. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.loggingInfo">logging_info</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo">SsmMaintenanceWindowTaskLoggingInfo</a></code> | Information about an Amazon S3 bucket to write Run Command task-level logs to. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.maxConcurrency">max_concurrency</a></code> | <code>str</code> | The maximum number of targets this task can be run for, in parallel. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.maxErrors">max_errors</a></code> | <code>str</code> | The maximum number of errors allowed before this task stops being scheduled. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.name">name</a></code> | <code>str</code> | The task name. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM service role for AWS Systems Manager to assume when running a maintenance window task. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>]</code> | The targets (either instances or window target ids). |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.taskInvocationParameters">task_invocation_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | The parameters to pass to the task when it runs. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.taskParameters">task_parameters</a></code> | <code>str</code> | The parameters to pass to the task when it runs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of the task in the maintenance window.

The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#priority SsmMaintenanceWindowTask#priority}

---

##### `task_arn`<sup>Required</sup> <a name="task_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.taskArn"></a>

- *Type:* str

The resource that the task uses during execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#task_arn SsmMaintenanceWindowTask#task_arn}

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.taskType"></a>

- *Type:* str

The type of task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#task_type SsmMaintenanceWindowTask#task_type}

---

##### `window_id`<sup>Required</sup> <a name="window_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.windowId"></a>

- *Type:* str

The ID of the maintenance window where the task is registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#window_id SsmMaintenanceWindowTask#window_id}

---

##### `cutoff_behavior`<sup>Optional</sup> <a name="cutoff_behavior" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.cutoffBehavior"></a>

- *Type:* str

The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#cutoff_behavior SsmMaintenanceWindowTask#cutoff_behavior}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.description"></a>

- *Type:* str

A description of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#description SsmMaintenanceWindowTask#description}

---

##### `logging_info`<sup>Optional</sup> <a name="logging_info" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.loggingInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo">SsmMaintenanceWindowTaskLoggingInfo</a>

Information about an Amazon S3 bucket to write Run Command task-level logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#logging_info SsmMaintenanceWindowTask#logging_info}

---

##### `max_concurrency`<sup>Optional</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.maxConcurrency"></a>

- *Type:* str

The maximum number of targets this task can be run for, in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#max_concurrency SsmMaintenanceWindowTask#max_concurrency}

---

##### `max_errors`<sup>Optional</sup> <a name="max_errors" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.maxErrors"></a>

- *Type:* str

The maximum number of errors allowed before this task stops being scheduled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#max_errors SsmMaintenanceWindowTask#max_errors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.name"></a>

- *Type:* str

The task name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}

---

##### `service_role_arn`<sup>Optional</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.serviceRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM service role for AWS Systems Manager to assume when running a maintenance window task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.targets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>]

The targets (either instances or window target ids).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#targets SsmMaintenanceWindowTask#targets}

---

##### `task_invocation_parameters`<sup>Optional</sup> <a name="task_invocation_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.taskInvocationParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

The parameters to pass to the task when it runs.

Populate only the fields that match the task type. All other fields should be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}

---

##### `task_parameters`<sup>Optional</sup> <a name="task_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.taskParameters"></a>

- *Type:* str

The parameters to pass to the task when it runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#task_parameters SsmMaintenanceWindowTask#task_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putLoggingInfo">put_logging_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters">put_task_invocation_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetCutoffBehavior">reset_cutoff_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetLoggingInfo">reset_logging_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxConcurrency">reset_max_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxErrors">reset_max_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetServiceRoleArn">reset_service_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTargets">reset_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTaskInvocationParameters">reset_task_invocation_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTaskParameters">reset_task_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_logging_info` <a name="put_logging_info" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putLoggingInfo"></a>

```python
def put_logging_info(
  region: str = None,
  s3_bucket: str = None,
  s3_prefix: str = None
) -> None
```

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putLoggingInfo.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#region SsmMaintenanceWindowTask#region}.

---

###### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putLoggingInfo.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#s3_bucket SsmMaintenanceWindowTask#s3_bucket}.

---

###### `s3_prefix`<sup>Optional</sup> <a name="s3_prefix" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putLoggingInfo.parameter.s3Prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#s3_prefix SsmMaintenanceWindowTask#s3_prefix}.

---

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[SsmMaintenanceWindowTaskTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>]

---

##### `put_task_invocation_parameters` <a name="put_task_invocation_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters"></a>

```python
def put_task_invocation_parameters(
  maintenance_window_automation_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters = None,
  maintenance_window_lambda_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters = None,
  maintenance_window_run_command_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters = None,
  maintenance_window_step_functions_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters = None
) -> None
```

###### `maintenance_window_automation_parameters`<sup>Optional</sup> <a name="maintenance_window_automation_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters.parameter.maintenanceWindowAutomationParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_automation_parameters SsmMaintenanceWindowTask#maintenance_window_automation_parameters}.

---

###### `maintenance_window_lambda_parameters`<sup>Optional</sup> <a name="maintenance_window_lambda_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters.parameter.maintenanceWindowLambdaParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_lambda_parameters SsmMaintenanceWindowTask#maintenance_window_lambda_parameters}.

---

###### `maintenance_window_run_command_parameters`<sup>Optional</sup> <a name="maintenance_window_run_command_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters.parameter.maintenanceWindowRunCommandParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_run_command_parameters SsmMaintenanceWindowTask#maintenance_window_run_command_parameters}.

---

###### `maintenance_window_step_functions_parameters`<sup>Optional</sup> <a name="maintenance_window_step_functions_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters.parameter.maintenanceWindowStepFunctionsParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_step_functions_parameters SsmMaintenanceWindowTask#maintenance_window_step_functions_parameters}.

---

##### `reset_cutoff_behavior` <a name="reset_cutoff_behavior" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetCutoffBehavior"></a>

```python
def reset_cutoff_behavior() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_logging_info` <a name="reset_logging_info" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetLoggingInfo"></a>

```python
def reset_logging_info() -> None
```

##### `reset_max_concurrency` <a name="reset_max_concurrency" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxConcurrency"></a>

```python
def reset_max_concurrency() -> None
```

##### `reset_max_errors` <a name="reset_max_errors" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxErrors"></a>

```python
def reset_max_errors() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_service_role_arn` <a name="reset_service_role_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetServiceRoleArn"></a>

```python
def reset_service_role_arn() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTargets"></a>

```python
def reset_targets() -> None
```

##### `reset_task_invocation_parameters` <a name="reset_task_invocation_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTaskInvocationParameters"></a>

```python
def reset_task_invocation_parameters() -> None
```

##### `reset_task_parameters` <a name="reset_task_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTaskParameters"></a>

```python
def reset_task_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsmMaintenanceWindowTask resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isConstruct"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsmMaintenanceWindowTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmMaintenanceWindowTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmMaintenanceWindowTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmMaintenanceWindowTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.loggingInfo">logging_info</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference">SsmMaintenanceWindowTaskLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList">SsmMaintenanceWindowTaskTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParameters">task_invocation_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowTaskId">window_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehaviorInput">cutoff_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.loggingInfoInput">logging_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo">SsmMaintenanceWindowTaskLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrencyInput">max_concurrency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrorsInput">max_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArnInput">service_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArnInput">task_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParametersInput">task_invocation_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskParametersInput">task_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowIdInput">window_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehavior">cutoff_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrency">max_concurrency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrors">max_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArn">task_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskParameters">task_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowId">window_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_info`<sup>Required</sup> <a name="logging_info" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.loggingInfo"></a>

```python
logging_info: SsmMaintenanceWindowTaskLoggingInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference">SsmMaintenanceWindowTaskLoggingInfoOutputReference</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targets"></a>

```python
targets: SsmMaintenanceWindowTaskTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList">SsmMaintenanceWindowTaskTargetsList</a>

---

##### `task_invocation_parameters`<sup>Required</sup> <a name="task_invocation_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParameters"></a>

```python
task_invocation_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a>

---

##### `window_task_id`<sup>Required</sup> <a name="window_task_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowTaskId"></a>

```python
window_task_id: str
```

- *Type:* str

---

##### `cutoff_behavior_input`<sup>Optional</sup> <a name="cutoff_behavior_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehaviorInput"></a>

```python
cutoff_behavior_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `logging_info_input`<sup>Optional</sup> <a name="logging_info_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.loggingInfoInput"></a>

```python
logging_info_input: IResolvable | SsmMaintenanceWindowTaskLoggingInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo">SsmMaintenanceWindowTaskLoggingInfo</a>

---

##### `max_concurrency_input`<sup>Optional</sup> <a name="max_concurrency_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrencyInput"></a>

```python
max_concurrency_input: str
```

- *Type:* str

---

##### `max_errors_input`<sup>Optional</sup> <a name="max_errors_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrorsInput"></a>

```python
max_errors_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_role_arn_input`<sup>Optional</sup> <a name="service_role_arn_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArnInput"></a>

```python
service_role_arn_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[SsmMaintenanceWindowTaskTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>]

---

##### `task_arn_input`<sup>Optional</sup> <a name="task_arn_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArnInput"></a>

```python
task_arn_input: str
```

- *Type:* str

---

##### `task_invocation_parameters_input`<sup>Optional</sup> <a name="task_invocation_parameters_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParametersInput"></a>

```python
task_invocation_parameters_input: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

---

##### `task_parameters_input`<sup>Optional</sup> <a name="task_parameters_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskParametersInput"></a>

```python
task_parameters_input: str
```

- *Type:* str

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `window_id_input`<sup>Optional</sup> <a name="window_id_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowIdInput"></a>

```python
window_id_input: str
```

- *Type:* str

---

##### `cutoff_behavior`<sup>Required</sup> <a name="cutoff_behavior" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehavior"></a>

```python
cutoff_behavior: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `max_concurrency`<sup>Required</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrency"></a>

```python
max_concurrency: str
```

- *Type:* str

---

##### `max_errors`<sup>Required</sup> <a name="max_errors" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrors"></a>

```python
max_errors: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

---

##### `task_arn`<sup>Required</sup> <a name="task_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArn"></a>

```python
task_arn: str
```

- *Type:* str

---

##### `task_parameters`<sup>Required</sup> <a name="task_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskParameters"></a>

```python
task_parameters: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `window_id`<sup>Required</sup> <a name="window_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowId"></a>

```python
window_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowTaskConfig <a name="SsmMaintenanceWindowTaskConfig" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  priority: typing.Union[int, float],
  task_arn: str,
  task_type: str,
  window_id: str,
  cutoff_behavior: str = None,
  description: str = None,
  logging_info: SsmMaintenanceWindowTaskLoggingInfo = None,
  max_concurrency: str = None,
  max_errors: str = None,
  name: str = None,
  service_role_arn: str = None,
  targets: IResolvable | typing.List[SsmMaintenanceWindowTaskTargets] = None,
  task_invocation_parameters: SsmMaintenanceWindowTaskTaskInvocationParameters = None,
  task_parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the task in the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskArn">task_arn</a></code> | <code>str</code> | The resource that the task uses during execution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskType">task_type</a></code> | <code>str</code> | The type of task. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.windowId">window_id</a></code> | <code>str</code> | The ID of the maintenance window where the task is registered. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.cutoffBehavior">cutoff_behavior</a></code> | <code>str</code> | The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.description">description</a></code> | <code>str</code> | A description of the task. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.loggingInfo">logging_info</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo">SsmMaintenanceWindowTaskLoggingInfo</a></code> | Information about an Amazon S3 bucket to write Run Command task-level logs to. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxConcurrency">max_concurrency</a></code> | <code>str</code> | The maximum number of targets this task can be run for, in parallel. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxErrors">max_errors</a></code> | <code>str</code> | The maximum number of errors allowed before this task stops being scheduled. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.name">name</a></code> | <code>str</code> | The task name. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM service role for AWS Systems Manager to assume when running a maintenance window task. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>]</code> | The targets (either instances or window target ids). |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskInvocationParameters">task_invocation_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | The parameters to pass to the task when it runs. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskParameters">task_parameters</a></code> | <code>str</code> | The parameters to pass to the task when it runs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of the task in the maintenance window.

The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#priority SsmMaintenanceWindowTask#priority}

---

##### `task_arn`<sup>Required</sup> <a name="task_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskArn"></a>

```python
task_arn: str
```

- *Type:* str

The resource that the task uses during execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#task_arn SsmMaintenanceWindowTask#task_arn}

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

The type of task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#task_type SsmMaintenanceWindowTask#task_type}

---

##### `window_id`<sup>Required</sup> <a name="window_id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.windowId"></a>

```python
window_id: str
```

- *Type:* str

The ID of the maintenance window where the task is registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#window_id SsmMaintenanceWindowTask#window_id}

---

##### `cutoff_behavior`<sup>Optional</sup> <a name="cutoff_behavior" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.cutoffBehavior"></a>

```python
cutoff_behavior: str
```

- *Type:* str

The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#cutoff_behavior SsmMaintenanceWindowTask#cutoff_behavior}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#description SsmMaintenanceWindowTask#description}

---

##### `logging_info`<sup>Optional</sup> <a name="logging_info" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.loggingInfo"></a>

```python
logging_info: SsmMaintenanceWindowTaskLoggingInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo">SsmMaintenanceWindowTaskLoggingInfo</a>

Information about an Amazon S3 bucket to write Run Command task-level logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#logging_info SsmMaintenanceWindowTask#logging_info}

---

##### `max_concurrency`<sup>Optional</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxConcurrency"></a>

```python
max_concurrency: str
```

- *Type:* str

The maximum number of targets this task can be run for, in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#max_concurrency SsmMaintenanceWindowTask#max_concurrency}

---

##### `max_errors`<sup>Optional</sup> <a name="max_errors" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxErrors"></a>

```python
max_errors: str
```

- *Type:* str

The maximum number of errors allowed before this task stops being scheduled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#max_errors SsmMaintenanceWindowTask#max_errors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The task name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}

---

##### `service_role_arn`<sup>Optional</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM service role for AWS Systems Manager to assume when running a maintenance window task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.targets"></a>

```python
targets: IResolvable | typing.List[SsmMaintenanceWindowTaskTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>]

The targets (either instances or window target ids).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#targets SsmMaintenanceWindowTask#targets}

---

##### `task_invocation_parameters`<sup>Optional</sup> <a name="task_invocation_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskInvocationParameters"></a>

```python
task_invocation_parameters: SsmMaintenanceWindowTaskTaskInvocationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

The parameters to pass to the task when it runs.

Populate only the fields that match the task type. All other fields should be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}

---

##### `task_parameters`<sup>Optional</sup> <a name="task_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskParameters"></a>

```python
task_parameters: str
```

- *Type:* str

The parameters to pass to the task when it runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#task_parameters SsmMaintenanceWindowTask#task_parameters}

---

### SsmMaintenanceWindowTaskLoggingInfo <a name="SsmMaintenanceWindowTaskLoggingInfo" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo(
  region: str = None,
  s3_bucket: str = None,
  s3_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#region SsmMaintenanceWindowTask#region}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#s3_bucket SsmMaintenanceWindowTask#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#s3_prefix SsmMaintenanceWindowTask#s3_prefix}. |

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#region SsmMaintenanceWindowTask#region}.

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#s3_bucket SsmMaintenanceWindowTask#s3_bucket}.

---

##### `s3_prefix`<sup>Optional</sup> <a name="s3_prefix" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#s3_prefix SsmMaintenanceWindowTask#s3_prefix}.

---

### SsmMaintenanceWindowTaskTargets <a name="SsmMaintenanceWindowTaskTargets" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#key SsmMaintenanceWindowTask#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#key SsmMaintenanceWindowTask#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}.

---

### SsmMaintenanceWindowTaskTaskInvocationParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters(
  maintenance_window_automation_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters = None,
  maintenance_window_lambda_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters = None,
  maintenance_window_run_command_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters = None,
  maintenance_window_step_functions_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.maintenanceWindowAutomationParameters">maintenance_window_automation_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_automation_parameters SsmMaintenanceWindowTask#maintenance_window_automation_parameters}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.maintenanceWindowLambdaParameters">maintenance_window_lambda_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_lambda_parameters SsmMaintenanceWindowTask#maintenance_window_lambda_parameters}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.maintenanceWindowRunCommandParameters">maintenance_window_run_command_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_run_command_parameters SsmMaintenanceWindowTask#maintenance_window_run_command_parameters}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.maintenanceWindowStepFunctionsParameters">maintenance_window_step_functions_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_step_functions_parameters SsmMaintenanceWindowTask#maintenance_window_step_functions_parameters}. |

---

##### `maintenance_window_automation_parameters`<sup>Optional</sup> <a name="maintenance_window_automation_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.maintenanceWindowAutomationParameters"></a>

```python
maintenance_window_automation_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_automation_parameters SsmMaintenanceWindowTask#maintenance_window_automation_parameters}.

---

##### `maintenance_window_lambda_parameters`<sup>Optional</sup> <a name="maintenance_window_lambda_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.maintenanceWindowLambdaParameters"></a>

```python
maintenance_window_lambda_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_lambda_parameters SsmMaintenanceWindowTask#maintenance_window_lambda_parameters}.

---

##### `maintenance_window_run_command_parameters`<sup>Optional</sup> <a name="maintenance_window_run_command_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.maintenanceWindowRunCommandParameters"></a>

```python
maintenance_window_run_command_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_run_command_parameters SsmMaintenanceWindowTask#maintenance_window_run_command_parameters}.

---

##### `maintenance_window_step_functions_parameters`<sup>Optional</sup> <a name="maintenance_window_step_functions_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.maintenanceWindowStepFunctionsParameters"></a>

```python
maintenance_window_step_functions_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#maintenance_window_step_functions_parameters SsmMaintenanceWindowTask#maintenance_window_step_functions_parameters}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters(
  document_version: str = None,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters.property.documentVersion">document_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#parameters SsmMaintenanceWindowTask#parameters}. |

---

##### `document_version`<sup>Optional</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#parameters SsmMaintenanceWindowTask#parameters}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters(
  client_context: str = None,
  payload: str = None,
  qualifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters.property.clientContext">client_context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#client_context SsmMaintenanceWindowTask#client_context}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters.property.payload">payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#payload SsmMaintenanceWindowTask#payload}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters.property.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#qualifier SsmMaintenanceWindowTask#qualifier}. |

---

##### `client_context`<sup>Optional</sup> <a name="client_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters.property.clientContext"></a>

```python
client_context: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#client_context SsmMaintenanceWindowTask#client_context}.

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters.property.payload"></a>

```python
payload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#payload SsmMaintenanceWindowTask#payload}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#qualifier SsmMaintenanceWindowTask#qualifier}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters(
  cloudwatch_output_config: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig = None,
  comment: str = None,
  document_hash: str = None,
  document_hash_type: str = None,
  document_version: str = None,
  notification_config: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig = None,
  output_s3_bucket_name: str = None,
  output_s3_key_prefix: str = None,
  parameters: str = None,
  service_role_arn: str = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.cloudwatchOutputConfig">cloudwatch_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#cloudwatch_output_config SsmMaintenanceWindowTask#cloudwatch_output_config}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#comment SsmMaintenanceWindowTask#comment}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.documentHash">document_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_hash SsmMaintenanceWindowTask#document_hash}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.documentHashType">document_hash_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_hash_type SsmMaintenanceWindowTask#document_hash_type}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.documentVersion">document_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_config SsmMaintenanceWindowTask#notification_config}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.outputS3BucketName">output_s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#output_s3_bucket_name SsmMaintenanceWindowTask#output_s3_bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.outputS3KeyPrefix">output_s3_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#parameters SsmMaintenanceWindowTask#parameters}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}. |

---

##### `cloudwatch_output_config`<sup>Optional</sup> <a name="cloudwatch_output_config" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.cloudwatchOutputConfig"></a>

```python
cloudwatch_output_config: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#cloudwatch_output_config SsmMaintenanceWindowTask#cloudwatch_output_config}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#comment SsmMaintenanceWindowTask#comment}.

---

##### `document_hash`<sup>Optional</sup> <a name="document_hash" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.documentHash"></a>

```python
document_hash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_hash SsmMaintenanceWindowTask#document_hash}.

---

##### `document_hash_type`<sup>Optional</sup> <a name="document_hash_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.documentHashType"></a>

```python
document_hash_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_hash_type SsmMaintenanceWindowTask#document_hash_type}.

---

##### `document_version`<sup>Optional</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}.

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.notificationConfig"></a>

```python
notification_config: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_config SsmMaintenanceWindowTask#notification_config}.

---

##### `output_s3_bucket_name`<sup>Optional</sup> <a name="output_s3_bucket_name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.outputS3BucketName"></a>

```python
output_s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#output_s3_bucket_name SsmMaintenanceWindowTask#output_s3_bucket_name}.

---

##### `output_s3_key_prefix`<sup>Optional</sup> <a name="output_s3_key_prefix" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.outputS3KeyPrefix"></a>

```python
output_s3_key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#parameters SsmMaintenanceWindowTask#parameters}.

---

##### `service_role_arn`<sup>Optional</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}.

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig(
  cloudwatch_log_group_name: str = None,
  cloudwatch_output_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig.property.cloudwatchLogGroupName">cloudwatch_log_group_name</a></code> | <code>str</code> | The name of the CloudWatch log group where you want to send command output. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig.property.cloudwatchOutputEnabled">cloudwatch_output_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables Systems Manager to send command output to CloudWatch Logs. |

---

##### `cloudwatch_log_group_name`<sup>Optional</sup> <a name="cloudwatch_log_group_name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig.property.cloudwatchLogGroupName"></a>

```python
cloudwatch_log_group_name: str
```

- *Type:* str

The name of the CloudWatch log group where you want to send command output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}

---

##### `cloudwatch_output_enabled`<sup>Optional</sup> <a name="cloudwatch_output_enabled" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig.property.cloudwatchOutputEnabled"></a>

```python
cloudwatch_output_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables Systems Manager to send command output to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}

---

### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig(
  notification_arn: str = None,
  notification_events: typing.List[str] = None,
  notification_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig.property.notificationArn">notification_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_arn SsmMaintenanceWindowTask#notification_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig.property.notificationEvents">notification_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_events SsmMaintenanceWindowTask#notification_events}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig.property.notificationType">notification_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_type SsmMaintenanceWindowTask#notification_type}. |

---

##### `notification_arn`<sup>Optional</sup> <a name="notification_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig.property.notificationArn"></a>

```python
notification_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_arn SsmMaintenanceWindowTask#notification_arn}.

---

##### `notification_events`<sup>Optional</sup> <a name="notification_events" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig.property.notificationEvents"></a>

```python
notification_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_events SsmMaintenanceWindowTask#notification_events}.

---

##### `notification_type`<sup>Optional</sup> <a name="notification_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_type SsmMaintenanceWindowTask#notification_type}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters(
  input: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters.property.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#input SsmMaintenanceWindowTask#input}. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}. |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters.property.input"></a>

```python
input: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#input SsmMaintenanceWindowTask#input}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmMaintenanceWindowTaskLoggingInfoOutputReference <a name="SsmMaintenanceWindowTaskLoggingInfoOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.resetS3Prefix">reset_s3_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_prefix` <a name="reset_s3_prefix" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.resetS3Prefix"></a>

```python
def reset_s3_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3PrefixInput">s3_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo">SsmMaintenanceWindowTaskLoggingInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_prefix_input`<sup>Optional</sup> <a name="s3_prefix_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3PrefixInput"></a>

```python
s3_prefix_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmMaintenanceWindowTaskLoggingInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskLoggingInfo">SsmMaintenanceWindowTaskLoggingInfo</a>

---


### SsmMaintenanceWindowTaskTargetsList <a name="SsmMaintenanceWindowTaskTargetsList" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmMaintenanceWindowTaskTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmMaintenanceWindowTaskTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>]

---


### SsmMaintenanceWindowTaskTargetsOutputReference <a name="SsmMaintenanceWindowTaskTargetsOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmMaintenanceWindowTaskTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets">SsmMaintenanceWindowTaskTargets</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resetDocumentVersion">reset_document_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_document_version` <a name="reset_document_version" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resetDocumentVersion"></a>

```python
def reset_document_version() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.documentVersionInput">document_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.documentVersion">document_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `document_version_input`<sup>Optional</sup> <a name="document_version_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.documentVersionInput"></a>

```python
document_version_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `document_version`<sup>Required</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resetClientContext">reset_client_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resetQualifier">reset_qualifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_context` <a name="reset_client_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resetClientContext"></a>

```python
def reset_client_context() -> None
```

##### `reset_payload` <a name="reset_payload" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_qualifier` <a name="reset_qualifier" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resetQualifier"></a>

```python
def reset_qualifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.clientContextInput">client_context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.payloadInput">payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.qualifierInput">qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.clientContext">client_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_context_input`<sup>Optional</sup> <a name="client_context_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.clientContextInput"></a>

```python
client_context_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.payloadInput"></a>

```python
payload_input: str
```

- *Type:* str

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.qualifierInput"></a>

```python
qualifier_input: str
```

- *Type:* str

---

##### `client_context`<sup>Required</sup> <a name="client_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.clientContext"></a>

```python
client_context: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resetCloudwatchLogGroupName">reset_cloudwatch_log_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resetCloudwatchOutputEnabled">reset_cloudwatch_output_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloudwatch_log_group_name` <a name="reset_cloudwatch_log_group_name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resetCloudwatchLogGroupName"></a>

```python
def reset_cloudwatch_log_group_name() -> None
```

##### `reset_cloudwatch_output_enabled` <a name="reset_cloudwatch_output_enabled" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resetCloudwatchOutputEnabled"></a>

```python
def reset_cloudwatch_output_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchLogGroupNameInput">cloudwatch_log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchOutputEnabledInput">cloudwatch_output_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchLogGroupName">cloudwatch_log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchOutputEnabled">cloudwatch_output_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_name_input`<sup>Optional</sup> <a name="cloudwatch_log_group_name_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchLogGroupNameInput"></a>

```python
cloudwatch_log_group_name_input: str
```

- *Type:* str

---

##### `cloudwatch_output_enabled_input`<sup>Optional</sup> <a name="cloudwatch_output_enabled_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchOutputEnabledInput"></a>

```python
cloudwatch_output_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cloudwatch_log_group_name`<sup>Required</sup> <a name="cloudwatch_log_group_name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchLogGroupName"></a>

```python
cloudwatch_log_group_name: str
```

- *Type:* str

---

##### `cloudwatch_output_enabled`<sup>Required</sup> <a name="cloudwatch_output_enabled" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchOutputEnabled"></a>

```python
cloudwatch_output_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resetNotificationArn">reset_notification_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resetNotificationEvents">reset_notification_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resetNotificationType">reset_notification_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_notification_arn` <a name="reset_notification_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resetNotificationArn"></a>

```python
def reset_notification_arn() -> None
```

##### `reset_notification_events` <a name="reset_notification_events" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resetNotificationEvents"></a>

```python
def reset_notification_events() -> None
```

##### `reset_notification_type` <a name="reset_notification_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resetNotificationType"></a>

```python
def reset_notification_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationArnInput">notification_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationEventsInput">notification_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationTypeInput">notification_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationArn">notification_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationEvents">notification_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationType">notification_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_arn_input`<sup>Optional</sup> <a name="notification_arn_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationArnInput"></a>

```python
notification_arn_input: str
```

- *Type:* str

---

##### `notification_events_input`<sup>Optional</sup> <a name="notification_events_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationEventsInput"></a>

```python
notification_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notification_type_input`<sup>Optional</sup> <a name="notification_type_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationTypeInput"></a>

```python
notification_type_input: str
```

- *Type:* str

---

##### `notification_arn`<sup>Required</sup> <a name="notification_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationArn"></a>

```python
notification_arn: str
```

- *Type:* str

---

##### `notification_events`<sup>Required</sup> <a name="notification_events" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationEvents"></a>

```python
notification_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.putCloudwatchOutputConfig">put_cloudwatch_output_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.putNotificationConfig">put_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetCloudwatchOutputConfig">reset_cloudwatch_output_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetDocumentHash">reset_document_hash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetDocumentHashType">reset_document_hash_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetDocumentVersion">reset_document_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetNotificationConfig">reset_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetOutputS3BucketName">reset_output_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetOutputS3KeyPrefix">reset_output_s3_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetServiceRoleArn">reset_service_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_output_config` <a name="put_cloudwatch_output_config" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.putCloudwatchOutputConfig"></a>

```python
def put_cloudwatch_output_config(
  cloudwatch_log_group_name: str = None,
  cloudwatch_output_enabled: bool | IResolvable = None
) -> None
```

###### `cloudwatch_log_group_name`<sup>Optional</sup> <a name="cloudwatch_log_group_name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.putCloudwatchOutputConfig.parameter.cloudwatchLogGroupName"></a>

- *Type:* str

The name of the CloudWatch log group where you want to send command output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}

---

###### `cloudwatch_output_enabled`<sup>Optional</sup> <a name="cloudwatch_output_enabled" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.putCloudwatchOutputConfig.parameter.cloudwatchOutputEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Enables Systems Manager to send command output to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}

---

##### `put_notification_config` <a name="put_notification_config" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.putNotificationConfig"></a>

```python
def put_notification_config(
  notification_arn: str = None,
  notification_events: typing.List[str] = None,
  notification_type: str = None
) -> None
```

###### `notification_arn`<sup>Optional</sup> <a name="notification_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.putNotificationConfig.parameter.notificationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_arn SsmMaintenanceWindowTask#notification_arn}.

---

###### `notification_events`<sup>Optional</sup> <a name="notification_events" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.putNotificationConfig.parameter.notificationEvents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_events SsmMaintenanceWindowTask#notification_events}.

---

###### `notification_type`<sup>Optional</sup> <a name="notification_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.putNotificationConfig.parameter.notificationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_type SsmMaintenanceWindowTask#notification_type}.

---

##### `reset_cloudwatch_output_config` <a name="reset_cloudwatch_output_config" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetCloudwatchOutputConfig"></a>

```python
def reset_cloudwatch_output_config() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_document_hash` <a name="reset_document_hash" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetDocumentHash"></a>

```python
def reset_document_hash() -> None
```

##### `reset_document_hash_type` <a name="reset_document_hash_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetDocumentHashType"></a>

```python
def reset_document_hash_type() -> None
```

##### `reset_document_version` <a name="reset_document_version" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetDocumentVersion"></a>

```python
def reset_document_version() -> None
```

##### `reset_notification_config` <a name="reset_notification_config" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetNotificationConfig"></a>

```python
def reset_notification_config() -> None
```

##### `reset_output_s3_bucket_name` <a name="reset_output_s3_bucket_name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetOutputS3BucketName"></a>

```python
def reset_output_s3_bucket_name() -> None
```

##### `reset_output_s3_key_prefix` <a name="reset_output_s3_key_prefix" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetOutputS3KeyPrefix"></a>

```python
def reset_output_s3_key_prefix() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_service_role_arn` <a name="reset_service_role_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetServiceRoleArn"></a>

```python
def reset_service_role_arn() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.cloudwatchOutputConfig">cloudwatch_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.cloudwatchOutputConfigInput">cloudwatch_output_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashInput">document_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashTypeInput">document_hash_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentVersionInput">document_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.notificationConfigInput">notification_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3BucketNameInput">output_s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3KeyPrefixInput">output_s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.serviceRoleArnInput">service_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHash">document_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashType">document_hash_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentVersion">document_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3BucketName">output_s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3KeyPrefix">output_s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_output_config`<sup>Required</sup> <a name="cloudwatch_output_config" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.cloudwatchOutputConfig"></a>

```python
cloudwatch_output_config: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference</a>

---

##### `notification_config`<sup>Required</sup> <a name="notification_config" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.notificationConfig"></a>

```python
notification_config: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference</a>

---

##### `cloudwatch_output_config_input`<sup>Optional</sup> <a name="cloudwatch_output_config_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.cloudwatchOutputConfigInput"></a>

```python
cloudwatch_output_config_input: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `document_hash_input`<sup>Optional</sup> <a name="document_hash_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashInput"></a>

```python
document_hash_input: str
```

- *Type:* str

---

##### `document_hash_type_input`<sup>Optional</sup> <a name="document_hash_type_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashTypeInput"></a>

```python
document_hash_type_input: str
```

- *Type:* str

---

##### `document_version_input`<sup>Optional</sup> <a name="document_version_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentVersionInput"></a>

```python
document_version_input: str
```

- *Type:* str

---

##### `notification_config_input`<sup>Optional</sup> <a name="notification_config_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.notificationConfigInput"></a>

```python
notification_config_input: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a>

---

##### `output_s3_bucket_name_input`<sup>Optional</sup> <a name="output_s3_bucket_name_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3BucketNameInput"></a>

```python
output_s3_bucket_name_input: str
```

- *Type:* str

---

##### `output_s3_key_prefix_input`<sup>Optional</sup> <a name="output_s3_key_prefix_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3KeyPrefixInput"></a>

```python
output_s3_key_prefix_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `service_role_arn_input`<sup>Optional</sup> <a name="service_role_arn_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.serviceRoleArnInput"></a>

```python
service_role_arn_input: str
```

- *Type:* str

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `document_hash`<sup>Required</sup> <a name="document_hash" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHash"></a>

```python
document_hash: str
```

- *Type:* str

---

##### `document_hash_type`<sup>Required</sup> <a name="document_hash_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashType"></a>

```python
document_hash_type: str
```

- *Type:* str

---

##### `document_version`<sup>Required</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

---

##### `output_s3_bucket_name`<sup>Required</sup> <a name="output_s3_bucket_name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3BucketName"></a>

```python
output_s3_bucket_name: str
```

- *Type:* str

---

##### `output_s3_key_prefix`<sup>Required</sup> <a name="output_s3_key_prefix" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3KeyPrefix"></a>

```python
output_s3_key_prefix: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input` <a name="reset_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window_task

ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowAutomationParameters">put_maintenance_window_automation_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowLambdaParameters">put_maintenance_window_lambda_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters">put_maintenance_window_run_command_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowStepFunctionsParameters">put_maintenance_window_step_functions_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetMaintenanceWindowAutomationParameters">reset_maintenance_window_automation_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetMaintenanceWindowLambdaParameters">reset_maintenance_window_lambda_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetMaintenanceWindowRunCommandParameters">reset_maintenance_window_run_command_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetMaintenanceWindowStepFunctionsParameters">reset_maintenance_window_step_functions_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_maintenance_window_automation_parameters` <a name="put_maintenance_window_automation_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowAutomationParameters"></a>

```python
def put_maintenance_window_automation_parameters(
  document_version: str = None,
  parameters: str = None
) -> None
```

###### `document_version`<sup>Optional</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowAutomationParameters.parameter.documentVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowAutomationParameters.parameter.parameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#parameters SsmMaintenanceWindowTask#parameters}.

---

##### `put_maintenance_window_lambda_parameters` <a name="put_maintenance_window_lambda_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowLambdaParameters"></a>

```python
def put_maintenance_window_lambda_parameters(
  client_context: str = None,
  payload: str = None,
  qualifier: str = None
) -> None
```

###### `client_context`<sup>Optional</sup> <a name="client_context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowLambdaParameters.parameter.clientContext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#client_context SsmMaintenanceWindowTask#client_context}.

---

###### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowLambdaParameters.parameter.payload"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#payload SsmMaintenanceWindowTask#payload}.

---

###### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowLambdaParameters.parameter.qualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#qualifier SsmMaintenanceWindowTask#qualifier}.

---

##### `put_maintenance_window_run_command_parameters` <a name="put_maintenance_window_run_command_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters"></a>

```python
def put_maintenance_window_run_command_parameters(
  cloudwatch_output_config: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig = None,
  comment: str = None,
  document_hash: str = None,
  document_hash_type: str = None,
  document_version: str = None,
  notification_config: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig = None,
  output_s3_bucket_name: str = None,
  output_s3_key_prefix: str = None,
  parameters: str = None,
  service_role_arn: str = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `cloudwatch_output_config`<sup>Optional</sup> <a name="cloudwatch_output_config" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters.parameter.cloudwatchOutputConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#cloudwatch_output_config SsmMaintenanceWindowTask#cloudwatch_output_config}.

---

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#comment SsmMaintenanceWindowTask#comment}.

---

###### `document_hash`<sup>Optional</sup> <a name="document_hash" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters.parameter.documentHash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_hash SsmMaintenanceWindowTask#document_hash}.

---

###### `document_hash_type`<sup>Optional</sup> <a name="document_hash_type" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters.parameter.documentHashType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_hash_type SsmMaintenanceWindowTask#document_hash_type}.

---

###### `document_version`<sup>Optional</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters.parameter.documentVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}.

---

###### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters.parameter.notificationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#notification_config SsmMaintenanceWindowTask#notification_config}.

---

###### `output_s3_bucket_name`<sup>Optional</sup> <a name="output_s3_bucket_name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters.parameter.outputS3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#output_s3_bucket_name SsmMaintenanceWindowTask#output_s3_bucket_name}.

---

###### `output_s3_key_prefix`<sup>Optional</sup> <a name="output_s3_key_prefix" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters.parameter.outputS3KeyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters.parameter.parameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#parameters SsmMaintenanceWindowTask#parameters}.

---

###### `service_role_arn`<sup>Optional</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters.parameter.serviceRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}.

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowRunCommandParameters.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}.

---

##### `put_maintenance_window_step_functions_parameters` <a name="put_maintenance_window_step_functions_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowStepFunctionsParameters"></a>

```python
def put_maintenance_window_step_functions_parameters(
  input: str = None,
  name: str = None
) -> None
```

###### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowStepFunctionsParameters.parameter.input"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#input SsmMaintenanceWindowTask#input}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putMaintenanceWindowStepFunctionsParameters.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}.

---

##### `reset_maintenance_window_automation_parameters` <a name="reset_maintenance_window_automation_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetMaintenanceWindowAutomationParameters"></a>

```python
def reset_maintenance_window_automation_parameters() -> None
```

##### `reset_maintenance_window_lambda_parameters` <a name="reset_maintenance_window_lambda_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetMaintenanceWindowLambdaParameters"></a>

```python
def reset_maintenance_window_lambda_parameters() -> None
```

##### `reset_maintenance_window_run_command_parameters` <a name="reset_maintenance_window_run_command_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetMaintenanceWindowRunCommandParameters"></a>

```python
def reset_maintenance_window_run_command_parameters() -> None
```

##### `reset_maintenance_window_step_functions_parameters` <a name="reset_maintenance_window_step_functions_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetMaintenanceWindowStepFunctionsParameters"></a>

```python
def reset_maintenance_window_step_functions_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowAutomationParameters">maintenance_window_automation_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowLambdaParameters">maintenance_window_lambda_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowRunCommandParameters">maintenance_window_run_command_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowStepFunctionsParameters">maintenance_window_step_functions_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowAutomationParametersInput">maintenance_window_automation_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowLambdaParametersInput">maintenance_window_lambda_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowRunCommandParametersInput">maintenance_window_run_command_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowStepFunctionsParametersInput">maintenance_window_step_functions_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_window_automation_parameters`<sup>Required</sup> <a name="maintenance_window_automation_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowAutomationParameters"></a>

```python
maintenance_window_automation_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference</a>

---

##### `maintenance_window_lambda_parameters`<sup>Required</sup> <a name="maintenance_window_lambda_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowLambdaParameters"></a>

```python
maintenance_window_lambda_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference</a>

---

##### `maintenance_window_run_command_parameters`<sup>Required</sup> <a name="maintenance_window_run_command_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowRunCommandParameters"></a>

```python
maintenance_window_run_command_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference</a>

---

##### `maintenance_window_step_functions_parameters`<sup>Required</sup> <a name="maintenance_window_step_functions_parameters" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowStepFunctionsParameters"></a>

```python
maintenance_window_step_functions_parameters: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference</a>

---

##### `maintenance_window_automation_parameters_input`<sup>Optional</sup> <a name="maintenance_window_automation_parameters_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowAutomationParametersInput"></a>

```python
maintenance_window_automation_parameters_input: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a>

---

##### `maintenance_window_lambda_parameters_input`<sup>Optional</sup> <a name="maintenance_window_lambda_parameters_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowLambdaParametersInput"></a>

```python
maintenance_window_lambda_parameters_input: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a>

---

##### `maintenance_window_run_command_parameters_input`<sup>Optional</sup> <a name="maintenance_window_run_command_parameters_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowRunCommandParametersInput"></a>

```python
maintenance_window_run_command_parameters_input: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a>

---

##### `maintenance_window_step_functions_parameters_input`<sup>Optional</sup> <a name="maintenance_window_step_functions_parameters_input" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowStepFunctionsParametersInput"></a>

```python
maintenance_window_step_functions_parameters_input: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmMaintenanceWindowTaskTaskInvocationParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

---



