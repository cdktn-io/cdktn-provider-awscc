# `logsScheduledQuery` Submodule <a name="`logsScheduledQuery` Submodule" id="@cdktn/provider-awscc.logsScheduledQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsScheduledQuery <a name="LogsScheduledQuery" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query awscc_logs_scheduled_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQuery(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  execution_role_arn: str,
  name: str,
  query_language: str,
  query_string: str,
  schedule_expression: str,
  description: str = None,
  destination_configuration: LogsScheduledQueryDestinationConfiguration = None,
  log_group_identifiers: typing.List[str] = None,
  schedule_end_time: typing.Union[int, float] = None,
  schedule_start_time: typing.Union[int, float] = None,
  start_time_offset: typing.Union[int, float] = None,
  state: str = None,
  tags: IResolvable | typing.List[LogsScheduledQueryTags] = None,
  timezone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#execution_role_arn LogsScheduledQuery#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#name LogsScheduledQuery#name}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.queryLanguage">query_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_language LogsScheduledQuery#query_language}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.queryString">query_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_string LogsScheduledQuery#query_string}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_expression LogsScheduledQuery#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#description LogsScheduledQuery#description}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.destinationConfiguration">destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#destination_configuration LogsScheduledQuery#destination_configuration}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.logGroupIdentifiers">log_group_identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#log_group_identifiers LogsScheduledQuery#log_group_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scheduleEndTime">schedule_end_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_end_time LogsScheduledQuery#schedule_end_time}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scheduleStartTime">schedule_start_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_start_time LogsScheduledQuery#schedule_start_time}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.startTimeOffset">start_time_offset</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#start_time_offset LogsScheduledQuery#start_time_offset}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#state LogsScheduledQuery#state}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#tags LogsScheduledQuery#tags}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#timezone LogsScheduledQuery#timezone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#execution_role_arn LogsScheduledQuery#execution_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#name LogsScheduledQuery#name}.

---

##### `query_language`<sup>Required</sup> <a name="query_language" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.queryLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_language LogsScheduledQuery#query_language}.

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.queryString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_string LogsScheduledQuery#query_string}.

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scheduleExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_expression LogsScheduledQuery#schedule_expression}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#description LogsScheduledQuery#description}.

---

##### `destination_configuration`<sup>Optional</sup> <a name="destination_configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.destinationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#destination_configuration LogsScheduledQuery#destination_configuration}.

---

##### `log_group_identifiers`<sup>Optional</sup> <a name="log_group_identifiers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.logGroupIdentifiers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#log_group_identifiers LogsScheduledQuery#log_group_identifiers}.

---

##### `schedule_end_time`<sup>Optional</sup> <a name="schedule_end_time" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scheduleEndTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_end_time LogsScheduledQuery#schedule_end_time}.

---

##### `schedule_start_time`<sup>Optional</sup> <a name="schedule_start_time" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.scheduleStartTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_start_time LogsScheduledQuery#schedule_start_time}.

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.startTimeOffset"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#start_time_offset LogsScheduledQuery#start_time_offset}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#state LogsScheduledQuery#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#tags LogsScheduledQuery#tags}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.Initializer.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#timezone LogsScheduledQuery#timezone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putDestinationConfiguration">put_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDestinationConfiguration">reset_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetLogGroupIdentifiers">reset_log_group_identifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleEndTime">reset_schedule_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleStartTime">reset_schedule_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_configuration` <a name="put_destination_configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putDestinationConfiguration"></a>

```python
def put_destination_configuration(
  s3_configuration: LogsScheduledQueryDestinationConfigurationS3Configuration = None
) -> None
```

###### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putDestinationConfiguration.parameter.s3Configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#s3_configuration LogsScheduledQuery#s3_configuration}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LogsScheduledQueryTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_configuration` <a name="reset_destination_configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetDestinationConfiguration"></a>

```python
def reset_destination_configuration() -> None
```

##### `reset_log_group_identifiers` <a name="reset_log_group_identifiers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetLogGroupIdentifiers"></a>

```python
def reset_log_group_identifiers() -> None
```

##### `reset_schedule_end_time` <a name="reset_schedule_end_time" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleEndTime"></a>

```python
def reset_schedule_end_time() -> None
```

##### `reset_schedule_start_time` <a name="reset_schedule_start_time" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetScheduleStartTime"></a>

```python
def reset_schedule_start_time() -> None
```

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.resetTimezone"></a>

