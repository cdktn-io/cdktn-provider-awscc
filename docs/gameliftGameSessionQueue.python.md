# `gameliftGameSessionQueue` Submodule <a name="`gameliftGameSessionQueue` Submodule" id="@cdktn/provider-awscc.gameliftGameSessionQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameSessionQueue <a name="GameliftGameSessionQueue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue awscc_gamelift_game_session_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueue(
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
  custom_event_data: str = None,
  destinations: IResolvable | typing.List[GameliftGameSessionQueueDestinations] = None,
  filter_configuration: GameliftGameSessionQueueFilterConfiguration = None,
  notification_target: str = None,
  player_latency_policies: IResolvable | typing.List[GameliftGameSessionQueuePlayerLatencyPolicies] = None,
  priority_configuration: GameliftGameSessionQueuePriorityConfiguration = None,
  tags: IResolvable | typing.List[GameliftGameSessionQueueTags] = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | A descriptive label that is associated with game session queue. Queue names must be unique within each Region. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.customEventData">custom_event_data</a></code> | <code>str</code> | Information that is added to all events that are related to this game session queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>]</code> | A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.filterConfiguration">filter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | A list of locations where a queue is allowed to place new game sessions. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.notificationTarget">notification_target</a></code> | <code>str</code> | An SNS topic ARN that is set up to receive game session placement notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.playerLatencyPolicies">player_latency_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>]</code> | A set of policies that act as a sliding cap on player latency. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.priorityConfiguration">priority_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | Custom settings to use when prioritizing destinations and locations for game session placements. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum time, in seconds, that a new game session placement request remains in the queue. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.name"></a>

- *Type:* str

A descriptive label that is associated with game session queue. Queue names must be unique within each Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#name GameliftGameSessionQueue#name}

---

##### `custom_event_data`<sup>Optional</sup> <a name="custom_event_data" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.customEventData"></a>

- *Type:* str

Information that is added to all events that are related to this game session queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#custom_event_data GameliftGameSessionQueue#custom_event_data}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.destinations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>]

A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}

---

##### `filter_configuration`<sup>Optional</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.filterConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

A list of locations where a queue is allowed to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#filter_configuration GameliftGameSessionQueue#filter_configuration}

---

##### `notification_target`<sup>Optional</sup> <a name="notification_target" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.notificationTarget"></a>

- *Type:* str

An SNS topic ARN that is set up to receive game session placement notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}

---

##### `player_latency_policies`<sup>Optional</sup> <a name="player_latency_policies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.playerLatencyPolicies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>]

A set of policies that act as a sliding cap on player latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#player_latency_policies GameliftGameSessionQueue#player_latency_policies}

---

##### `priority_configuration`<sup>Optional</sup> <a name="priority_configuration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.priorityConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

Custom settings to use when prioritizing destinations and locations for game session placements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#priority_configuration GameliftGameSessionQueue#priority_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum time, in seconds, that a new game session placement request remains in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration">put_filter_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies">put_player_latency_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration">put_priority_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetCustomEventData">reset_custom_event_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetFilterConfiguration">reset_filter_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget">reset_notification_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicies">reset_player_latency_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPriorityConfiguration">reset_priority_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[GameliftGameSessionQueueDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>]

---

##### `put_filter_configuration` <a name="put_filter_configuration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration"></a>

```python
def put_filter_configuration(
  allowed_locations: typing.List[str] = None
) -> None
```

###### `allowed_locations`<sup>Optional</sup> <a name="allowed_locations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration.parameter.allowedLocations"></a>

- *Type:* typing.List[str]

A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#allowed_locations GameliftGameSessionQueue#allowed_locations}

---

##### `put_player_latency_policies` <a name="put_player_latency_policies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies"></a>

```python
def put_player_latency_policies(
  value: IResolvable | typing.List[GameliftGameSessionQueuePlayerLatencyPolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>]

---

##### `put_priority_configuration` <a name="put_priority_configuration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration"></a>

```python
def put_priority_configuration(
  location_order: typing.List[str] = None,
  priority_order: typing.List[str] = None
) -> None
```

###### `location_order`<sup>Optional</sup> <a name="location_order" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration.parameter.locationOrder"></a>

- *Type:* typing.List[str]

The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#location_order GameliftGameSessionQueue#location_order}

---

###### `priority_order`<sup>Optional</sup> <a name="priority_order" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration.parameter.priorityOrder"></a>

- *Type:* typing.List[str]

The recommended sequence to use when prioritizing where to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#priority_order GameliftGameSessionQueue#priority_order}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GameliftGameSessionQueueTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>]

---

##### `reset_custom_event_data` <a name="reset_custom_event_data" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetCustomEventData"></a>

```python
def reset_custom_event_data() -> None
```

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_filter_configuration` <a name="reset_filter_configuration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetFilterConfiguration"></a>

