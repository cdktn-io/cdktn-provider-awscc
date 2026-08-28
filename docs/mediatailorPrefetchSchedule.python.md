# `mediatailorPrefetchSchedule` Submodule <a name="`mediatailorPrefetchSchedule` Submodule" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorPrefetchSchedule <a name="MediatailorPrefetchSchedule" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule awscc_mediatailor_prefetch_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchSchedule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  playback_configuration_name: str,
  consumption: MediatailorPrefetchScheduleConsumption = None,
  recurring_prefetch_configuration: MediatailorPrefetchScheduleRecurringPrefetchConfiguration = None,
  retrieval: MediatailorPrefetchScheduleRetrieval = None,
  schedule_type: str = None,
  stream_id: str = None,
  tags: IResolvable | typing.List[MediatailorPrefetchScheduleTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name to assign to the prefetch schedule. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.playbackConfigurationName">playback_configuration_name</a></code> | <code>str</code> | The name of the playback configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.consumption">consumption</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#consumption MediatailorPrefetchSchedule#consumption}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.recurringPrefetchConfiguration">recurring_prefetch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_prefetch_configuration MediatailorPrefetchSchedule#recurring_prefetch_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.retrieval">retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval MediatailorPrefetchSchedule#retrieval}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.scheduleType">schedule_type</a></code> | <code>str</code> | The frequency that MediaTailor creates prefetch schedules. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.streamId">stream_id</a></code> | <code>str</code> | An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>]</code> | The tags assigned to the prefetch schedule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.name"></a>

- *Type:* str

The name to assign to the prefetch schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#name MediatailorPrefetchSchedule#name}

---

##### `playback_configuration_name`<sup>Required</sup> <a name="playback_configuration_name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.playbackConfigurationName"></a>

- *Type:* str

The name of the playback configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#playback_configuration_name MediatailorPrefetchSchedule#playback_configuration_name}

---

##### `consumption`<sup>Optional</sup> <a name="consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.consumption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#consumption MediatailorPrefetchSchedule#consumption}.

---

##### `recurring_prefetch_configuration`<sup>Optional</sup> <a name="recurring_prefetch_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.recurringPrefetchConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_prefetch_configuration MediatailorPrefetchSchedule#recurring_prefetch_configuration}.

---

##### `retrieval`<sup>Optional</sup> <a name="retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.retrieval"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval MediatailorPrefetchSchedule#retrieval}.

---

##### `schedule_type`<sup>Optional</sup> <a name="schedule_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.scheduleType"></a>

- *Type:* str

The frequency that MediaTailor creates prefetch schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#schedule_type MediatailorPrefetchSchedule#schedule_type}

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.streamId"></a>

- *Type:* str

An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#stream_id MediatailorPrefetchSchedule#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>]

The tags assigned to the prefetch schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#tags MediatailorPrefetchSchedule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putConsumption">put_consumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRecurringPrefetchConfiguration">put_recurring_prefetch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRetrieval">put_retrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetConsumption">reset_consumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetRecurringPrefetchConfiguration">reset_recurring_prefetch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetRetrieval">reset_retrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetScheduleType">reset_schedule_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetStreamId">reset_stream_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_consumption` <a name="put_consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putConsumption"></a>

```python
def put_consumption(
  avail_matching_criteria: IResolvable | typing.List[MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria] = None,
  end_time: str = None,
  start_time: str = None
) -> None
```

###### `avail_matching_criteria`<sup>Optional</sup> <a name="avail_matching_criteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putConsumption.parameter.availMatchingCriteria"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>]

If you only want MediaTailor to insert prefetched ads into avails that match specific dynamic variables, set the avail matching criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#avail_matching_criteria MediatailorPrefetchSchedule#avail_matching_criteria}

---

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putConsumption.parameter.endTime"></a>

- *Type:* str

The time when MediaTailor no longer considers the prefetched ads for use in an ad break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putConsumption.parameter.startTime"></a>

- *Type:* str

The time when prefetched ads are considered for use in an ad break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}

---

##### `put_recurring_prefetch_configuration` <a name="put_recurring_prefetch_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRecurringPrefetchConfiguration"></a>

```python
def put_recurring_prefetch_configuration(
  end_time: str = None,
  recurring_consumption: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption = None,
  recurring_retrieval: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval = None,
  start_time: str = None
) -> None
```

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRecurringPrefetchConfiguration.parameter.endTime"></a>

- *Type:* str

The end time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}

---

###### `recurring_consumption`<sup>Optional</sup> <a name="recurring_consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRecurringPrefetchConfiguration.parameter.recurringConsumption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_consumption MediatailorPrefetchSchedule#recurring_consumption}.

---

###### `recurring_retrieval`<sup>Optional</sup> <a name="recurring_retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRecurringPrefetchConfiguration.parameter.recurringRetrieval"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_retrieval MediatailorPrefetchSchedule#recurring_retrieval}.

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRecurringPrefetchConfiguration.parameter.startTime"></a>

- *Type:* str

The start time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}

---

##### `put_retrieval` <a name="put_retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRetrieval"></a>

```python
def put_retrieval(
  dynamic_variables: typing.Mapping[str] = None,
  end_time: str = None,
  start_time: str = None,
  traffic_shaping_retrieval_window: MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow = None,
  traffic_shaping_tps_configuration: MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration = None,
  traffic_shaping_type: str = None
) -> None
```

###### `dynamic_variables`<sup>Optional</sup> <a name="dynamic_variables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRetrieval.parameter.dynamicVariables"></a>

- *Type:* typing.Mapping[str]

The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variables MediatailorPrefetchSchedule#dynamic_variables}

---

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRetrieval.parameter.endTime"></a>

- *Type:* str

