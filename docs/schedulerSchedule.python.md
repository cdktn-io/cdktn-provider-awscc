# `schedulerSchedule` Submodule <a name="`schedulerSchedule` Submodule" id="@cdktn/provider-awscc.schedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchedulerSchedule <a name="SchedulerSchedule" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule awscc_scheduler_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerSchedule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  flexible_time_window: SchedulerScheduleFlexibleTimeWindow,
  schedule_expression: str,
  target: SchedulerScheduleTarget,
  description: str = None,
  end_date: str = None,
  group_name: str = None,
  kms_key_arn: str = None,
  name: str = None,
  schedule_expression_timezone: str = None,
  start_date: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.flexibleTimeWindow">flexible_time_window</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | Flexible time window allows configuration of a window within which a schedule can be invoked. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpression">schedule_expression</a></code> | <code>str</code> | The scheduling expression. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | The schedule target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | The date, in UTC, before which the schedule can invoke its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.groupName">group_name</a></code> | <code>str</code> | The name of the schedule group to associate with this schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN for a KMS Key that will be used to encrypt customer data. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | The timezone in which the scheduling expression is evaluated. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.startDate">start_date</a></code> | <code>str</code> | The date, in UTC, after which the schedule can begin invoking its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.state">state</a></code> | <code>str</code> | Specifies whether the schedule is enabled or disabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `flexible_time_window`<sup>Required</sup> <a name="flexible_time_window" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.flexibleTimeWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

Flexible time window allows configuration of a window within which a schedule can be invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#flexible_time_window SchedulerSchedule#flexible_time_window}

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpression"></a>

- *Type:* str

The scheduling expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

The schedule target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#target SchedulerSchedule#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.description"></a>

- *Type:* str

The description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#description SchedulerSchedule#description}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.endDate"></a>

- *Type:* str

The date, in UTC, before which the schedule can invoke its target.

Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#end_date SchedulerSchedule#end_date}

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.groupName"></a>

- *Type:* str

The name of the schedule group to associate with this schedule.

If you omit this, the default schedule group is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#group_name SchedulerSchedule#group_name}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN for a KMS Key that will be used to encrypt customer data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}.

---

##### `schedule_expression_timezone`<sup>Optional</sup> <a name="schedule_expression_timezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scheduleExpressionTimezone"></a>

- *Type:* str

The timezone in which the scheduling expression is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.startDate"></a>

- *Type:* str

The date, in UTC, after which the schedule can begin invoking its target.

Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#start_date SchedulerSchedule#start_date}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.state"></a>

- *Type:* str

Specifies whether the schedule is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#state SchedulerSchedule#state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow">put_flexible_time_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetScheduleExpressionTimezone">reset_schedule_expression_timezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetStartDate">reset_start_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_flexible_time_window` <a name="put_flexible_time_window" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow"></a>

```python
def put_flexible_time_window(
  mode: str,
  maximum_window_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow.parameter.mode"></a>

- *Type:* str

Determines whether the schedule is executed within a flexible time window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#mode SchedulerSchedule#mode}

---

###### `maximum_window_in_minutes`<sup>Optional</sup> <a name="maximum_window_in_minutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow.parameter.maximumWindowInMinutes"></a>

- *Type:* typing.Union[int, float]

The maximum time window during which a schedule can be invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#maximum_window_in_minutes SchedulerSchedule#maximum_window_in_minutes}

---

##### `put_target` <a name="put_target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget"></a>

```python
def put_target(
  arn: str,
  role_arn: str,
  dead_letter_config: SchedulerScheduleTargetDeadLetterConfig = None,
  ecs_parameters: SchedulerScheduleTargetEcsParameters = None,
  event_bridge_parameters: SchedulerScheduleTargetEventBridgeParameters = None,
  input: str = None,
  kinesis_parameters: SchedulerScheduleTargetKinesisParameters = None,
  retry_policy: SchedulerScheduleTargetRetryPolicy = None,
  sage_maker_pipeline_parameters: SchedulerScheduleTargetSageMakerPipelineParameters = None,
  sqs_parameters: SchedulerScheduleTargetSqsParameters = None
) -> None
```

###### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.arn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#role_arn SchedulerSchedule#role_arn}

---

###### `dead_letter_config`<sup>Optional</sup> <a name="dead_letter_config" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.deadLetterConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

A DeadLetterConfig object that contains information about a dead-letter queue configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#dead_letter_config SchedulerSchedule#dead_letter_config}

---

###### `ecs_parameters`<sup>Optional</sup> <a name="ecs_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.ecsParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

The custom parameters to be used when the target is an Amazon ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#ecs_parameters SchedulerSchedule#ecs_parameters}

---

###### `event_bridge_parameters`<sup>Optional</sup> <a name="event_bridge_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.eventBridgeParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

EventBridge PutEvent predefined target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#event_bridge_parameters SchedulerSchedule#event_bridge_parameters}

---

###### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.input"></a>

- *Type:* str

The text, or well-formed JSON, passed to the target.

If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#input SchedulerSchedule#input}

---

###### `kinesis_parameters`<sup>Optional</sup> <a name="kinesis_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.kinesisParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#kinesis_parameters SchedulerSchedule#kinesis_parameters}

---

###### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

A RetryPolicy object that includes information about the retry policy settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#retry_policy SchedulerSchedule#retry_policy}

---

###### `sage_maker_pipeline_parameters`<sup>Optional</sup> <a name="sage_maker_pipeline_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.sageMakerPipelineParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#sage_maker_pipeline_parameters SchedulerSchedule#sage_maker_pipeline_parameters}

---

###### `sqs_parameters`<sup>Optional</sup> <a name="sqs_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.sqsParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

Contains the message group ID to use when the target is a FIFO queue.

If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#sqs_parameters SchedulerSchedule#sqs_parameters}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_group_name` <a name="reset_group_name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_schedule_expression_timezone` <a name="reset_schedule_expression_timezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetScheduleExpressionTimezone"></a>

```python
def reset_schedule_expression_timezone() -> None
```

##### `reset_start_date` <a name="reset_start_date" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetStartDate"></a>

