# `ssmMaintenanceWindow` Submodule <a name="`ssmMaintenanceWindow` Submodule" id="@cdktn/provider-awscc.ssmMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindow <a name="SsmMaintenanceWindow" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window awscc_ssm_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window

ssmMaintenanceWindow.SsmMaintenanceWindow(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allow_unassociated_targets: bool | IResolvable,
  cutoff: typing.Union[int, float],
  duration: typing.Union[int, float],
  name: str,
  schedule: str,
  description: str = None,
  end_date: str = None,
  schedule_offset: typing.Union[int, float] = None,
  schedule_timezone: str = None,
  start_date: str = None,
  tags: IResolvable | typing.List[SsmMaintenanceWindowTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.allowUnassociatedTargets">allow_unassociated_targets</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.cutoff">cutoff</a></code> | <code>typing.Union[int, float]</code> | The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.duration">duration</a></code> | <code>typing.Union[int, float]</code> | The duration of the maintenance window in hours. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.schedule">schedule</a></code> | <code>str</code> | The schedule of the maintenance window in the form of a cron or rate expression. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scheduleOffset">schedule_offset</a></code> | <code>typing.Union[int, float]</code> | The number of days to wait to run a maintenance window after the scheduled cron expression date and time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scheduleTimezone">schedule_timezone</a></code> | <code>str</code> | The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.startDate">start_date</a></code> | <code>str</code> | The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>]</code> | Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allow_unassociated_targets`<sup>Required</sup> <a name="allow_unassociated_targets" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.allowUnassociatedTargets"></a>

- *Type:* bool | cdktn.IResolvable

Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets.

If enabled, then you must specify the unregistered instances (by instance ID) when you register a task with the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}

---

##### `cutoff`<sup>Required</sup> <a name="cutoff" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.cutoff"></a>

- *Type:* typing.Union[int, float]

The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.duration"></a>

- *Type:* typing.Union[int, float]

The duration of the maintenance window in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.name"></a>

- *Type:* str

The name of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#name SsmMaintenanceWindow#name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.schedule"></a>

- *Type:* str

The schedule of the maintenance window in the form of a cron or rate expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.description"></a>

- *Type:* str

A description of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#description SsmMaintenanceWindow#description}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.endDate"></a>

- *Type:* str

The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}

---

##### `schedule_offset`<sup>Optional</sup> <a name="schedule_offset" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scheduleOffset"></a>

- *Type:* typing.Union[int, float]

The number of days to wait to run a maintenance window after the scheduled cron expression date and time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}

---

##### `schedule_timezone`<sup>Optional</sup> <a name="schedule_timezone" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scheduleTimezone"></a>

- *Type:* str

The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.startDate"></a>

- *Type:* str

The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active.

StartDate allows you to delay activation of the maintenance window until the specified future date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>]

Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs).

Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset">reset_schedule_offset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone">reset_schedule_timezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate">reset_start_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SsmMaintenanceWindowTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_schedule_offset` <a name="reset_schedule_offset" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset"></a>

```python
def reset_schedule_offset() -> None
```

##### `reset_schedule_timezone` <a name="reset_schedule_timezone" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone"></a>

```python
def reset_schedule_timezone() -> None
```

##### `reset_start_date` <a name="reset_start_date" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate"></a>

```python
def reset_start_date() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsmMaintenanceWindow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window

ssmMaintenanceWindow.SsmMaintenanceWindow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window

ssmMaintenanceWindow.SsmMaintenanceWindow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window

ssmMaintenanceWindow.SsmMaintenanceWindow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window

ssmMaintenanceWindow.SsmMaintenanceWindow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsmMaintenanceWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmMaintenanceWindow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList">SsmMaintenanceWindowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.windowId">window_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput">allow_unassociated_targets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput">cutoff_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput">schedule_offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput">schedule_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets">allow_unassociated_targets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff">cutoff</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset">schedule_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone">schedule_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags"></a>

```python
tags: SsmMaintenanceWindowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList">SsmMaintenanceWindowTagsList</a>

---

##### `window_id`<sup>Required</sup> <a name="window_id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.windowId"></a>

```python
window_id: str
```