The time when prefetch retrieval ends for the ad break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRetrieval.parameter.startTime"></a>

- *Type:* str

The time when prefetch retrievals can start for this break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}

---

###### `traffic_shaping_retrieval_window`<sup>Optional</sup> <a name="traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRetrieval.parameter.trafficShapingRetrievalWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}.

---

###### `traffic_shaping_tps_configuration`<sup>Optional</sup> <a name="traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRetrieval.parameter.trafficShapingTpsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}.

---

###### `traffic_shaping_type`<sup>Optional</sup> <a name="traffic_shaping_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putRetrieval.parameter.trafficShapingType"></a>

- *Type:* str

Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_type MediatailorPrefetchSchedule#traffic_shaping_type}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediatailorPrefetchScheduleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>]

---

##### `reset_consumption` <a name="reset_consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetConsumption"></a>

```python
def reset_consumption() -> None
```

##### `reset_recurring_prefetch_configuration` <a name="reset_recurring_prefetch_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetRecurringPrefetchConfiguration"></a>

```python
def reset_recurring_prefetch_configuration() -> None
```

##### `reset_retrieval` <a name="reset_retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetRetrieval"></a>

```python
def reset_retrieval() -> None
```

##### `reset_schedule_type` <a name="reset_schedule_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetScheduleType"></a>

```python
def reset_schedule_type() -> None
```

##### `reset_stream_id` <a name="reset_stream_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetStreamId"></a>

```python
def reset_stream_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediatailorPrefetchSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isConstruct"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediatailorPrefetchSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediatailorPrefetchSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediatailorPrefetchSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorPrefetchSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.consumption">consumption</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference">MediatailorPrefetchScheduleConsumptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.recurringPrefetchConfiguration">recurring_prefetch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.retrieval">retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference">MediatailorPrefetchScheduleRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList">MediatailorPrefetchScheduleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.consumptionInput">consumption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.playbackConfigurationNameInput">playback_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.recurringPrefetchConfigurationInput">recurring_prefetch_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.retrievalInput">retrieval_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.scheduleTypeInput">schedule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.streamIdInput">stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.playbackConfigurationName">playback_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.scheduleType">schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `consumption`<sup>Required</sup> <a name="consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.consumption"></a>

```python
consumption: MediatailorPrefetchScheduleConsumptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference">MediatailorPrefetchScheduleConsumptionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `recurring_prefetch_configuration`<sup>Required</sup> <a name="recurring_prefetch_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.recurringPrefetchConfiguration"></a>

```python
recurring_prefetch_configuration: MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference</a>

---

##### `retrieval`<sup>Required</sup> <a name="retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.retrieval"></a>

```python
retrieval: MediatailorPrefetchScheduleRetrievalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference">MediatailorPrefetchScheduleRetrievalOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tags"></a>

```python
tags: MediatailorPrefetchScheduleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList">MediatailorPrefetchScheduleTagsList</a>

---

##### `consumption_input`<sup>Optional</sup> <a name="consumption_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.consumptionInput"></a>

```python
consumption_input: IResolvable | MediatailorPrefetchScheduleConsumption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `playback_configuration_name_input`<sup>Optional</sup> <a name="playback_configuration_name_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.playbackConfigurationNameInput"></a>

```python
playback_configuration_name_input: str
```

- *Type:* str

---

##### `recurring_prefetch_configuration_input`<sup>Optional</sup> <a name="recurring_prefetch_configuration_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.recurringPrefetchConfigurationInput"></a>

```python
recurring_prefetch_configuration_input: IResolvable | MediatailorPrefetchScheduleRecurringPrefetchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

---

##### `retrieval_input`<sup>Optional</sup> <a name="retrieval_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.retrievalInput"></a>

```python
retrieval_input: IResolvable | MediatailorPrefetchScheduleRetrieval
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a>

---

##### `schedule_type_input`<sup>Optional</sup> <a name="schedule_type_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.scheduleTypeInput"></a>

```python
schedule_type_input: str
```

- *Type:* str

---

##### `stream_id_input`<sup>Optional</sup> <a name="stream_id_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.streamIdInput"></a>

```python
stream_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediatailorPrefetchScheduleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `playback_configuration_name`<sup>Required</sup> <a name="playback_configuration_name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.playbackConfigurationName"></a>

```python
playback_configuration_name: str
```

- *Type:* str

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorPrefetchScheduleConfig <a name="MediatailorPrefetchScheduleConfig" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  playback_configuration_name: str,
  consumption: MediatailorPrefetchScheduleConsumption = None,
  recurring_prefetch_configuration: MediatailorPrefetchScheduleRecurringPrefetchConfiguration = None,
  retrieval: MediatailorPrefetchScheduleRetrieval = None,
  schedule_type: str = None,
  stream_id: str = None,
  tags: IResolvable | typing.List[MediatailorPrefetchScheduleTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.name">name</a></code> | <code>str</code> | The name to assign to the prefetch schedule. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.playbackConfigurationName">playback_configuration_name</a></code> | <code>str</code> | The name of the playback configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.consumption">consumption</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#consumption MediatailorPrefetchSchedule#consumption}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.recurringPrefetchConfiguration">recurring_prefetch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_prefetch_configuration MediatailorPrefetchSchedule#recurring_prefetch_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.retrieval">retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval MediatailorPrefetchSchedule#retrieval}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.scheduleType">schedule_type</a></code> | <code>str</code> | The frequency that MediaTailor creates prefetch schedules. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.streamId">stream_id</a></code> | <code>str</code> | An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>]</code> | The tags assigned to the prefetch schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name to assign to the prefetch schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#name MediatailorPrefetchSchedule#name}

---

##### `playback_configuration_name`<sup>Required</sup> <a name="playback_configuration_name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.playbackConfigurationName"></a>

```python
playback_configuration_name: str
```

- *Type:* str

The name of the playback configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#playback_configuration_name MediatailorPrefetchSchedule#playback_configuration_name}

---

##### `consumption`<sup>Optional</sup> <a name="consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.consumption"></a>

```python
consumption: MediatailorPrefetchScheduleConsumption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#consumption MediatailorPrefetchSchedule#consumption}.