```python
def reset_filter_configuration() -> None
```

##### `reset_notification_target` <a name="reset_notification_target" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget"></a>

```python
def reset_notification_target() -> None
```

##### `reset_player_latency_policies` <a name="reset_player_latency_policies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicies"></a>

```python
def reset_player_latency_policies() -> None
```

##### `reset_priority_configuration` <a name="reset_priority_configuration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPriorityConfiguration"></a>

```python
def reset_priority_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GameliftGameSessionQueue resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GameliftGameSessionQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GameliftGameSessionQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GameliftGameSessionQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GameliftGameSessionQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList">GameliftGameSessionQueueDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfiguration">filter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference">GameliftGameSessionQueueFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicies">player_latency_policies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList">GameliftGameSessionQueuePlayerLatencyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfiguration">priority_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference">GameliftGameSessionQueuePriorityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList">GameliftGameSessionQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventDataInput">custom_event_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfigurationInput">filter_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput">notification_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPoliciesInput">player_latency_policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfigurationInput">priority_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventData">custom_event_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget">notification_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations"></a>

```python
destinations: GameliftGameSessionQueueDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList">GameliftGameSessionQueueDestinationsList</a>

---

##### `filter_configuration`<sup>Required</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfiguration"></a>

```python
filter_configuration: GameliftGameSessionQueueFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference">GameliftGameSessionQueueFilterConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `player_latency_policies`<sup>Required</sup> <a name="player_latency_policies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicies"></a>

```python
player_latency_policies: GameliftGameSessionQueuePlayerLatencyPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList">GameliftGameSessionQueuePlayerLatencyPoliciesList</a>

---

##### `priority_configuration`<sup>Required</sup> <a name="priority_configuration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfiguration"></a>

```python
priority_configuration: GameliftGameSessionQueuePriorityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference">GameliftGameSessionQueuePriorityConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags"></a>

```python
tags: GameliftGameSessionQueueTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList">GameliftGameSessionQueueTagsList</a>

---

##### `custom_event_data_input`<sup>Optional</sup> <a name="custom_event_data_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventDataInput"></a>

```python
custom_event_data_input: str
```

- *Type:* str

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[GameliftGameSessionQueueDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>]

---

##### `filter_configuration_input`<sup>Optional</sup> <a name="filter_configuration_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfigurationInput"></a>

```python
filter_configuration_input: IResolvable | GameliftGameSessionQueueFilterConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_target_input`<sup>Optional</sup> <a name="notification_target_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput"></a>

```python
notification_target_input: str
```

- *Type:* str

---

##### `player_latency_policies_input`<sup>Optional</sup> <a name="player_latency_policies_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPoliciesInput"></a>

```python
player_latency_policies_input: IResolvable | typing.List[GameliftGameSessionQueuePlayerLatencyPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>]

---

##### `priority_configuration_input`<sup>Optional</sup> <a name="priority_configuration_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfigurationInput"></a>

```python
priority_configuration_input: IResolvable | GameliftGameSessionQueuePriorityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GameliftGameSessionQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>]

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_event_data`<sup>Required</sup> <a name="custom_event_data" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventData"></a>

```python
custom_event_data: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_target`<sup>Required</sup> <a name="notification_target" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget"></a>

```python
notification_target: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameSessionQueueConfig <a name="GameliftGameSessionQueueConfig" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueueConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  custom_event_data: str = None,
  destinations: IResolvable | typing.List[GameliftGameSessionQueueDestinations] = None,
  filter_configuration: GameliftGameSessionQueueFilterConfiguration = None,
  notification_target: str = None,
  player_latency_policies: IResolvable | typing.List[GameliftGameSessionQueuePlayerLatencyPolicies] = None,
  priority_configuration: GameliftGameSessionQueuePriorityConfiguration = None,
  tags: IResolvable | typing.List[GameliftGameSessionQueueTags] = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name">name</a></code> | <code>str</code> | A descriptive label that is associated with game session queue. Queue names must be unique within each Region. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.customEventData">custom_event_data</a></code> | <code>str</code> | Information that is added to all events that are related to this game session queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>]</code> | A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.filterConfiguration">filter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | A list of locations where a queue is allowed to place new game sessions. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget">notification_target</a></code> | <code>str</code> | An SNS topic ARN that is set up to receive game session placement notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicies">player_latency_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>]</code> | A set of policies that act as a sliding cap on player latency. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.priorityConfiguration">priority_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | Custom settings to use when prioritizing destinations and locations for game session placements. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum time, in seconds, that a new game session placement request remains in the queue. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A descriptive label that is associated with game session queue. Queue names must be unique within each Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#name GameliftGameSessionQueue#name}