```python
def reset_start_date() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SchedulerSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SchedulerSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SchedulerSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SchedulerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SchedulerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindow">flexible_time_window</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference">SchedulerScheduleFlexibleTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference">SchedulerScheduleTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindowInput">flexible_time_window_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezoneInput">schedule_expression_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.targetInput">target_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `flexible_time_window`<sup>Required</sup> <a name="flexible_time_window" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindow"></a>

```python
flexible_time_window: SchedulerScheduleFlexibleTimeWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference">SchedulerScheduleFlexibleTimeWindowOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.target"></a>

```python
target: SchedulerScheduleTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference">SchedulerScheduleTargetOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `flexible_time_window_input`<sup>Optional</sup> <a name="flexible_time_window_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindowInput"></a>

```python
flexible_time_window_input: IResolvable | SchedulerScheduleFlexibleTimeWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_expression_timezone_input`<sup>Optional</sup> <a name="schedule_expression_timezone_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezoneInput"></a>

```python
schedule_expression_timezone_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.targetInput"></a>

```python
target_input: IResolvable | SchedulerScheduleTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_expression_timezone`<sup>Required</sup> <a name="schedule_expression_timezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezone"></a>

```python
schedule_expression_timezone: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SchedulerScheduleConfig <a name="SchedulerScheduleConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  flexible_time_window: SchedulerScheduleFlexibleTimeWindow,
  schedule_expression: str,
  target: SchedulerScheduleTarget,
  description: str = None,
  end_date: str = None,
  group_name: str = None,
  kms_key_arn: str = None,
  name: str = None,
  schedule_expression_timezone: str = None,
  start_date: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.flexibleTimeWindow">flexible_time_window</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | Flexible time window allows configuration of a window within which a schedule can be invoked. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | The scheduling expression. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | The schedule target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.description">description</a></code> | <code>str</code> | The description of the schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.endDate">end_date</a></code> | <code>str</code> | The date, in UTC, before which the schedule can invoke its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.groupName">group_name</a></code> | <code>str</code> | The name of the schedule group to associate with this schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN for a KMS Key that will be used to encrypt customer data. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | The timezone in which the scheduling expression is evaluated. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.startDate">start_date</a></code> | <code>str</code> | The date, in UTC, after which the schedule can begin invoking its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.state">state</a></code> | <code>str</code> | Specifies whether the schedule is enabled or disabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `flexible_time_window`<sup>Required</sup> <a name="flexible_time_window" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.flexibleTimeWindow"></a>

```python
flexible_time_window: SchedulerScheduleFlexibleTimeWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

Flexible time window allows configuration of a window within which a schedule can be invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#flexible_time_window SchedulerSchedule#flexible_time_window}

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

The scheduling expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.target"></a>

```python
target: SchedulerScheduleTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

The schedule target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#target SchedulerSchedule#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#description SchedulerSchedule#description}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

The date, in UTC, before which the schedule can invoke its target.

Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#end_date SchedulerSchedule#end_date}

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

The name of the schedule group to associate with this schedule.

If you omit this, the default schedule group is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#group_name SchedulerSchedule#group_name}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN for a KMS Key that will be used to encrypt customer data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}.

---

##### `schedule_expression_timezone`<sup>Optional</sup> <a name="schedule_expression_timezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpressionTimezone"></a>

```python
schedule_expression_timezone: str
```

- *Type:* str

The timezone in which the scheduling expression is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

The date, in UTC, after which the schedule can begin invoking its target.

Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#start_date SchedulerSchedule#start_date}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Specifies whether the schedule is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#state SchedulerSchedule#state}

---

### SchedulerScheduleFlexibleTimeWindow <a name="SchedulerScheduleFlexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleFlexibleTimeWindow(
  mode: str,
  maximum_window_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.mode">mode</a></code> | <code>str</code> | Determines whether the schedule is executed within a flexible time window. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.maximumWindowInMinutes">maximum_window_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The maximum time window during which a schedule can be invoked. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.mode"></a>

```python
mode: str
```

- *Type:* str

Determines whether the schedule is executed within a flexible time window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#mode SchedulerSchedule#mode}

---

##### `maximum_window_in_minutes`<sup>Optional</sup> <a name="maximum_window_in_minutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.maximumWindowInMinutes"></a>

```python
maximum_window_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time window during which a schedule can be invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#maximum_window_in_minutes SchedulerSchedule#maximum_window_in_minutes}

---

### SchedulerScheduleTarget <a name="SchedulerScheduleTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTarget(
  arn: str,
  role_arn: str,
  dead_letter_config: SchedulerScheduleTargetDeadLetterConfig = None,
  ecs_parameters: SchedulerScheduleTargetEcsParameters = None,
  event_bridge_parameters: SchedulerScheduleTargetEventBridgeParameters = None,
  input: str = None,
  kinesis_parameters: SchedulerScheduleTargetKinesisParameters = None,
  retry_policy: SchedulerScheduleTargetRetryPolicy = None,
  sage_maker_pipeline_parameters: SchedulerScheduleTargetSageMakerPipelineParameters = None,
  sqs_parameters: SchedulerScheduleTargetSqsParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.arn">arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | A DeadLetterConfig object that contains information about a dead-letter queue configuration. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.ecsParameters">ecs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | The custom parameters to be used when the target is an Amazon ECS task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.eventBridgeParameters">event_bridge_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a></code> | EventBridge PutEvent predefined target type. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.input">input</a></code> | <code>str</code> | The text, or well-formed JSON, passed to the target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.kinesisParameters">kinesis_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | A RetryPolicy object that includes information about the retry policy settings. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sageMakerPipelineParameters">sage_maker_pipeline_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a></code> | These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sqsParameters">sqs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | Contains the message group ID to use when the target is a FIFO queue. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.arn"></a>

```python
arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#role_arn SchedulerSchedule#role_arn}

---

##### `dead_letter_config`<sup>Optional</sup> <a name="dead_letter_config" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.deadLetterConfig"></a>

```python
dead_letter_config: SchedulerScheduleTargetDeadLetterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

A DeadLetterConfig object that contains information about a dead-letter queue configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#dead_letter_config SchedulerSchedule#dead_letter_config}

---

##### `ecs_parameters`<sup>Optional</sup> <a name="ecs_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.ecsParameters"></a>

```python
ecs_parameters: SchedulerScheduleTargetEcsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

The custom parameters to be used when the target is an Amazon ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#ecs_parameters SchedulerSchedule#ecs_parameters}

---

##### `event_bridge_parameters`<sup>Optional</sup> <a name="event_bridge_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.eventBridgeParameters"></a>

```python
event_bridge_parameters: SchedulerScheduleTargetEventBridgeParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