- *Type:* str

---

##### `allow_unassociated_targets_input`<sup>Optional</sup> <a name="allow_unassociated_targets_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput"></a>

```python
allow_unassociated_targets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cutoff_input`<sup>Optional</sup> <a name="cutoff_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput"></a>

```python
cutoff_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `schedule_offset_input`<sup>Optional</sup> <a name="schedule_offset_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput"></a>

```python
schedule_offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_timezone_input`<sup>Optional</sup> <a name="schedule_timezone_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput"></a>

```python
schedule_timezone_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SsmMaintenanceWindowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>]

---

##### `allow_unassociated_targets`<sup>Required</sup> <a name="allow_unassociated_targets" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets"></a>

```python
allow_unassociated_targets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cutoff`<sup>Required</sup> <a name="cutoff" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff"></a>

```python
cutoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `schedule_offset`<sup>Required</sup> <a name="schedule_offset" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset"></a>

```python
schedule_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_timezone`<sup>Required</sup> <a name="schedule_timezone" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone"></a>

```python
schedule_timezone: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowConfig <a name="SsmMaintenanceWindowConfig" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window

ssmMaintenanceWindow.SsmMaintenanceWindowConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allow_unassociated_targets: bool | IResolvable,
  cutoff: typing.Union[int, float],
  duration: typing.Union[int, float],
  name: str,
  schedule: str,
  description: str = None,
  end_date: str = None,
  schedule_offset: typing.Union[int, float] = None,
  schedule_timezone: str = None,
  start_date: str = None,
  tags: IResolvable | typing.List[SsmMaintenanceWindowTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets">allow_unassociated_targets</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff">cutoff</a></code> | <code>typing.Union[int, float]</code> | The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | The duration of the maintenance window in hours. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name">name</a></code> | <code>str</code> | The name of the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule">schedule</a></code> | <code>str</code> | The schedule of the maintenance window in the form of a cron or rate expression. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description">description</a></code> | <code>str</code> | A description of the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate">end_date</a></code> | <code>str</code> | The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset">schedule_offset</a></code> | <code>typing.Union[int, float]</code> | The number of days to wait to run a maintenance window after the scheduled cron expression date and time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone">schedule_timezone</a></code> | <code>str</code> | The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate">start_date</a></code> | <code>str</code> | The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>]</code> | Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allow_unassociated_targets`<sup>Required</sup> <a name="allow_unassociated_targets" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets"></a>

```python
allow_unassociated_targets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets.

If enabled, then you must specify the unregistered instances (by instance ID) when you register a task with the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}

---

##### `cutoff`<sup>Required</sup> <a name="cutoff" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff"></a>

```python
cutoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration of the maintenance window in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#name SsmMaintenanceWindow#name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

The schedule of the maintenance window in the form of a cron or rate expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#description SsmMaintenanceWindow#description}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}

---

##### `schedule_offset`<sup>Optional</sup> <a name="schedule_offset" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset"></a>

```python
schedule_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days to wait to run a maintenance window after the scheduled cron expression date and time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}

---

##### `schedule_timezone`<sup>Optional</sup> <a name="schedule_timezone" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone"></a>

```python
schedule_timezone: str
```

- *Type:* str

The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active.

StartDate allows you to delay activation of the maintenance window until the specified future date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SsmMaintenanceWindowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>]

Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs).

Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}

---

### SsmMaintenanceWindowTags <a name="SsmMaintenanceWindowTags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window

ssmMaintenanceWindow.SsmMaintenanceWindowTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.key">key</a></code> | <code>str</code> | The name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.key"></a>

```python
key: str
```

- *Type:* str

The name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#key SsmMaintenanceWindow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_maintenance_window#value SsmMaintenanceWindow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmMaintenanceWindowTagsList <a name="SsmMaintenanceWindowTagsList" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window

ssmMaintenanceWindow.SsmMaintenanceWindowTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmMaintenanceWindowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmMaintenanceWindowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>]

---


### SsmMaintenanceWindowTagsOutputReference <a name="SsmMaintenanceWindowTagsOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_maintenance_window

ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmMaintenanceWindowTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>

---