---

##### `recurring_prefetch_configuration`<sup>Optional</sup> <a name="recurring_prefetch_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.recurringPrefetchConfiguration"></a>

```python
recurring_prefetch_configuration: MediatailorPrefetchScheduleRecurringPrefetchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_prefetch_configuration MediatailorPrefetchSchedule#recurring_prefetch_configuration}.

---

##### `retrieval`<sup>Optional</sup> <a name="retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.retrieval"></a>

```python
retrieval: MediatailorPrefetchScheduleRetrieval
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval MediatailorPrefetchSchedule#retrieval}.

---

##### `schedule_type`<sup>Optional</sup> <a name="schedule_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

The frequency that MediaTailor creates prefetch schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#schedule_type MediatailorPrefetchSchedule#schedule_type}

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#stream_id MediatailorPrefetchSchedule#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediatailorPrefetchScheduleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>]

The tags assigned to the prefetch schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#tags MediatailorPrefetchSchedule#tags}

---

### MediatailorPrefetchScheduleConsumption <a name="MediatailorPrefetchScheduleConsumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption(
  avail_matching_criteria: IResolvable | typing.List[MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria] = None,
  end_time: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.availMatchingCriteria">avail_matching_criteria</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>]</code> | If you only want MediaTailor to insert prefetched ads into avails that match specific dynamic variables, set the avail matching criteria. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.endTime">end_time</a></code> | <code>str</code> | The time when MediaTailor no longer considers the prefetched ads for use in an ad break, as an ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.startTime">start_time</a></code> | <code>str</code> | The time when prefetched ads are considered for use in an ad break, as an ISO 8601 date-time. |

---

##### `avail_matching_criteria`<sup>Optional</sup> <a name="avail_matching_criteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.availMatchingCriteria"></a>

```python
avail_matching_criteria: IResolvable | typing.List[MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>]

If you only want MediaTailor to insert prefetched ads into avails that match specific dynamic variables, set the avail matching criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#avail_matching_criteria MediatailorPrefetchSchedule#avail_matching_criteria}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The time when MediaTailor no longer considers the prefetched ads for use in an ad break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The time when prefetched ads are considered for use in an ad break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}

---

### MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria <a name="MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria(
  dynamic_variable: str = None,
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.property.dynamicVariable">dynamic_variable</a></code> | <code>str</code> | The dynamic variable(s) that MediaTailor should use as avail matching criteria. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.property.operator">operator</a></code> | <code>str</code> | For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison. |

---

##### `dynamic_variable`<sup>Optional</sup> <a name="dynamic_variable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.property.dynamicVariable"></a>

```python
dynamic_variable: str
```

- *Type:* str

The dynamic variable(s) that MediaTailor should use as avail matching criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variable MediatailorPrefetchSchedule#dynamic_variable}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.property.operator"></a>

```python
operator: str
```

- *Type:* str

For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#operator MediatailorPrefetchSchedule#operator}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfiguration <a name="MediatailorPrefetchScheduleRecurringPrefetchConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration(
  end_time: str = None,
  recurring_consumption: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption = None,
  recurring_retrieval: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.endTime">end_time</a></code> | <code>str</code> | The end time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.recurringConsumption">recurring_consumption</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_consumption MediatailorPrefetchSchedule#recurring_consumption}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.recurringRetrieval">recurring_retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_retrieval MediatailorPrefetchSchedule#recurring_retrieval}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.startTime">start_time</a></code> | <code>str</code> | The start time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The end time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}

---

##### `recurring_consumption`<sup>Optional</sup> <a name="recurring_consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.recurringConsumption"></a>

```python
recurring_consumption: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_consumption MediatailorPrefetchSchedule#recurring_consumption}.

---

##### `recurring_retrieval`<sup>Optional</sup> <a name="recurring_retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.recurringRetrieval"></a>

```python
recurring_retrieval: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#recurring_retrieval MediatailorPrefetchSchedule#recurring_retrieval}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The start time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption(
  avail_matching_criteria: IResolvable | typing.List[MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria] = None,
  retrieved_ad_expiration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.property.availMatchingCriteria">avail_matching_criteria</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>]</code> | The configuration for the dynamic variables that determine which ad breaks that MediaTailor inserts prefetched ads in. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.property.retrievedAdExpirationSeconds">retrieved_ad_expiration_seconds</a></code> | <code>typing.Union[int, float]</code> | The number of seconds that an ad is available for insertion after it was prefetched. |

---

##### `avail_matching_criteria`<sup>Optional</sup> <a name="avail_matching_criteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.property.availMatchingCriteria"></a>

```python
avail_matching_criteria: IResolvable | typing.List[MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>]

The configuration for the dynamic variables that determine which ad breaks that MediaTailor inserts prefetched ads in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#avail_matching_criteria MediatailorPrefetchSchedule#avail_matching_criteria}

---

##### `retrieved_ad_expiration_seconds`<sup>Optional</sup> <a name="retrieved_ad_expiration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.property.retrievedAdExpirationSeconds"></a>