EventBridge PutEvent predefined target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#event_bridge_parameters SchedulerSchedule#event_bridge_parameters}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.input"></a>

```python
input: str
```

- *Type:* str

The text, or well-formed JSON, passed to the target.

If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#input SchedulerSchedule#input}

---

##### `kinesis_parameters`<sup>Optional</sup> <a name="kinesis_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.kinesisParameters"></a>

```python
kinesis_parameters: SchedulerScheduleTargetKinesisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#kinesis_parameters SchedulerSchedule#kinesis_parameters}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.retryPolicy"></a>

```python
retry_policy: SchedulerScheduleTargetRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

A RetryPolicy object that includes information about the retry policy settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#retry_policy SchedulerSchedule#retry_policy}

---

##### `sage_maker_pipeline_parameters`<sup>Optional</sup> <a name="sage_maker_pipeline_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sageMakerPipelineParameters"></a>

```python
sage_maker_pipeline_parameters: SchedulerScheduleTargetSageMakerPipelineParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#sage_maker_pipeline_parameters SchedulerSchedule#sage_maker_pipeline_parameters}

---

##### `sqs_parameters`<sup>Optional</sup> <a name="sqs_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sqsParameters"></a>

```python
sqs_parameters: SchedulerScheduleTargetSqsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

Contains the message group ID to use when the target is a FIFO queue.

If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#sqs_parameters SchedulerSchedule#sqs_parameters}

---

### SchedulerScheduleTargetDeadLetterConfig <a name="SchedulerScheduleTargetDeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.property.arn">arn</a></code> | <code>str</code> | The ARN of the SQS queue specified as the target for the dead-letter queue. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

The ARN of the SQS queue specified as the target for the dead-letter queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}

---

### SchedulerScheduleTargetEcsParameters <a name="SchedulerScheduleTargetEcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParameters(
  capacity_provider_strategy: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy] = None,
  enable_ecs_managed_tags: bool | IResolvable = None,
  enable_execute_command: bool | IResolvable = None,
  group: str = None,
  launch_type: str = None,
  network_configuration: SchedulerScheduleTargetEcsParametersNetworkConfiguration = None,
  placement_constraints: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints] = None,
  placement_strategy: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  reference_id: str = None,
  tags: IResolvable | typing.List[typing.Mapping[str]] = None,
  task_count: typing.Union[int, float] = None,
  task_definition_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]</code> | The capacity provider strategy to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable Amazon ECS managed tags for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableExecuteCommand">enable_execute_command</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to enable the execute command functionality for the containers in this task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.group">group</a></code> | <code>str</code> | Specifies an ECS task group for the task. The maximum length is 255 characters. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.launchType">launch_type</a></code> | <code>str</code> | Specifies the launch type on which your task is running. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | This structure specifies the network configuration for an ECS task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementConstraints">placement_constraints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]</code> | An array of placement constraint objects to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementStrategy">placement_strategy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]</code> | The placement strategy objects to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.platformVersion">platform_version</a></code> | <code>str</code> | Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.propagateTags">propagate_tags</a></code> | <code>str</code> | Specifies whether to propagate the tags from the task definition to the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.referenceId">reference_id</a></code> | <code>str</code> | The reference ID to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | The metadata that you apply to the task to help you categorize and organize them. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | The number of tasks to create based on TaskDefinition. The default is 1. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskDefinitionArn">task_definition_arn</a></code> | <code>str</code> | The ARN of the task definition to use if the event target is an Amazon ECS task. |

---

##### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]

The capacity provider strategy to use for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#capacity_provider_strategy SchedulerSchedule#capacity_provider_strategy}

---

##### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable Amazon ECS managed tags for the task.

For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#enable_ecs_managed_tags SchedulerSchedule#enable_ecs_managed_tags}

---

##### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableExecuteCommand"></a>

```python
enable_execute_command: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether or not to enable the execute command functionality for the containers in this task.

If true, this enables execute command functionality on all containers in the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#enable_execute_command SchedulerSchedule#enable_execute_command}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.group"></a>

```python
group: str
```

- *Type:* str

Specifies an ECS task group for the task. The maximum length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#group SchedulerSchedule#group}

---

##### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

Specifies the launch type on which your task is running.

The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#launch_type SchedulerSchedule#launch_type}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.networkConfiguration"></a>

```python
network_configuration: SchedulerScheduleTargetEcsParametersNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

This structure specifies the network configuration for an ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#network_configuration SchedulerSchedule#network_configuration}

---

##### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementConstraints"></a>

```python
placement_constraints: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]

An array of placement constraint objects to use for the task.

You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#placement_constraints SchedulerSchedule#placement_constraints}

---

##### `placement_strategy`<sup>Optional</sup> <a name="placement_strategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementStrategy"></a>

```python
placement_strategy: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]

The placement strategy objects to use for the task.

You can specify a maximum of five strategy rules per task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#placement_strategy SchedulerSchedule#placement_strategy}

---

##### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#platform_version SchedulerSchedule#platform_version}

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

Specifies whether to propagate the tags from the task definition to the task.

If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#propagate_tags SchedulerSchedule#propagate_tags}

---

##### `reference_id`<sup>Optional</sup> <a name="reference_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

The reference ID to use for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#reference_id SchedulerSchedule#reference_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.tags"></a>