```python
def reset_timezone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LogsScheduledQuery resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isConstruct"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQuery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformElement"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformResource"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQuery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQuery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LogsScheduledQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogsScheduledQuery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogsScheduledQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsScheduledQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfiguration">destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastExecutionStatus">last_execution_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastTriggeredTime">last_triggered_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastUpdatedTime">last_updated_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduledQueryArn">scheduled_query_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList">LogsScheduledQueryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfigurationInput">destination_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiersInput">log_group_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguageInput">query_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryStringInput">query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTimeInput">schedule_end_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTimeInput">schedule_start_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiers">log_group_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguage">query_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTime">schedule_end_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTime">schedule_start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffset">start_time_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destination_configuration`<sup>Required</sup> <a name="destination_configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfiguration"></a>

```python
destination_configuration: LogsScheduledQueryDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_execution_status`<sup>Required</sup> <a name="last_execution_status" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastExecutionStatus"></a>

```python
last_execution_status: str
```

- *Type:* str

---

##### `last_triggered_time`<sup>Required</sup> <a name="last_triggered_time" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastTriggeredTime"></a>

```python
last_triggered_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.lastUpdatedTime"></a>

```python
last_updated_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduled_query_arn`<sup>Required</sup> <a name="scheduled_query_arn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduledQueryArn"></a>

```python
scheduled_query_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tags"></a>

```python
tags: LogsScheduledQueryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList">LogsScheduledQueryTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_configuration_input`<sup>Optional</sup> <a name="destination_configuration_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.destinationConfigurationInput"></a>

```python
destination_configuration_input: IResolvable | LogsScheduledQueryDestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a>

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `log_group_identifiers_input`<sup>Optional</sup> <a name="log_group_identifiers_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiersInput"></a>

```python
log_group_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_language_input`<sup>Optional</sup> <a name="query_language_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguageInput"></a>

```python
query_language_input: str
```

- *Type:* str

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryStringInput"></a>

```python
query_string_input: str
```

- *Type:* str

---

##### `schedule_end_time_input`<sup>Optional</sup> <a name="schedule_end_time_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTimeInput"></a>

```python
schedule_end_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_start_time_input`<sup>Optional</sup> <a name="schedule_start_time_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTimeInput"></a>

```python
schedule_start_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LogsScheduledQueryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `log_group_identifiers`<sup>Required</sup> <a name="log_group_identifiers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.logGroupIdentifiers"></a>

```python
log_group_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_language`<sup>Required</sup> <a name="query_language" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryLanguage"></a>

```python
query_language: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `schedule_end_time`<sup>Required</sup> <a name="schedule_end_time" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleEndTime"></a>

```python
schedule_end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_start_time`<sup>Required</sup> <a name="schedule_start_time" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.scheduleStartTime"></a>

```python
schedule_start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.startTimeOffset"></a>

```python
start_time_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogsScheduledQueryConfig <a name="LogsScheduledQueryConfig" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQueryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  execution_role_arn: str,
  name: str,
  query_language: str,
  query_string: str,
  schedule_expression: str,
  description: str = None,
  destination_configuration: LogsScheduledQueryDestinationConfiguration = None,
  log_group_identifiers: typing.List[str] = None,
  schedule_end_time: typing.Union[int, float] = None,
  schedule_start_time: typing.Union[int, float] = None,
  start_time_offset: typing.Union[int, float] = None,
  state: str = None,
  tags: IResolvable | typing.List[LogsScheduledQueryTags] = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#execution_role_arn LogsScheduledQuery#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#name LogsScheduledQuery#name}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryLanguage">query_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_language LogsScheduledQuery#query_language}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryString">query_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_string LogsScheduledQuery#query_string}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_expression LogsScheduledQuery#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#description LogsScheduledQuery#description}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.destinationConfiguration">destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#destination_configuration LogsScheduledQuery#destination_configuration}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.logGroupIdentifiers">log_group_identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#log_group_identifiers LogsScheduledQuery#log_group_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleEndTime">schedule_end_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_end_time LogsScheduledQuery#schedule_end_time}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleStartTime">schedule_start_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_start_time LogsScheduledQuery#schedule_start_time}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.startTimeOffset">start_time_offset</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#start_time_offset LogsScheduledQuery#start_time_offset}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#state LogsScheduledQuery#state}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#tags LogsScheduledQuery#tags}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#timezone LogsScheduledQuery#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#execution_role_arn LogsScheduledQuery#execution_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#name LogsScheduledQuery#name}.

---

##### `query_language`<sup>Required</sup> <a name="query_language" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryLanguage"></a>

```python
query_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_language LogsScheduledQuery#query_language}.

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#query_string LogsScheduledQuery#query_string}.

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_expression LogsScheduledQuery#schedule_expression}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#description LogsScheduledQuery#description}.

---

##### `destination_configuration`<sup>Optional</sup> <a name="destination_configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.destinationConfiguration"></a>