```python
retrieved_ad_expiration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds that an ad is available for insertion after it was prefetched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieved_ad_expiration_seconds MediatailorPrefetchSchedule#retrieved_ad_expiration_seconds}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria(
  dynamic_variable: str = None,
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.property.dynamicVariable">dynamic_variable</a></code> | <code>str</code> | The dynamic variable(s) that MediaTailor should use as avail matching criteria. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.property.operator">operator</a></code> | <code>str</code> | For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison. |

---

##### `dynamic_variable`<sup>Optional</sup> <a name="dynamic_variable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.property.dynamicVariable"></a>

```python
dynamic_variable: str
```

- *Type:* str

The dynamic variable(s) that MediaTailor should use as avail matching criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variable MediatailorPrefetchSchedule#dynamic_variable}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.property.operator"></a>

```python
operator: str
```

- *Type:* str

For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#operator MediatailorPrefetchSchedule#operator}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval(
  delay_after_avail_end_seconds: typing.Union[int, float] = None,
  dynamic_variables: typing.Mapping[str] = None,
  traffic_shaping_retrieval_window: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow = None,
  traffic_shaping_tps_configuration: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration = None,
  traffic_shaping_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.delayAfterAvailEndSeconds">delay_after_avail_end_seconds</a></code> | <code>typing.Union[int, float]</code> | The number of seconds that MediaTailor waits after an ad avail before prefetching ads for the next avail. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.dynamicVariables">dynamic_variables</a></code> | <code>typing.Mapping[str]</code> | The dynamic variables to use for substitution during prefetch requests to the ADS. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingRetrievalWindow">traffic_shaping_retrieval_window</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingTpsConfiguration">traffic_shaping_tps_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingType">traffic_shaping_type</a></code> | <code>str</code> | Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time. |

---

##### `delay_after_avail_end_seconds`<sup>Optional</sup> <a name="delay_after_avail_end_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.delayAfterAvailEndSeconds"></a>

```python
delay_after_avail_end_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds that MediaTailor waits after an ad avail before prefetching ads for the next avail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#delay_after_avail_end_seconds MediatailorPrefetchSchedule#delay_after_avail_end_seconds}

---

##### `dynamic_variables`<sup>Optional</sup> <a name="dynamic_variables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.dynamicVariables"></a>

```python
dynamic_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The dynamic variables to use for substitution during prefetch requests to the ADS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variables MediatailorPrefetchSchedule#dynamic_variables}

---

##### `traffic_shaping_retrieval_window`<sup>Optional</sup> <a name="traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingRetrievalWindow"></a>

```python
traffic_shaping_retrieval_window: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}.

---

##### `traffic_shaping_tps_configuration`<sup>Optional</sup> <a name="traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingTpsConfiguration"></a>

```python
traffic_shaping_tps_configuration: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}.

---

##### `traffic_shaping_type`<sup>Optional</sup> <a name="traffic_shaping_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.property.trafficShapingType"></a>

```python
traffic_shaping_type: str
```

- *Type:* str

Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_type MediatailorPrefetchSchedule#traffic_shaping_type}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow(
  retrieval_window_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow.property.retrievalWindowDurationSeconds">retrieval_window_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS. |

---

##### `retrieval_window_duration_seconds`<sup>Optional</sup> <a name="retrieval_window_duration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow.property.retrievalWindowDurationSeconds"></a>

```python
retrieval_window_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval_window_duration_seconds MediatailorPrefetchSchedule#retrieval_window_duration_seconds}

---

### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration(
  peak_concurrent_users: typing.Union[int, float] = None,
  peak_tps: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.property.peakConcurrentUsers">peak_concurrent_users</a></code> | <code>typing.Union[int, float]</code> | The expected peak number of concurrent viewers for your content. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.property.peakTps">peak_tps</a></code> | <code>typing.Union[int, float]</code> | The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle. |

---

##### `peak_concurrent_users`<sup>Optional</sup> <a name="peak_concurrent_users" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.property.peakConcurrentUsers"></a>

```python
peak_concurrent_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The expected peak number of concurrent viewers for your content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_concurrent_users MediatailorPrefetchSchedule#peak_concurrent_users}

---

##### `peak_tps`<sup>Optional</sup> <a name="peak_tps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.property.peakTps"></a>

```python
peak_tps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_tps MediatailorPrefetchSchedule#peak_tps}

---

### MediatailorPrefetchScheduleRetrieval <a name="MediatailorPrefetchScheduleRetrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval(
  dynamic_variables: typing.Mapping[str] = None,
  end_time: str = None,
  start_time: str = None,
  traffic_shaping_retrieval_window: MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow = None,
  traffic_shaping_tps_configuration: MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration = None,
  traffic_shaping_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.dynamicVariables">dynamic_variables</a></code> | <code>typing.Mapping[str]</code> | The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS). |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.endTime">end_time</a></code> | <code>str</code> | The time when prefetch retrieval ends for the ad break, as an ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.startTime">start_time</a></code> | <code>str</code> | The time when prefetch retrievals can start for this break, as an ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingRetrievalWindow">traffic_shaping_retrieval_window</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingTpsConfiguration">traffic_shaping_tps_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingType">traffic_shaping_type</a></code> | <code>str</code> | Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time. |

---

##### `dynamic_variables`<sup>Optional</sup> <a name="dynamic_variables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.dynamicVariables"></a>

```python
dynamic_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variables MediatailorPrefetchSchedule#dynamic_variables}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The time when prefetch retrieval ends for the ad break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The time when prefetch retrievals can start for this break, as an ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}

---

##### `traffic_shaping_retrieval_window`<sup>Optional</sup> <a name="traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingRetrievalWindow"></a>

```python
traffic_shaping_retrieval_window: MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}.

---

##### `traffic_shaping_tps_configuration`<sup>Optional</sup> <a name="traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingTpsConfiguration"></a>