```python
tags: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

The metadata that you apply to the task to help you categorize and organize them.

Each tag consists of a key and an optional value, both of which you define. To learn more, see RunTask in the Amazon ECS API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#tags SchedulerSchedule#tags}

---

##### `task_count`<sup>Optional</sup> <a name="task_count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of tasks to create based on TaskDefinition. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#task_count SchedulerSchedule#task_count}

---

##### `task_definition_arn`<sup>Optional</sup> <a name="task_definition_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskDefinitionArn"></a>

```python
task_definition_arn: str
```

- *Type:* str

The ARN of the task definition to use if the event target is an Amazon ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#task_definition_arn SchedulerSchedule#task_definition_arn}

---

### SchedulerScheduleTargetEcsParametersCapacityProviderStrategy <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy(
  base: typing.Union[int, float] = None,
  capacity_provider: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.base">base</a></code> | <code>typing.Union[int, float]</code> | The base value designates how many tasks, at a minimum, to run on the specified capacity provider. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | The short name of the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. |

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The base value designates how many tasks, at a minimum, to run on the specified capacity provider.

Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#base SchedulerSchedule#base}

---

##### `capacity_provider`<sup>Optional</sup> <a name="capacity_provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

The short name of the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#capacity_provider SchedulerSchedule#capacity_provider}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider.

The weight value is taken into consideration after the base value, if defined, is satisfied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#weight SchedulerSchedule#weight}

---

### SchedulerScheduleTargetEcsParametersNetworkConfiguration <a name="SchedulerScheduleTargetEcsParametersNetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration(
  awsvpc_configuration: SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.awsvpcConfiguration">awsvpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a></code> | This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. |

---

##### `awsvpc_configuration`<sup>Optional</sup> <a name="awsvpc_configuration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.awsvpcConfiguration"></a>

```python
awsvpc_configuration: SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used.

This structure is relevant only for ECS tasks that use the awsvpc network mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#awsvpc_configuration SchedulerSchedule#awsvpc_configuration}

---

### SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration(
  assign_public_ip: str = None,
  security_groups: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp">assign_public_ip</a></code> | <code>str</code> | Specifies whether the task's elastic network interface receives a public IP address. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Specifies the security groups associated with the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Specifies the subnets associated with the task. |

---

##### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp"></a>

```python
assign_public_ip: str
```

- *Type:* str

Specifies whether the task's elastic network interface receives a public IP address.

You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#assign_public_ip SchedulerSchedule#assign_public_ip}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the security groups associated with the task.

These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#security_groups SchedulerSchedule#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the subnets associated with the task.

These subnets must all be in the same VPC. You can specify as many as 16 subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#subnets SchedulerSchedule#subnets}

---

### SchedulerScheduleTargetEcsParametersPlacementConstraints <a name="SchedulerScheduleTargetEcsParametersPlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints(
  expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.expression">expression</a></code> | <code>str</code> | A cluster query language expression to apply to the constraint. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.type">type</a></code> | <code>str</code> | The type of constraint. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.expression"></a>

```python
expression: str
```

- *Type:* str

A cluster query language expression to apply to the constraint.

You cannot specify an expression if the constraint type is distinctInstance. To learn more, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#expression SchedulerSchedule#expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.type"></a>

```python
type: str
```

- *Type:* str

The type of constraint.

Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#type SchedulerSchedule#type}

---

### SchedulerScheduleTargetEcsParametersPlacementStrategy <a name="SchedulerScheduleTargetEcsParametersPlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy(
  field: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.field">field</a></code> | <code>str</code> | The field to apply the placement strategy against. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.type">type</a></code> | <code>str</code> | The type of placement strategy. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.field"></a>

```python
field: str
```

- *Type:* str

The field to apply the placement strategy against.

For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#field SchedulerSchedule#field}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.type"></a>

```python
type: str
```

- *Type:* str

The type of placement strategy.

The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#type SchedulerSchedule#type}

---

### SchedulerScheduleTargetEventBridgeParameters <a name="SchedulerScheduleTargetEventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters(
  detail_type: str = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.detailType">detail_type</a></code> | <code>str</code> | Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.source">source</a></code> | <code>str</code> | The source of the event. |

---

##### `detail_type`<sup>Optional</sup> <a name="detail_type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.detailType"></a>

```python
detail_type: str
```

- *Type:* str

Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#detail_type SchedulerSchedule#detail_type}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.source"></a>

```python
source: str
```

- *Type:* str

The source of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#source SchedulerSchedule#source}

---

### SchedulerScheduleTargetKinesisParameters <a name="SchedulerScheduleTargetKinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetKinesisParameters(
  partition_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.property.partitionKey">partition_key</a></code> | <code>str</code> | The custom parameter used as the Kinesis partition key. |

---

##### `partition_key`<sup>Optional</sup> <a name="partition_key" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

The custom parameter used as the Kinesis partition key.

For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#partition_key SchedulerSchedule#partition_key}

---

### SchedulerScheduleTargetRetryPolicy <a name="SchedulerScheduleTargetRetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetRetryPolicy(
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time, in seconds, to continue to make retry attempts. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of retry attempts to make before the request fails. |

---

##### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time, in seconds, to continue to make retry attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#maximum_event_age_in_seconds SchedulerSchedule#maximum_event_age_in_seconds}

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of retry attempts to make before the request fails.

Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the MaximumEventAgeInSeconds is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#maximum_retry_attempts SchedulerSchedule#maximum_retry_attempts}

---