---

##### `custom_event_data`<sup>Optional</sup> <a name="custom_event_data" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.customEventData"></a>

```python
custom_event_data: str
```

- *Type:* str

Information that is added to all events that are related to this game session queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#custom_event_data GameliftGameSessionQueue#custom_event_data}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations"></a>

```python
destinations: IResolvable | typing.List[GameliftGameSessionQueueDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>]

A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}

---

##### `filter_configuration`<sup>Optional</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.filterConfiguration"></a>

```python
filter_configuration: GameliftGameSessionQueueFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

A list of locations where a queue is allowed to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#filter_configuration GameliftGameSessionQueue#filter_configuration}

---

##### `notification_target`<sup>Optional</sup> <a name="notification_target" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget"></a>

```python
notification_target: str
```

- *Type:* str

An SNS topic ARN that is set up to receive game session placement notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}

---

##### `player_latency_policies`<sup>Optional</sup> <a name="player_latency_policies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicies"></a>

```python
player_latency_policies: IResolvable | typing.List[GameliftGameSessionQueuePlayerLatencyPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>]

A set of policies that act as a sliding cap on player latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#player_latency_policies GameliftGameSessionQueue#player_latency_policies}

---

##### `priority_configuration`<sup>Optional</sup> <a name="priority_configuration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.priorityConfiguration"></a>

```python
priority_configuration: GameliftGameSessionQueuePriorityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

Custom settings to use when prioritizing destinations and locations for game session placements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#priority_configuration GameliftGameSessionQueue#priority_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GameliftGameSessionQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time, in seconds, that a new game session placement request remains in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}

---

### GameliftGameSessionQueueDestinations <a name="GameliftGameSessionQueueDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueueDestinations(
  destination_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.property.destinationArn">destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#destination_arn GameliftGameSessionQueue#destination_arn}. |

---

##### `destination_arn`<sup>Optional</sup> <a name="destination_arn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#destination_arn GameliftGameSessionQueue#destination_arn}.

---

### GameliftGameSessionQueueFilterConfiguration <a name="GameliftGameSessionQueueFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration(
  allowed_locations: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.property.allowedLocations">allowed_locations</a></code> | <code>typing.List[str]</code> | A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2. |

---

##### `allowed_locations`<sup>Optional</sup> <a name="allowed_locations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.property.allowedLocations"></a>

```python
allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#allowed_locations GameliftGameSessionQueue#allowed_locations}

---

### GameliftGameSessionQueuePlayerLatencyPolicies <a name="GameliftGameSessionQueuePlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies(
  maximum_individual_player_latency_milliseconds: typing.Union[int, float] = None,
  policy_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.maximumIndividualPlayerLatencyMilliseconds">maximum_individual_player_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | The maximum latency value that is allowed for any player, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.policyDurationSeconds">policy_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | The length of time, in seconds, that the policy is enforced while placing a new game session. |

---

##### `maximum_individual_player_latency_milliseconds`<sup>Optional</sup> <a name="maximum_individual_player_latency_milliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```python
maximum_individual_player_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum latency value that is allowed for any player, in milliseconds.

All policies must have a value set for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}

---

##### `policy_duration_seconds`<sup>Optional</sup> <a name="policy_duration_seconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.policyDurationSeconds"></a>