```python
traffic_shaping_tps_configuration: MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}.

---

##### `traffic_shaping_type`<sup>Optional</sup> <a name="traffic_shaping_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval.property.trafficShapingType"></a>

```python
traffic_shaping_type: str
```

- *Type:* str

Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_type MediatailorPrefetchSchedule#traffic_shaping_type}

---

### MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow <a name="MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow(
  retrieval_window_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow.property.retrievalWindowDurationSeconds">retrieval_window_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS. |

---

##### `retrieval_window_duration_seconds`<sup>Optional</sup> <a name="retrieval_window_duration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow.property.retrievalWindowDurationSeconds"></a>

```python
retrieval_window_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval_window_duration_seconds MediatailorPrefetchSchedule#retrieval_window_duration_seconds}

---

### MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration <a name="MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration(
  peak_concurrent_users: typing.Union[int, float] = None,
  peak_tps: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.property.peakConcurrentUsers">peak_concurrent_users</a></code> | <code>typing.Union[int, float]</code> | The expected peak number of concurrent viewers for your content. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.property.peakTps">peak_tps</a></code> | <code>typing.Union[int, float]</code> | The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle. |

---

##### `peak_concurrent_users`<sup>Optional</sup> <a name="peak_concurrent_users" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.property.peakConcurrentUsers"></a>

```python
peak_concurrent_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The expected peak number of concurrent viewers for your content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_concurrent_users MediatailorPrefetchSchedule#peak_concurrent_users}

---

##### `peak_tps`<sup>Optional</sup> <a name="peak_tps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.property.peakTps"></a>

```python
peak_tps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_tps MediatailorPrefetchSchedule#peak_tps}

---

### MediatailorPrefetchScheduleTags <a name="MediatailorPrefetchScheduleTags" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#key MediatailorPrefetchSchedule#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#value MediatailorPrefetchSchedule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#key MediatailorPrefetchSchedule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#value MediatailorPrefetchSchedule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList <a name="MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>]

---


### MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference <a name="MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resetDynamicVariable">reset_dynamic_variable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_variable` <a name="reset_dynamic_variable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resetDynamicVariable"></a>

```python
def reset_dynamic_variable() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariableInput">dynamic_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable">dynamic_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_variable_input`<sup>Optional</sup> <a name="dynamic_variable_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariableInput"></a>

```python
dynamic_variable_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `dynamic_variable`<sup>Required</sup> <a name="dynamic_variable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable"></a>

```python
dynamic_variable: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>

---


### MediatailorPrefetchScheduleConsumptionOutputReference <a name="MediatailorPrefetchScheduleConsumptionOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.putAvailMatchingCriteria">put_avail_matching_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetAvailMatchingCriteria">reset_avail_matching_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avail_matching_criteria` <a name="put_avail_matching_criteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.putAvailMatchingCriteria"></a>

```python
def put_avail_matching_criteria(
  value: IResolvable | typing.List[MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.putAvailMatchingCriteria.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>]

---

##### `reset_avail_matching_criteria` <a name="reset_avail_matching_criteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetAvailMatchingCriteria"></a>

```python
def reset_avail_matching_criteria() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteria">avail_matching_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteriaInput">avail_matching_criteria_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avail_matching_criteria`<sup>Required</sup> <a name="avail_matching_criteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteria"></a>

```python
avail_matching_criteria: MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList</a>

---

##### `avail_matching_criteria_input`<sup>Optional</sup> <a name="avail_matching_criteria_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteriaInput"></a>

```python
avail_matching_criteria_input: IResolvable | typing.List[MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>]

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleConsumption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleConsumption">MediatailorPrefetchScheduleConsumption</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringConsumption">put_recurring_consumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringRetrieval">put_recurring_retrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetRecurringConsumption">reset_recurring_consumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetRecurringRetrieval">reset_recurring_retrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recurring_consumption` <a name="put_recurring_consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringConsumption"></a>

```python
def put_recurring_consumption(
  avail_matching_criteria: IResolvable | typing.List[MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria] = None,
  retrieved_ad_expiration_seconds: typing.Union[int, float] = None
) -> None
```

###### `avail_matching_criteria`<sup>Optional</sup> <a name="avail_matching_criteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringConsumption.parameter.availMatchingCriteria"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>]

The configuration for the dynamic variables that determine which ad breaks that MediaTailor inserts prefetched ads in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#avail_matching_criteria MediatailorPrefetchSchedule#avail_matching_criteria}

---

###### `retrieved_ad_expiration_seconds`<sup>Optional</sup> <a name="retrieved_ad_expiration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringConsumption.parameter.retrievedAdExpirationSeconds"></a>

- *Type:* typing.Union[int, float]

The number of seconds that an ad is available for insertion after it was prefetched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieved_ad_expiration_seconds MediatailorPrefetchSchedule#retrieved_ad_expiration_seconds}

---

##### `put_recurring_retrieval` <a name="put_recurring_retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringRetrieval"></a>

```python
def put_recurring_retrieval(
  delay_after_avail_end_seconds: typing.Union[int, float] = None,
  dynamic_variables: typing.Mapping[str] = None,
  traffic_shaping_retrieval_window: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow = None,
  traffic_shaping_tps_configuration: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration = None,
  traffic_shaping_type: str = None
) -> None
```

###### `delay_after_avail_end_seconds`<sup>Optional</sup> <a name="delay_after_avail_end_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringRetrieval.parameter.delayAfterAvailEndSeconds"></a>

- *Type:* typing.Union[int, float]

The number of seconds that MediaTailor waits after an ad avail before prefetching ads for the next avail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#delay_after_avail_end_seconds MediatailorPrefetchSchedule#delay_after_avail_end_seconds}

---

###### `dynamic_variables`<sup>Optional</sup> <a name="dynamic_variables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringRetrieval.parameter.dynamicVariables"></a>

- *Type:* typing.Mapping[str]