### SchedulerScheduleTargetSageMakerPipelineParameters <a name="SchedulerScheduleTargetSageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters(
  pipeline_parameter_list: IResolvable | typing.List[SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.property.pipelineParameterList">pipeline_parameter_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>]</code> | List of Parameter names and values for SageMaker Model Building Pipeline execution. |

---

##### `pipeline_parameter_list`<sup>Optional</sup> <a name="pipeline_parameter_list" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.property.pipelineParameterList"></a>

```python
pipeline_parameter_list: IResolvable | typing.List[SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>]

List of Parameter names and values for SageMaker Model Building Pipeline execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#pipeline_parameter_list SchedulerSchedule#pipeline_parameter_list}

---

### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.name">name</a></code> | <code>str</code> | Name of parameter to start execution of a SageMaker Model Building Pipeline. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.value">value</a></code> | <code>str</code> | Value of parameter to start execution of a SageMaker Model Building Pipeline. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.name"></a>

```python
name: str
```

- *Type:* str

Name of parameter to start execution of a SageMaker Model Building Pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.value"></a>

```python
value: str
```

- *Type:* str

Value of parameter to start execution of a SageMaker Model Building Pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#value SchedulerSchedule#value}

---

### SchedulerScheduleTargetSqsParameters <a name="SchedulerScheduleTargetSqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSqsParameters(
  message_group_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.property.messageGroupId">message_group_id</a></code> | <code>str</code> | The FIFO message group ID to use as the target. |

---

##### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

The FIFO message group ID to use as the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#message_group_id SchedulerSchedule#message_group_id}

---

## Classes <a name="Classes" id="Classes"></a>

### SchedulerScheduleFlexibleTimeWindowOutputReference <a name="SchedulerScheduleFlexibleTimeWindowOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resetMaximumWindowInMinutes">reset_maximum_window_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_window_in_minutes` <a name="reset_maximum_window_in_minutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resetMaximumWindowInMinutes"></a>

```python
def reset_maximum_window_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutesInput">maximum_window_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes">maximum_window_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_window_in_minutes_input`<sup>Optional</sup> <a name="maximum_window_in_minutes_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutesInput"></a>

```python
maximum_window_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `maximum_window_in_minutes`<sup>Required</sup> <a name="maximum_window_in_minutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes"></a>

```python
maximum_window_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleFlexibleTimeWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

---


### SchedulerScheduleTargetDeadLetterConfigOutputReference <a name="SchedulerScheduleTargetDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetDeadLetterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

---


### SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]

---


### SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetBase">reset_base</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider">reset_capacity_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base` <a name="reset_base" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetBase"></a>

```python
def reset_base() -> None
```

##### `reset_capacity_provider` <a name="reset_capacity_provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider"></a>

```python
def reset_capacity_provider() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.baseInput">base_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_input`<sup>Optional</sup> <a name="base_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.baseInput"></a>

```python
base_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider_input`<sup>Optional</sup> <a name="capacity_provider_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```python
capacity_provider_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetEcsParametersCapacityProviderStrategy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>

---


### SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetAssignPublicIp">reset_assign_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assign_public_ip` <a name="reset_assign_public_ip" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetAssignPublicIp"></a>

```python
def reset_assign_public_ip() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIpInput">assign_public_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assign_public_ip_input`<sup>Optional</sup> <a name="assign_public_ip_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIpInput"></a>

```python
assign_public_ip_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

---


### SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration">put_awsvpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetAwsvpcConfiguration">reset_awsvpc_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_awsvpc_configuration` <a name="put_awsvpc_configuration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration"></a>

```python
def put_awsvpc_configuration(
  assign_public_ip: str = None,
  security_groups: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration.parameter.assignPublicIp"></a>

- *Type:* str

Specifies whether the task's elastic network interface receives a public IP address.

You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#assign_public_ip SchedulerSchedule#assign_public_ip}

---

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Specifies the security groups associated with the task.

These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#security_groups SchedulerSchedule#security_groups}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration.parameter.subnets"></a>

- *Type:* typing.List[str]

Specifies the subnets associated with the task.

These subnets must all be in the same VPC. You can specify as many as 16 subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#subnets SchedulerSchedule#subnets}

---

##### `reset_awsvpc_configuration` <a name="reset_awsvpc_configuration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetAwsvpcConfiguration"></a>

```python
def reset_awsvpc_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfiguration">awsvpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfigurationInput">awsvpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `awsvpc_configuration`<sup>Required</sup> <a name="awsvpc_configuration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfiguration"></a>

```python
awsvpc_configuration: SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference</a>

---

##### `awsvpc_configuration_input`<sup>Optional</sup> <a name="awsvpc_configuration_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfigurationInput"></a>

```python
awsvpc_configuration_input: IResolvable | SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetEcsParametersNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---


### SchedulerScheduleTargetEcsParametersOutputReference <a name="SchedulerScheduleTargetEcsParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy">put_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints">put_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy">put_placement_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetCapacityProviderStrategy">reset_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableEcsManagedTags">reset_enable_ecs_managed_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableExecuteCommand">reset_enable_execute_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetLaunchType">reset_launch_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementConstraints">reset_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementStrategy">reset_placement_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlatformVersion">reset_platform_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPropagateTags">reset_propagate_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetReferenceId">reset_reference_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskCount">reset_task_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskDefinitionArn">reset_task_definition_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_provider_strategy` <a name="put_capacity_provider_strategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy"></a>

```python
def put_capacity_provider_strategy(
  value: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  awsvpc_configuration: SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration = None
) -> None
```

###### `awsvpc_configuration`<sup>Optional</sup> <a name="awsvpc_configuration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration.parameter.awsvpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used.

This structure is relevant only for ECS tasks that use the awsvpc network mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#awsvpc_configuration SchedulerSchedule#awsvpc_configuration}

---

##### `put_placement_constraints` <a name="put_placement_constraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints"></a>

```python
def put_placement_constraints(
  value: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]

---

##### `put_placement_strategy` <a name="put_placement_strategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy"></a>

```python
def put_placement_strategy(
  value: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]

---

##### `reset_capacity_provider_strategy` <a name="reset_capacity_provider_strategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetCapacityProviderStrategy"></a>

```python
def reset_capacity_provider_strategy() -> None
```

##### `reset_enable_ecs_managed_tags` <a name="reset_enable_ecs_managed_tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableEcsManagedTags"></a>

```python
def reset_enable_ecs_managed_tags() -> None
```

##### `reset_enable_execute_command` <a name="reset_enable_execute_command" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableExecuteCommand"></a>

```python
def reset_enable_execute_command() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_launch_type` <a name="reset_launch_type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetLaunchType"></a>

```python
def reset_launch_type() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_placement_constraints` <a name="reset_placement_constraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementConstraints"></a>

```python
def reset_placement_constraints() -> None
```

##### `reset_placement_strategy` <a name="reset_placement_strategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementStrategy"></a>

```python
def reset_placement_strategy() -> None
```

##### `reset_platform_version` <a name="reset_platform_version" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlatformVersion"></a>

```python
def reset_platform_version() -> None
```

##### `reset_propagate_tags` <a name="reset_propagate_tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPropagateTags"></a>

```python
def reset_propagate_tags() -> None
```

##### `reset_reference_id` <a name="reset_reference_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetReferenceId"></a>

```python
def reset_reference_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_task_count` <a name="reset_task_count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskCount"></a>

```python
def reset_task_count() -> None
```

##### `reset_task_definition_arn` <a name="reset_task_definition_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskDefinitionArn"></a>

```python
def reset_task_definition_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints">placement_constraints</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList">SchedulerScheduleTargetEcsParametersPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy">placement_strategy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList">SchedulerScheduleTargetEcsParametersPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategyInput">capacity_provider_strategy_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTagsInput">enable_ecs_managed_tags_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommandInput">enable_execute_command_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchTypeInput">launch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfigurationInput">network_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraintsInput">placement_constraints_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategyInput">placement_strategy_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersionInput">platform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTagsInput">propagate_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceIdInput">reference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCountInput">task_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArnInput">task_definition_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand">enable_execute_command</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchType">launch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags">propagate_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceId">reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn">task_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_provider_strategy`<sup>Required</sup> <a name="capacity_provider_strategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration"></a>

```python
network_configuration: SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a>

---

##### `placement_constraints`<sup>Required</sup> <a name="placement_constraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints"></a>

```python
placement_constraints: SchedulerScheduleTargetEcsParametersPlacementConstraintsList
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList">SchedulerScheduleTargetEcsParametersPlacementConstraintsList</a>

---

##### `placement_strategy`<sup>Required</sup> <a name="placement_strategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy"></a>

```python
placement_strategy: SchedulerScheduleTargetEcsParametersPlacementStrategyList
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList">SchedulerScheduleTargetEcsParametersPlacementStrategyList</a>

---

##### `capacity_provider_strategy_input`<sup>Optional</sup> <a name="capacity_provider_strategy_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategyInput"></a>

```python
capacity_provider_strategy_input: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]