```python
destination_configuration: LogsScheduledQueryDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#destination_configuration LogsScheduledQuery#destination_configuration}.

---

##### `log_group_identifiers`<sup>Optional</sup> <a name="log_group_identifiers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.logGroupIdentifiers"></a>

```python
log_group_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#log_group_identifiers LogsScheduledQuery#log_group_identifiers}.

---

##### `schedule_end_time`<sup>Optional</sup> <a name="schedule_end_time" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleEndTime"></a>

```python
schedule_end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_end_time LogsScheduledQuery#schedule_end_time}.

---

##### `schedule_start_time`<sup>Optional</sup> <a name="schedule_start_time" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.scheduleStartTime"></a>

```python
schedule_start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#schedule_start_time LogsScheduledQuery#schedule_start_time}.

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.startTimeOffset"></a>

```python
start_time_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#start_time_offset LogsScheduledQuery#start_time_offset}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#state LogsScheduledQuery#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LogsScheduledQueryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#tags LogsScheduledQuery#tags}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#timezone LogsScheduledQuery#timezone}.

---

### LogsScheduledQueryDestinationConfiguration <a name="LogsScheduledQueryDestinationConfiguration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQueryDestinationConfiguration(
  s3_configuration: LogsScheduledQueryDestinationConfigurationS3Configuration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#s3_configuration LogsScheduledQuery#s3_configuration}. |

---

##### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration.property.s3Configuration"></a>

```python
s3_configuration: LogsScheduledQueryDestinationConfigurationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#s3_configuration LogsScheduledQuery#s3_configuration}.

---

### LogsScheduledQueryDestinationConfigurationS3Configuration <a name="LogsScheduledQueryDestinationConfigurationS3Configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration(
  destination_identifier: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.destinationIdentifier">destination_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#destination_identifier LogsScheduledQuery#destination_identifier}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#role_arn LogsScheduledQuery#role_arn}. |

---

##### `destination_identifier`<sup>Optional</sup> <a name="destination_identifier" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.destinationIdentifier"></a>

```python
destination_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#destination_identifier LogsScheduledQuery#destination_identifier}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#role_arn LogsScheduledQuery#role_arn}.

---

### LogsScheduledQueryTags <a name="LogsScheduledQueryTags" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.Initializer"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQueryTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#key LogsScheduledQuery#key}. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#value LogsScheduledQuery#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#key LogsScheduledQuery#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#value LogsScheduledQuery#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogsScheduledQueryDestinationConfigurationOutputReference <a name="LogsScheduledQueryDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.putS3Configuration">put_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resetS3Configuration">reset_s3_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_configuration` <a name="put_s3_configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.putS3Configuration"></a>

```python
def put_s3_configuration(
  destination_identifier: str = None,
  role_arn: str = None
) -> None
```

###### `destination_identifier`<sup>Optional</sup> <a name="destination_identifier" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.putS3Configuration.parameter.destinationIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#destination_identifier LogsScheduledQuery#destination_identifier}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.putS3Configuration.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_scheduled_query#role_arn LogsScheduledQuery#role_arn}.

---

##### `reset_s3_configuration` <a name="reset_s3_configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.resetS3Configuration"></a>

```python
def reset_s3_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3ConfigurationInput">s3_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_configuration`<sup>Required</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3Configuration"></a>

```python
s3_configuration: LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference">LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference</a>

---

##### `s3_configuration_input`<sup>Optional</sup> <a name="s3_configuration_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.s3ConfigurationInput"></a>

```python
s3_configuration_input: IResolvable | LogsScheduledQueryDestinationConfigurationS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LogsScheduledQueryDestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfiguration">LogsScheduledQueryDestinationConfiguration</a>

---


### LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference <a name="LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetDestinationIdentifier">reset_destination_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_identifier` <a name="reset_destination_identifier" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetDestinationIdentifier"></a>

```python
def reset_destination_identifier() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifierInput">destination_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifier">destination_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_identifier_input`<sup>Optional</sup> <a name="destination_identifier_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifierInput"></a>

```python
destination_identifier_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `destination_identifier`<sup>Required</sup> <a name="destination_identifier" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifier"></a>

```python
destination_identifier: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LogsScheduledQueryDestinationConfigurationS3Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryDestinationConfigurationS3Configuration">LogsScheduledQueryDestinationConfigurationS3Configuration</a>

---


### LogsScheduledQueryTagsList <a name="LogsScheduledQueryTagsList" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQueryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsScheduledQueryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LogsScheduledQueryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>]

---


### LogsScheduledQueryTagsOutputReference <a name="LogsScheduledQueryTagsOutputReference" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import logs_scheduled_query

logsScheduledQuery.LogsScheduledQueryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LogsScheduledQueryTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsScheduledQuery.LogsScheduledQueryTags">LogsScheduledQueryTags</a>

---