The dynamic variables to use for substitution during prefetch requests to the ADS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variables MediatailorPrefetchSchedule#dynamic_variables}

---

###### `traffic_shaping_retrieval_window`<sup>Optional</sup> <a name="traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringRetrieval.parameter.trafficShapingRetrievalWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}.

---

###### `traffic_shaping_tps_configuration`<sup>Optional</sup> <a name="traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringRetrieval.parameter.trafficShapingTpsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}.

---

###### `traffic_shaping_type`<sup>Optional</sup> <a name="traffic_shaping_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.putRecurringRetrieval.parameter.trafficShapingType"></a>

- *Type:* str

Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_type MediatailorPrefetchSchedule#traffic_shaping_type}

---

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_recurring_consumption` <a name="reset_recurring_consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetRecurringConsumption"></a>

```python
def reset_recurring_consumption() -> None
```

##### `reset_recurring_retrieval` <a name="reset_recurring_retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetRecurringRetrieval"></a>

```python
def reset_recurring_retrieval() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumption">recurring_consumption</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrieval">recurring_retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumptionInput">recurring_consumption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrievalInput">recurring_retrieval_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recurring_consumption`<sup>Required</sup> <a name="recurring_consumption" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumption"></a>

```python
recurring_consumption: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference</a>

---

##### `recurring_retrieval`<sup>Required</sup> <a name="recurring_retrieval" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrieval"></a>

```python
recurring_retrieval: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference</a>

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `recurring_consumption_input`<sup>Optional</sup> <a name="recurring_consumption_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumptionInput"></a>

```python
recurring_consumption_input: IResolvable | MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a>

---

##### `recurring_retrieval_input`<sup>Optional</sup> <a name="recurring_retrieval_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrievalInput"></a>

```python
recurring_retrieval_input: IResolvable | MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleRecurringPrefetchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>]

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resetDynamicVariable">reset_dynamic_variable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_variable` <a name="reset_dynamic_variable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resetDynamicVariable"></a>

```python
def reset_dynamic_variable() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariableInput">dynamic_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable">dynamic_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_variable_input`<sup>Optional</sup> <a name="dynamic_variable_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariableInput"></a>

```python
dynamic_variable_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `dynamic_variable`<sup>Required</sup> <a name="dynamic_variable" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable"></a>

```python
dynamic_variable: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.putAvailMatchingCriteria">put_avail_matching_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resetAvailMatchingCriteria">reset_avail_matching_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resetRetrievedAdExpirationSeconds">reset_retrieved_ad_expiration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avail_matching_criteria` <a name="put_avail_matching_criteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.putAvailMatchingCriteria"></a>

```python
def put_avail_matching_criteria(
  value: IResolvable | typing.List[MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.putAvailMatchingCriteria.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>]

---

##### `reset_avail_matching_criteria` <a name="reset_avail_matching_criteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resetAvailMatchingCriteria"></a>

```python
def reset_avail_matching_criteria() -> None
```

##### `reset_retrieved_ad_expiration_seconds` <a name="reset_retrieved_ad_expiration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resetRetrievedAdExpirationSeconds"></a>

```python
def reset_retrieved_ad_expiration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteria">avail_matching_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteriaInput">avail_matching_criteria_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSecondsInput">retrieved_ad_expiration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSeconds">retrieved_ad_expiration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avail_matching_criteria`<sup>Required</sup> <a name="avail_matching_criteria" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteria"></a>

```python
avail_matching_criteria: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList</a>

---

##### `avail_matching_criteria_input`<sup>Optional</sup> <a name="avail_matching_criteria_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteriaInput"></a>

```python
avail_matching_criteria_input: IResolvable | typing.List[MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>]

---

##### `retrieved_ad_expiration_seconds_input`<sup>Optional</sup> <a name="retrieved_ad_expiration_seconds_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSecondsInput"></a>

```python
retrieved_ad_expiration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retrieved_ad_expiration_seconds`<sup>Required</sup> <a name="retrieved_ad_expiration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSeconds"></a>

```python
retrieved_ad_expiration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingRetrievalWindow">put_traffic_shaping_retrieval_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingTpsConfiguration">put_traffic_shaping_tps_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetDelayAfterAvailEndSeconds">reset_delay_after_avail_end_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetDynamicVariables">reset_dynamic_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingRetrievalWindow">reset_traffic_shaping_retrieval_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingTpsConfiguration">reset_traffic_shaping_tps_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingType">reset_traffic_shaping_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_traffic_shaping_retrieval_window` <a name="put_traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingRetrievalWindow"></a>