---

##### `enable_ecs_managed_tags_input`<sup>Optional</sup> <a name="enable_ecs_managed_tags_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTagsInput"></a>

```python
enable_ecs_managed_tags_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_execute_command_input`<sup>Optional</sup> <a name="enable_execute_command_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommandInput"></a>

```python
enable_execute_command_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `launch_type_input`<sup>Optional</sup> <a name="launch_type_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchTypeInput"></a>

```python
launch_type_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfigurationInput"></a>

```python
network_configuration_input: IResolvable | SchedulerScheduleTargetEcsParametersNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---

##### `placement_constraints_input`<sup>Optional</sup> <a name="placement_constraints_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraintsInput"></a>

```python
placement_constraints_input: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]

---

##### `placement_strategy_input`<sup>Optional</sup> <a name="placement_strategy_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategyInput"></a>

```python
placement_strategy_input: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]

---

##### `platform_version_input`<sup>Optional</sup> <a name="platform_version_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersionInput"></a>

```python
platform_version_input: str
```

- *Type:* str

---

##### `propagate_tags_input`<sup>Optional</sup> <a name="propagate_tags_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTagsInput"></a>

```python
propagate_tags_input: str
```

- *Type:* str

---

##### `reference_id_input`<sup>Optional</sup> <a name="reference_id_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceIdInput"></a>

```python
reference_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

---

##### `task_count_input`<sup>Optional</sup> <a name="task_count_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCountInput"></a>

```python
task_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_definition_arn_input`<sup>Optional</sup> <a name="task_definition_arn_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArnInput"></a>

```python
task_definition_arn_input: str
```

- *Type:* str

---

##### `enable_ecs_managed_tags`<sup>Required</sup> <a name="enable_ecs_managed_tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_execute_command`<sup>Required</sup> <a name="enable_execute_command" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand"></a>

```python
enable_execute_command: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `launch_type`<sup>Required</sup> <a name="launch_type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `propagate_tags`<sup>Required</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

---

##### `reference_id`<sup>Required</sup> <a name="reference_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tags"></a>

```python
tags: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

---

##### `task_count`<sup>Required</sup> <a name="task_count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_definition_arn`<sup>Required</sup> <a name="task_definition_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn"></a>

```python
task_definition_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetEcsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

---


### SchedulerScheduleTargetEcsParametersPlacementConstraintsList <a name="SchedulerScheduleTargetEcsParametersPlacementConstraintsList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]

---


### SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference <a name="SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetEcsParametersPlacementConstraints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>

---


### SchedulerScheduleTargetEcsParametersPlacementStrategyList <a name="SchedulerScheduleTargetEcsParametersPlacementStrategyList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]

---


### SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference <a name="SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetField">reset_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field` <a name="reset_field" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetField"></a>

```python
def reset_field() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetEcsParametersPlacementStrategy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>

---


### SchedulerScheduleTargetEventBridgeParametersOutputReference <a name="SchedulerScheduleTargetEventBridgeParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetDetailType">reset_detail_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_detail_type` <a name="reset_detail_type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetDetailType"></a>

```python
def reset_detail_type() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailTypeInput">detail_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailType">detail_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detail_type_input`<sup>Optional</sup> <a name="detail_type_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailTypeInput"></a>

```python
detail_type_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `detail_type`<sup>Required</sup> <a name="detail_type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailType"></a>

```python
detail_type: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetEventBridgeParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

---


### SchedulerScheduleTargetKinesisParametersOutputReference <a name="SchedulerScheduleTargetKinesisParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resetPartitionKey">reset_partition_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_partition_key` <a name="reset_partition_key" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resetPartitionKey"></a>

```python
def reset_partition_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKeyInput">partition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey">partition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_key_input`<sup>Optional</sup> <a name="partition_key_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKeyInput"></a>

```python
partition_key_input: str
```

- *Type:* str

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetKinesisParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

---


### SchedulerScheduleTargetOutputReference <a name="SchedulerScheduleTargetOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig">put_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters">put_ecs_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters">put_event_bridge_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters">put_kinesis_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters">put_sage_maker_pipeline_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters">put_sqs_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetDeadLetterConfig">reset_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEcsParameters">reset_ecs_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEventBridgeParameters">reset_event_bridge_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetKinesisParameters">reset_kinesis_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSageMakerPipelineParameters">reset_sage_maker_pipeline_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSqsParameters">reset_sqs_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dead_letter_config` <a name="put_dead_letter_config" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig"></a>