```python
policy_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of time, in seconds, that the policy is enforced while placing a new game session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}

---

### GameliftGameSessionQueuePriorityConfiguration <a name="GameliftGameSessionQueuePriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration(
  location_order: typing.List[str] = None,
  priority_order: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.locationOrder">location_order</a></code> | <code>typing.List[str]</code> | The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.priorityOrder">priority_order</a></code> | <code>typing.List[str]</code> | The recommended sequence to use when prioritizing where to place new game sessions. |

---

##### `location_order`<sup>Optional</sup> <a name="location_order" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.locationOrder"></a>

```python
location_order: typing.List[str]
```

- *Type:* typing.List[str]

The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#location_order GameliftGameSessionQueue#location_order}

---

##### `priority_order`<sup>Optional</sup> <a name="priority_order" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.priorityOrder"></a>

```python
priority_order: typing.List[str]
```

- *Type:* typing.List[str]

The recommended sequence to use when prioritizing where to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#priority_order GameliftGameSessionQueue#priority_order}

---

### GameliftGameSessionQueueTags <a name="GameliftGameSessionQueueTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueueTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.value">value</a></code> | <code>str</code> | The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#key GameliftGameSessionQueue#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#value GameliftGameSessionQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameSessionQueueDestinationsList <a name="GameliftGameSessionQueueDestinationsList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftGameSessionQueueDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftGameSessionQueueDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>]

---


### GameliftGameSessionQueueDestinationsOutputReference <a name="GameliftGameSessionQueueDestinationsOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resetDestinationArn">reset_destination_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_arn` <a name="reset_destination_arn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resetDestinationArn"></a>

```python
def reset_destination_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArnInput">destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_arn_input`<sup>Optional</sup> <a name="destination_arn_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArnInput"></a>

```python
destination_arn_input: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftGameSessionQueueDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>

---


### GameliftGameSessionQueueFilterConfigurationOutputReference <a name="GameliftGameSessionQueueFilterConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resetAllowedLocations">reset_allowed_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_locations` <a name="reset_allowed_locations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resetAllowedLocations"></a>

```python
def reset_allowed_locations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocationsInput">allowed_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations">allowed_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_locations_input`<sup>Optional</sup> <a name="allowed_locations_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocationsInput"></a>

```python
allowed_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_locations`<sup>Required</sup> <a name="allowed_locations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations"></a>

```python
allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftGameSessionQueueFilterConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---


### GameliftGameSessionQueuePlayerLatencyPoliciesList <a name="GameliftGameSessionQueuePlayerLatencyPoliciesList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftGameSessionQueuePlayerLatencyPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>]

---


### GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference <a name="GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetMaximumIndividualPlayerLatencyMilliseconds">reset_maximum_individual_player_latency_milliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetPolicyDurationSeconds">reset_policy_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_individual_player_latency_milliseconds` <a name="reset_maximum_individual_player_latency_milliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetMaximumIndividualPlayerLatencyMilliseconds"></a>

```python
def reset_maximum_individual_player_latency_milliseconds() -> None
```

##### `reset_policy_duration_seconds` <a name="reset_policy_duration_seconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetPolicyDurationSeconds"></a>

```python
def reset_policy_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput">maximum_individual_player_latency_milliseconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSecondsInput">policy_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds">maximum_individual_player_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds">policy_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_individual_player_latency_milliseconds_input`<sup>Optional</sup> <a name="maximum_individual_player_latency_milliseconds_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput"></a>

```python
maximum_individual_player_latency_milliseconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_duration_seconds_input`<sup>Optional</sup> <a name="policy_duration_seconds_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSecondsInput"></a>

```python
policy_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_individual_player_latency_milliseconds`<sup>Required</sup> <a name="maximum_individual_player_latency_milliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```python
maximum_individual_player_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_duration_seconds`<sup>Required</sup> <a name="policy_duration_seconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds"></a>

```python
policy_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftGameSessionQueuePlayerLatencyPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>

---


### GameliftGameSessionQueuePriorityConfigurationOutputReference <a name="GameliftGameSessionQueuePriorityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetLocationOrder">reset_location_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetPriorityOrder">reset_priority_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location_order` <a name="reset_location_order" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetLocationOrder"></a>

```python
def reset_location_order() -> None
```

##### `reset_priority_order` <a name="reset_priority_order" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetPriorityOrder"></a>

```python
def reset_priority_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrderInput">location_order_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrderInput">priority_order_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder">location_order</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder">priority_order</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_order_input`<sup>Optional</sup> <a name="location_order_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrderInput"></a>

```python
location_order_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `priority_order_input`<sup>Optional</sup> <a name="priority_order_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrderInput"></a>

```python
priority_order_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_order`<sup>Required</sup> <a name="location_order" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder"></a>

```python
location_order: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `priority_order`<sup>Required</sup> <a name="priority_order" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder"></a>

```python
priority_order: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftGameSessionQueuePriorityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---


### GameliftGameSessionQueueTagsList <a name="GameliftGameSessionQueueTagsList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueueTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftGameSessionQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftGameSessionQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>]

---


### GameliftGameSessionQueueTagsOutputReference <a name="GameliftGameSessionQueueTagsOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_game_session_queue

gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftGameSessionQueueTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>

---