```python
def put_traffic_shaping_retrieval_window(
  retrieval_window_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `retrieval_window_duration_seconds`<sup>Optional</sup> <a name="retrieval_window_duration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingRetrievalWindow.parameter.retrievalWindowDurationSeconds"></a>

- *Type:* typing.Union[int, float]

The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval_window_duration_seconds MediatailorPrefetchSchedule#retrieval_window_duration_seconds}

---

##### `put_traffic_shaping_tps_configuration` <a name="put_traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingTpsConfiguration"></a>

```python
def put_traffic_shaping_tps_configuration(
  peak_concurrent_users: typing.Union[int, float] = None,
  peak_tps: typing.Union[int, float] = None
) -> None
```

###### `peak_concurrent_users`<sup>Optional</sup> <a name="peak_concurrent_users" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingTpsConfiguration.parameter.peakConcurrentUsers"></a>

- *Type:* typing.Union[int, float]

The expected peak number of concurrent viewers for your content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_concurrent_users MediatailorPrefetchSchedule#peak_concurrent_users}

---

###### `peak_tps`<sup>Optional</sup> <a name="peak_tps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.putTrafficShapingTpsConfiguration.parameter.peakTps"></a>

- *Type:* typing.Union[int, float]

The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_tps MediatailorPrefetchSchedule#peak_tps}

---

##### `reset_delay_after_avail_end_seconds` <a name="reset_delay_after_avail_end_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetDelayAfterAvailEndSeconds"></a>

```python
def reset_delay_after_avail_end_seconds() -> None
```

##### `reset_dynamic_variables` <a name="reset_dynamic_variables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetDynamicVariables"></a>

```python
def reset_dynamic_variables() -> None
```

##### `reset_traffic_shaping_retrieval_window` <a name="reset_traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingRetrievalWindow"></a>

```python
def reset_traffic_shaping_retrieval_window() -> None
```

##### `reset_traffic_shaping_tps_configuration` <a name="reset_traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingTpsConfiguration"></a>

```python
def reset_traffic_shaping_tps_configuration() -> None
```

##### `reset_traffic_shaping_type` <a name="reset_traffic_shaping_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resetTrafficShapingType"></a>

```python
def reset_traffic_shaping_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindow">traffic_shaping_retrieval_window</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfiguration">traffic_shaping_tps_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSecondsInput">delay_after_avail_end_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariablesInput">dynamic_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindowInput">traffic_shaping_retrieval_window_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfigurationInput">traffic_shaping_tps_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTypeInput">traffic_shaping_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSeconds">delay_after_avail_end_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariables">dynamic_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingType">traffic_shaping_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `traffic_shaping_retrieval_window`<sup>Required</sup> <a name="traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindow"></a>

```python
traffic_shaping_retrieval_window: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference</a>

---

##### `traffic_shaping_tps_configuration`<sup>Required</sup> <a name="traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfiguration"></a>

```python
traffic_shaping_tps_configuration: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference</a>

---

##### `delay_after_avail_end_seconds_input`<sup>Optional</sup> <a name="delay_after_avail_end_seconds_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSecondsInput"></a>

```python
delay_after_avail_end_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dynamic_variables_input`<sup>Optional</sup> <a name="dynamic_variables_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariablesInput"></a>

```python
dynamic_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `traffic_shaping_retrieval_window_input`<sup>Optional</sup> <a name="traffic_shaping_retrieval_window_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindowInput"></a>

```python
traffic_shaping_retrieval_window_input: IResolvable | MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a>

---

##### `traffic_shaping_tps_configuration_input`<sup>Optional</sup> <a name="traffic_shaping_tps_configuration_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfigurationInput"></a>

```python
traffic_shaping_tps_configuration_input: IResolvable | MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a>

---

##### `traffic_shaping_type_input`<sup>Optional</sup> <a name="traffic_shaping_type_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTypeInput"></a>

```python
traffic_shaping_type_input: str
```

- *Type:* str

---

##### `delay_after_avail_end_seconds`<sup>Required</sup> <a name="delay_after_avail_end_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSeconds"></a>

```python
delay_after_avail_end_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dynamic_variables`<sup>Required</sup> <a name="dynamic_variables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariables"></a>

```python
dynamic_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `traffic_shaping_type`<sup>Required</sup> <a name="traffic_shaping_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingType"></a>

```python
traffic_shaping_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resetRetrievalWindowDurationSeconds">reset_retrieval_window_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retrieval_window_duration_seconds` <a name="reset_retrieval_window_duration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resetRetrievalWindowDurationSeconds"></a>

```python
def reset_retrieval_window_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSecondsInput">retrieval_window_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds">retrieval_window_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retrieval_window_duration_seconds_input`<sup>Optional</sup> <a name="retrieval_window_duration_seconds_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSecondsInput"></a>

```python
retrieval_window_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retrieval_window_duration_seconds`<sup>Required</sup> <a name="retrieval_window_duration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds"></a>

```python
retrieval_window_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a>

---


### MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference <a name="MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakConcurrentUsers">reset_peak_concurrent_users</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakTps">reset_peak_tps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_peak_concurrent_users` <a name="reset_peak_concurrent_users" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakConcurrentUsers"></a>

```python
def reset_peak_concurrent_users() -> None
```

##### `reset_peak_tps` <a name="reset_peak_tps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakTps"></a>

```python
def reset_peak_tps() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsersInput">peak_concurrent_users_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTpsInput">peak_tps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers">peak_concurrent_users</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps">peak_tps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `peak_concurrent_users_input`<sup>Optional</sup> <a name="peak_concurrent_users_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsersInput"></a>

```python
peak_concurrent_users_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peak_tps_input`<sup>Optional</sup> <a name="peak_tps_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTpsInput"></a>

```python
peak_tps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peak_concurrent_users`<sup>Required</sup> <a name="peak_concurrent_users" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers"></a>

```python
peak_concurrent_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peak_tps`<sup>Required</sup> <a name="peak_tps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps"></a>

```python
peak_tps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a>

---


### MediatailorPrefetchScheduleRetrievalOutputReference <a name="MediatailorPrefetchScheduleRetrievalOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingRetrievalWindow">put_traffic_shaping_retrieval_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingTpsConfiguration">put_traffic_shaping_tps_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetDynamicVariables">reset_dynamic_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingRetrievalWindow">reset_traffic_shaping_retrieval_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingTpsConfiguration">reset_traffic_shaping_tps_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingType">reset_traffic_shaping_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_traffic_shaping_retrieval_window` <a name="put_traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingRetrievalWindow"></a>