```python
def put_dead_letter_config(
  arn: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig.parameter.arn"></a>

- *Type:* str

The ARN of the SQS queue specified as the target for the dead-letter queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}

---

##### `put_ecs_parameters` <a name="put_ecs_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters"></a>

```python
def put_ecs_parameters(
  capacity_provider_strategy: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersCapacityProviderStrategy] = None,
  enable_ecs_managed_tags: bool | IResolvable = None,
  enable_execute_command: bool | IResolvable = None,
  group: str = None,
  launch_type: str = None,
  network_configuration: SchedulerScheduleTargetEcsParametersNetworkConfiguration = None,
  placement_constraints: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementConstraints] = None,
  placement_strategy: IResolvable | typing.List[SchedulerScheduleTargetEcsParametersPlacementStrategy] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  reference_id: str = None,
  tags: IResolvable | typing.List[typing.Mapping[str]] = None,
  task_count: typing.Union[int, float] = None,
  task_definition_arn: str = None
) -> None
```

###### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.capacityProviderStrategy"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>]

The capacity provider strategy to use for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#capacity_provider_strategy SchedulerSchedule#capacity_provider_strategy}

---

###### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.enableEcsManagedTags"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable Amazon ECS managed tags for the task.

For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#enable_ecs_managed_tags SchedulerSchedule#enable_ecs_managed_tags}

---

###### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.enableExecuteCommand"></a>

- *Type:* bool | cdktn.IResolvable

Whether or not to enable the execute command functionality for the containers in this task.

If true, this enables execute command functionality on all containers in the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#enable_execute_command SchedulerSchedule#enable_execute_command}

---

###### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.group"></a>

- *Type:* str

Specifies an ECS task group for the task. The maximum length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#group SchedulerSchedule#group}

---

###### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.launchType"></a>

- *Type:* str

Specifies the launch type on which your task is running.

The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#launch_type SchedulerSchedule#launch_type}

---

###### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

This structure specifies the network configuration for an ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#network_configuration SchedulerSchedule#network_configuration}

---

###### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.placementConstraints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>]

An array of placement constraint objects to use for the task.

You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#placement_constraints SchedulerSchedule#placement_constraints}

---

###### `placement_strategy`<sup>Optional</sup> <a name="placement_strategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.placementStrategy"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>]

The placement strategy objects to use for the task.

You can specify a maximum of five strategy rules per task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#placement_strategy SchedulerSchedule#placement_strategy}

---

###### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.platformVersion"></a>

- *Type:* str

Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#platform_version SchedulerSchedule#platform_version}

---

###### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.propagateTags"></a>

- *Type:* str

Specifies whether to propagate the tags from the task definition to the task.

If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#propagate_tags SchedulerSchedule#propagate_tags}

---

###### `reference_id`<sup>Optional</sup> <a name="reference_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.referenceId"></a>

- *Type:* str

The reference ID to use for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#reference_id SchedulerSchedule#reference_id}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

The metadata that you apply to the task to help you categorize and organize them.

Each tag consists of a key and an optional value, both of which you define. To learn more, see RunTask in the Amazon ECS API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#tags SchedulerSchedule#tags}

---

###### `task_count`<sup>Optional</sup> <a name="task_count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.taskCount"></a>

- *Type:* typing.Union[int, float]

The number of tasks to create based on TaskDefinition. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#task_count SchedulerSchedule#task_count}

---

###### `task_definition_arn`<sup>Optional</sup> <a name="task_definition_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.taskDefinitionArn"></a>

- *Type:* str

The ARN of the task definition to use if the event target is an Amazon ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#task_definition_arn SchedulerSchedule#task_definition_arn}

---

##### `put_event_bridge_parameters` <a name="put_event_bridge_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters"></a>

```python
def put_event_bridge_parameters(
  detail_type: str = None,
  source: str = None
) -> None
```

###### `detail_type`<sup>Optional</sup> <a name="detail_type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters.parameter.detailType"></a>

- *Type:* str

Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#detail_type SchedulerSchedule#detail_type}

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters.parameter.source"></a>

- *Type:* str

The source of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#source SchedulerSchedule#source}

---

##### `put_kinesis_parameters` <a name="put_kinesis_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters"></a>

```python
def put_kinesis_parameters(
  partition_key: str = None
) -> None
```

###### `partition_key`<sup>Optional</sup> <a name="partition_key" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters.parameter.partitionKey"></a>

- *Type:* str

The custom parameter used as the Kinesis partition key.

For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#partition_key SchedulerSchedule#partition_key}

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy"></a>

```python
def put_retry_policy(
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None
) -> None
```

###### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy.parameter.maximumEventAgeInSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time, in seconds, to continue to make retry attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#maximum_event_age_in_seconds SchedulerSchedule#maximum_event_age_in_seconds}

---

###### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy.parameter.maximumRetryAttempts"></a>

- *Type:* typing.Union[int, float]

The maximum number of retry attempts to make before the request fails.

Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the MaximumEventAgeInSeconds is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#maximum_retry_attempts SchedulerSchedule#maximum_retry_attempts}

---

##### `put_sage_maker_pipeline_parameters` <a name="put_sage_maker_pipeline_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters"></a>

```python
def put_sage_maker_pipeline_parameters(
  pipeline_parameter_list: IResolvable | typing.List[SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct] = None
) -> None
```

###### `pipeline_parameter_list`<sup>Optional</sup> <a name="pipeline_parameter_list" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters.parameter.pipelineParameterList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>]

List of Parameter names and values for SageMaker Model Building Pipeline execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#pipeline_parameter_list SchedulerSchedule#pipeline_parameter_list}

---

##### `put_sqs_parameters` <a name="put_sqs_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters"></a>

```python
def put_sqs_parameters(
  message_group_id: str = None
) -> None
```

###### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters.parameter.messageGroupId"></a>

- *Type:* str

The FIFO message group ID to use as the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/scheduler_schedule#message_group_id SchedulerSchedule#message_group_id}

---

##### `reset_dead_letter_config` <a name="reset_dead_letter_config" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetDeadLetterConfig"></a>

```python
def reset_dead_letter_config() -> None
```

##### `reset_ecs_parameters` <a name="reset_ecs_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEcsParameters"></a>

```python
def reset_ecs_parameters() -> None
```

##### `reset_event_bridge_parameters` <a name="reset_event_bridge_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEventBridgeParameters"></a>

```python
def reset_event_bridge_parameters() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_kinesis_parameters` <a name="reset_kinesis_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetKinesisParameters"></a>

```python
def reset_kinesis_parameters() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_sage_maker_pipeline_parameters` <a name="reset_sage_maker_pipeline_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSageMakerPipelineParameters"></a>

```python
def reset_sage_maker_pipeline_parameters() -> None
```

##### `reset_sqs_parameters` <a name="reset_sqs_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSqsParameters"></a>

```python
def reset_sqs_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference">SchedulerScheduleTargetDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParameters">ecs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference">SchedulerScheduleTargetEcsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParameters">event_bridge_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference">SchedulerScheduleTargetEventBridgeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParameters">kinesis_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference">SchedulerScheduleTargetKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference">SchedulerScheduleTargetRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParameters">sage_maker_pipeline_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference">SchedulerScheduleTargetSageMakerPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParameters">sqs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference">SchedulerScheduleTargetSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfigInput">dead_letter_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParametersInput">ecs_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParametersInput">event_bridge_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParametersInput">kinesis_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicyInput">retry_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParametersInput">sage_maker_pipeline_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParametersInput">sqs_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dead_letter_config`<sup>Required</sup> <a name="dead_letter_config" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfig"></a>