```python
def put_traffic_shaping_retrieval_window(
  retrieval_window_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `retrieval_window_duration_seconds`<sup>Optional</sup> <a name="retrieval_window_duration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingRetrievalWindow.parameter.retrievalWindowDurationSeconds"></a>

- *Type:* typing.Union[int, float]

The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#retrieval_window_duration_seconds MediatailorPrefetchSchedule#retrieval_window_duration_seconds}

---

##### `put_traffic_shaping_tps_configuration` <a name="put_traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingTpsConfiguration"></a>

```python
def put_traffic_shaping_tps_configuration(
  peak_concurrent_users: typing.Union[int, float] = None,
  peak_tps: typing.Union[int, float] = None
) -> None
```

###### `peak_concurrent_users`<sup>Optional</sup> <a name="peak_concurrent_users" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingTpsConfiguration.parameter.peakConcurrentUsers"></a>

- *Type:* typing.Union[int, float]

The expected peak number of concurrent viewers for your content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_concurrent_users MediatailorPrefetchSchedule#peak_concurrent_users}

---

###### `peak_tps`<sup>Optional</sup> <a name="peak_tps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.putTrafficShapingTpsConfiguration.parameter.peakTps"></a>

- *Type:* typing.Union[int, float]

The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_prefetch_schedule#peak_tps MediatailorPrefetchSchedule#peak_tps}

---

##### `reset_dynamic_variables` <a name="reset_dynamic_variables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetDynamicVariables"></a>

```python
def reset_dynamic_variables() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_traffic_shaping_retrieval_window` <a name="reset_traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingRetrievalWindow"></a>

```python
def reset_traffic_shaping_retrieval_window() -> None
```

##### `reset_traffic_shaping_tps_configuration` <a name="reset_traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingTpsConfiguration"></a>

```python
def reset_traffic_shaping_tps_configuration() -> None
```

##### `reset_traffic_shaping_type` <a name="reset_traffic_shaping_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.resetTrafficShapingType"></a>

```python
def reset_traffic_shaping_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindow">traffic_shaping_retrieval_window</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfiguration">traffic_shaping_tps_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariablesInput">dynamic_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindowInput">traffic_shaping_retrieval_window_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfigurationInput">traffic_shaping_tps_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTypeInput">traffic_shaping_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariables">dynamic_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingType">traffic_shaping_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `traffic_shaping_retrieval_window`<sup>Required</sup> <a name="traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindow"></a>

```python
traffic_shaping_retrieval_window: MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference</a>

---

##### `traffic_shaping_tps_configuration`<sup>Required</sup> <a name="traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfiguration"></a>

```python
traffic_shaping_tps_configuration: MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference</a>

---

##### `dynamic_variables_input`<sup>Optional</sup> <a name="dynamic_variables_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariablesInput"></a>

```python
dynamic_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `traffic_shaping_retrieval_window_input`<sup>Optional</sup> <a name="traffic_shaping_retrieval_window_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindowInput"></a>

```python
traffic_shaping_retrieval_window_input: IResolvable | MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a>

---

##### `traffic_shaping_tps_configuration_input`<sup>Optional</sup> <a name="traffic_shaping_tps_configuration_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfigurationInput"></a>

```python
traffic_shaping_tps_configuration_input: IResolvable | MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a>

---

##### `traffic_shaping_type_input`<sup>Optional</sup> <a name="traffic_shaping_type_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTypeInput"></a>

```python
traffic_shaping_type_input: str
```

- *Type:* str

---

##### `dynamic_variables`<sup>Required</sup> <a name="dynamic_variables" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariables"></a>

```python
dynamic_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `traffic_shaping_type`<sup>Required</sup> <a name="traffic_shaping_type" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingType"></a>

```python
traffic_shaping_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleRetrieval
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrieval">MediatailorPrefetchScheduleRetrieval</a>

---


### MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference <a name="MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resetRetrievalWindowDurationSeconds">reset_retrieval_window_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retrieval_window_duration_seconds` <a name="reset_retrieval_window_duration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resetRetrievalWindowDurationSeconds"></a>

```python
def reset_retrieval_window_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSecondsInput">retrieval_window_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds">retrieval_window_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retrieval_window_duration_seconds_input`<sup>Optional</sup> <a name="retrieval_window_duration_seconds_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSecondsInput"></a>

```python
retrieval_window_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retrieval_window_duration_seconds`<sup>Required</sup> <a name="retrieval_window_duration_seconds" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds"></a>

```python
retrieval_window_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a>

---


### MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference <a name="MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakConcurrentUsers">reset_peak_concurrent_users</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakTps">reset_peak_tps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_peak_concurrent_users` <a name="reset_peak_concurrent_users" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakConcurrentUsers"></a>

```python
def reset_peak_concurrent_users() -> None
```

##### `reset_peak_tps` <a name="reset_peak_tps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resetPeakTps"></a>

```python
def reset_peak_tps() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsersInput">peak_concurrent_users_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTpsInput">peak_tps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers">peak_concurrent_users</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps">peak_tps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `peak_concurrent_users_input`<sup>Optional</sup> <a name="peak_concurrent_users_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsersInput"></a>

```python
peak_concurrent_users_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peak_tps_input`<sup>Optional</sup> <a name="peak_tps_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTpsInput"></a>

```python
peak_tps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peak_concurrent_users`<sup>Required</sup> <a name="peak_concurrent_users" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers"></a>

```python
peak_concurrent_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peak_tps`<sup>Required</sup> <a name="peak_tps" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps"></a>

```python
peak_tps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a>

---


### MediatailorPrefetchScheduleTagsList <a name="MediatailorPrefetchScheduleTagsList" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorPrefetchScheduleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorPrefetchScheduleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>]

---


### MediatailorPrefetchScheduleTagsOutputReference <a name="MediatailorPrefetchScheduleTagsOutputReference" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_prefetch_schedule

mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorPrefetchScheduleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorPrefetchSchedule.MediatailorPrefetchScheduleTags">MediatailorPrefetchScheduleTags</a>

---