```python
dead_letter_config: SchedulerScheduleTargetDeadLetterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference">SchedulerScheduleTargetDeadLetterConfigOutputReference</a>

---

##### `ecs_parameters`<sup>Required</sup> <a name="ecs_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParameters"></a>

```python
ecs_parameters: SchedulerScheduleTargetEcsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference">SchedulerScheduleTargetEcsParametersOutputReference</a>

---

##### `event_bridge_parameters`<sup>Required</sup> <a name="event_bridge_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParameters"></a>

```python
event_bridge_parameters: SchedulerScheduleTargetEventBridgeParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference">SchedulerScheduleTargetEventBridgeParametersOutputReference</a>

---

##### `kinesis_parameters`<sup>Required</sup> <a name="kinesis_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParameters"></a>

```python
kinesis_parameters: SchedulerScheduleTargetKinesisParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference">SchedulerScheduleTargetKinesisParametersOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicy"></a>

```python
retry_policy: SchedulerScheduleTargetRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference">SchedulerScheduleTargetRetryPolicyOutputReference</a>

---

##### `sage_maker_pipeline_parameters`<sup>Required</sup> <a name="sage_maker_pipeline_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParameters"></a>

```python
sage_maker_pipeline_parameters: SchedulerScheduleTargetSageMakerPipelineParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference">SchedulerScheduleTargetSageMakerPipelineParametersOutputReference</a>

---

##### `sqs_parameters`<sup>Required</sup> <a name="sqs_parameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParameters"></a>

```python
sqs_parameters: SchedulerScheduleTargetSqsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference">SchedulerScheduleTargetSqsParametersOutputReference</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `dead_letter_config_input`<sup>Optional</sup> <a name="dead_letter_config_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfigInput"></a>

```python
dead_letter_config_input: IResolvable | SchedulerScheduleTargetDeadLetterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

---

##### `ecs_parameters_input`<sup>Optional</sup> <a name="ecs_parameters_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParametersInput"></a>

```python
ecs_parameters_input: IResolvable | SchedulerScheduleTargetEcsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

---

##### `event_bridge_parameters_input`<sup>Optional</sup> <a name="event_bridge_parameters_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParametersInput"></a>

```python
event_bridge_parameters_input: IResolvable | SchedulerScheduleTargetEventBridgeParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `kinesis_parameters_input`<sup>Optional</sup> <a name="kinesis_parameters_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParametersInput"></a>

```python
kinesis_parameters_input: IResolvable | SchedulerScheduleTargetKinesisParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicyInput"></a>

```python
retry_policy_input: IResolvable | SchedulerScheduleTargetRetryPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `sage_maker_pipeline_parameters_input`<sup>Optional</sup> <a name="sage_maker_pipeline_parameters_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParametersInput"></a>

```python
sage_maker_pipeline_parameters_input: IResolvable | SchedulerScheduleTargetSageMakerPipelineParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

---

##### `sqs_parameters_input`<sup>Optional</sup> <a name="sqs_parameters_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParametersInput"></a>

```python
sqs_parameters_input: IResolvable | SchedulerScheduleTargetSqsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

---


### SchedulerScheduleTargetRetryPolicyOutputReference <a name="SchedulerScheduleTargetRetryPolicyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds">reset_maximum_event_age_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumRetryAttempts">reset_maximum_retry_attempts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_event_age_in_seconds` <a name="reset_maximum_event_age_in_seconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds"></a>

```python
def reset_maximum_event_age_in_seconds() -> None
```

##### `reset_maximum_retry_attempts` <a name="reset_maximum_retry_attempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumRetryAttempts"></a>

```python
def reset_maximum_retry_attempts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput">maximum_event_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput">maximum_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_event_age_in_seconds_input`<sup>Optional</sup> <a name="maximum_event_age_in_seconds_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput"></a>

```python
maximum_event_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts_input`<sup>Optional</sup> <a name="maximum_retry_attempts_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput"></a>

```python
maximum_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_event_age_in_seconds`<sup>Required</sup> <a name="maximum_event_age_in_seconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts`<sup>Required</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetRetryPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

---


### SchedulerScheduleTargetSageMakerPipelineParametersOutputReference <a name="SchedulerScheduleTargetSageMakerPipelineParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList">put_pipeline_parameter_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resetPipelineParameterList">reset_pipeline_parameter_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pipeline_parameter_list` <a name="put_pipeline_parameter_list" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList"></a>

```python
def put_pipeline_parameter_list(
  value: IResolvable | typing.List[SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>]

---

##### `reset_pipeline_parameter_list` <a name="reset_pipeline_parameter_list" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resetPipelineParameterList"></a>

```python
def reset_pipeline_parameter_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterList">pipeline_parameter_list</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput">pipeline_parameter_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pipeline_parameter_list`<sup>Required</sup> <a name="pipeline_parameter_list" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterList"></a>

```python
pipeline_parameter_list: SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList</a>

---

##### `pipeline_parameter_list_input`<sup>Optional</sup> <a name="pipeline_parameter_list_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput"></a>

```python
pipeline_parameter_list_input: IResolvable | typing.List[SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetSageMakerPipelineParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

---


### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>]

---


### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>

---


### SchedulerScheduleTargetSqsParametersOutputReference <a name="SchedulerScheduleTargetSqsParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import scheduler_schedule

schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resetMessageGroupId">reset_message_group_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message_group_id` <a name="reset_message_group_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resetMessageGroupId"></a>

```python
def reset_message_group_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupIdInput">message_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId">message_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_group_id_input`<sup>Optional</sup> <a name="message_group_id_input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupIdInput"></a>

```python
message_group_id_input: str
```

- *Type:* str

---

##### `message_group_id`<sup>Required</sup> <a name="message_group_id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SchedulerScheduleTargetSqsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

---



