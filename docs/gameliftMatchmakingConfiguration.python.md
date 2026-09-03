# `gameliftMatchmakingConfiguration` Submodule <a name="`gameliftMatchmakingConfiguration` Submodule" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftMatchmakingConfiguration <a name="GameliftMatchmakingConfiguration" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration awscc_gamelift_matchmaking_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acceptance_required: bool | IResolvable,
  name: str,
  request_timeout_seconds: typing.Union[int, float],
  rule_set_name: str,
  acceptance_timeout_seconds: typing.Union[int, float] = None,
  additional_player_count: typing.Union[int, float] = None,
  backfill_mode: str = None,
  creation_time: str = None,
  custom_event_data: str = None,
  description: str = None,
  flex_match_mode: str = None,
  game_properties: IResolvable | typing.List[GameliftMatchmakingConfigurationGameProperties] = None,
  game_session_data: str = None,
  game_session_queue_arns: typing.List[str] = None,
  notification_target: str = None,
  rule_set_arn: str = None,
  tags: IResolvable | typing.List[GameliftMatchmakingConfigurationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.acceptanceRequired">acceptance_required</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique identifier for the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.requestTimeoutSeconds">request_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.ruleSetName">rule_set_name</a></code> | <code>str</code> | A unique identifier for the matchmaking rule set to use with this configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.acceptanceTimeoutSeconds">acceptance_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.additionalPlayerCount">additional_player_count</a></code> | <code>typing.Union[int, float]</code> | The number of player slots in a match to keep open for future players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.backfillMode">backfill_mode</a></code> | <code>str</code> | The method used to backfill game sessions created with this matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.creationTime">creation_time</a></code> | <code>str</code> | A time stamp indicating when this data object was created. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.customEventData">custom_event_data</a></code> | <code>str</code> | Information to attach to all events related to the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.description">description</a></code> | <code>str</code> | A descriptive label that is associated with matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.flexMatchMode">flex_match_mode</a></code> | <code>str</code> | Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameProperties">game_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>]</code> | A set of custom properties for a game session, formatted as key:value pairs. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameSessionData">game_session_data</a></code> | <code>str</code> | A set of custom game session properties, formatted as a single string value. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameSessionQueueArns">game_session_queue_arns</a></code> | <code>typing.List[str]</code> | The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.notificationTarget">notification_target</a></code> | <code>str</code> | An SNS topic ARN that is set up to receive matchmaking notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.ruleSetArn">rule_set_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acceptance_required`<sup>Required</sup> <a name="acceptance_required" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.acceptanceRequired"></a>

- *Type:* bool | cdktn.IResolvable

A flag that indicates whether a match that was created with this configuration must be accepted by the matched players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#acceptance_required GameliftMatchmakingConfiguration#acceptance_required}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.name"></a>

- *Type:* str

A unique identifier for the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#name GameliftMatchmakingConfiguration#name}

---

##### `request_timeout_seconds`<sup>Required</sup> <a name="request_timeout_seconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.requestTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#request_timeout_seconds GameliftMatchmakingConfiguration#request_timeout_seconds}

---

##### `rule_set_name`<sup>Required</sup> <a name="rule_set_name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.ruleSetName"></a>

- *Type:* str

A unique identifier for the matchmaking rule set to use with this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#rule_set_name GameliftMatchmakingConfiguration#rule_set_name}

---

##### `acceptance_timeout_seconds`<sup>Optional</sup> <a name="acceptance_timeout_seconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.acceptanceTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#acceptance_timeout_seconds GameliftMatchmakingConfiguration#acceptance_timeout_seconds}

---

##### `additional_player_count`<sup>Optional</sup> <a name="additional_player_count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.additionalPlayerCount"></a>

- *Type:* typing.Union[int, float]

The number of player slots in a match to keep open for future players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#additional_player_count GameliftMatchmakingConfiguration#additional_player_count}

---

##### `backfill_mode`<sup>Optional</sup> <a name="backfill_mode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.backfillMode"></a>

- *Type:* str

The method used to backfill game sessions created with this matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#backfill_mode GameliftMatchmakingConfiguration#backfill_mode}

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.creationTime"></a>

- *Type:* str

A time stamp indicating when this data object was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#creation_time GameliftMatchmakingConfiguration#creation_time}

---

##### `custom_event_data`<sup>Optional</sup> <a name="custom_event_data" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.customEventData"></a>

- *Type:* str

Information to attach to all events related to the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#custom_event_data GameliftMatchmakingConfiguration#custom_event_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.description"></a>

- *Type:* str

A descriptive label that is associated with matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#description GameliftMatchmakingConfiguration#description}

---

##### `flex_match_mode`<sup>Optional</sup> <a name="flex_match_mode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.flexMatchMode"></a>

- *Type:* str

Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#flex_match_mode GameliftMatchmakingConfiguration#flex_match_mode}

---

##### `game_properties`<sup>Optional</sup> <a name="game_properties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameProperties"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>]

A set of custom properties for a game session, formatted as key:value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#game_properties GameliftMatchmakingConfiguration#game_properties}

---

##### `game_session_data`<sup>Optional</sup> <a name="game_session_data" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameSessionData"></a>

- *Type:* str

A set of custom game session properties, formatted as a single string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#game_session_data GameliftMatchmakingConfiguration#game_session_data}

---

##### `game_session_queue_arns`<sup>Optional</sup> <a name="game_session_queue_arns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameSessionQueueArns"></a>

- *Type:* typing.List[str]

The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#game_session_queue_arns GameliftMatchmakingConfiguration#game_session_queue_arns}

---

##### `notification_target`<sup>Optional</sup> <a name="notification_target" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.notificationTarget"></a>

- *Type:* str

An SNS topic ARN that is set up to receive matchmaking notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#notification_target GameliftMatchmakingConfiguration#notification_target}

---

##### `rule_set_arn`<sup>Optional</sup> <a name="rule_set_arn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.ruleSetArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#rule_set_arn GameliftMatchmakingConfiguration#rule_set_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#tags GameliftMatchmakingConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties">put_game_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAcceptanceTimeoutSeconds">reset_acceptance_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAdditionalPlayerCount">reset_additional_player_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetBackfillMode">reset_backfill_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCustomEventData">reset_custom_event_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetFlexMatchMode">reset_flex_match_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameProperties">reset_game_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionData">reset_game_session_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionQueueArns">reset_game_session_queue_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetNotificationTarget">reset_notification_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetRuleSetArn">reset_rule_set_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_game_properties` <a name="put_game_properties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties"></a>

```python
def put_game_properties(
  value: IResolvable | typing.List[GameliftMatchmakingConfigurationGameProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GameliftMatchmakingConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>]

---

##### `reset_acceptance_timeout_seconds` <a name="reset_acceptance_timeout_seconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAcceptanceTimeoutSeconds"></a>

```python
def reset_acceptance_timeout_seconds() -> None
```

##### `reset_additional_player_count` <a name="reset_additional_player_count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAdditionalPlayerCount"></a>

```python
def reset_additional_player_count() -> None
```

##### `reset_backfill_mode` <a name="reset_backfill_mode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetBackfillMode"></a>

```python
def reset_backfill_mode() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_custom_event_data` <a name="reset_custom_event_data" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCustomEventData"></a>

```python
def reset_custom_event_data() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_flex_match_mode` <a name="reset_flex_match_mode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetFlexMatchMode"></a>

```python
def reset_flex_match_mode() -> None
```

##### `reset_game_properties` <a name="reset_game_properties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameProperties"></a>

```python
def reset_game_properties() -> None
```

##### `reset_game_session_data` <a name="reset_game_session_data" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionData"></a>

```python
def reset_game_session_data() -> None
```

##### `reset_game_session_queue_arns` <a name="reset_game_session_queue_arns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionQueueArns"></a>

```python
def reset_game_session_queue_arns() -> None
```

##### `reset_notification_target` <a name="reset_notification_target" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetNotificationTarget"></a>

```python
def reset_notification_target() -> None
```

##### `reset_rule_set_arn` <a name="reset_rule_set_arn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetRuleSetArn"></a>

```python
def reset_rule_set_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GameliftMatchmakingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GameliftMatchmakingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GameliftMatchmakingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameProperties">game_properties</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList">GameliftMatchmakingConfigurationGamePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList">GameliftMatchmakingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequiredInput">acceptance_required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSecondsInput">acceptance_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCountInput">additional_player_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillModeInput">backfill_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTimeInput">creation_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventDataInput">custom_event_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchModeInput">flex_match_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gamePropertiesInput">game_properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionDataInput">game_session_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArnsInput">game_session_queue_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTargetInput">notification_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSecondsInput">request_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArnInput">rule_set_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetNameInput">rule_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequired">acceptance_required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds">acceptance_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCount">additional_player_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillMode">backfill_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventData">custom_event_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchMode">flex_match_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionData">game_session_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArns">game_session_queue_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTarget">notification_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSeconds">request_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArn">rule_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetName">rule_set_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `game_properties`<sup>Required</sup> <a name="game_properties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameProperties"></a>

```python
game_properties: GameliftMatchmakingConfigurationGamePropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList">GameliftMatchmakingConfigurationGamePropertiesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tags"></a>

```python
tags: GameliftMatchmakingConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList">GameliftMatchmakingConfigurationTagsList</a>

---

##### `acceptance_required_input`<sup>Optional</sup> <a name="acceptance_required_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequiredInput"></a>

```python
acceptance_required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `acceptance_timeout_seconds_input`<sup>Optional</sup> <a name="acceptance_timeout_seconds_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSecondsInput"></a>

```python
acceptance_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_player_count_input`<sup>Optional</sup> <a name="additional_player_count_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCountInput"></a>

```python
additional_player_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backfill_mode_input`<sup>Optional</sup> <a name="backfill_mode_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillModeInput"></a>

```python
backfill_mode_input: str
```

- *Type:* str

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTimeInput"></a>

```python
creation_time_input: str
```

- *Type:* str

---

##### `custom_event_data_input`<sup>Optional</sup> <a name="custom_event_data_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventDataInput"></a>

```python
custom_event_data_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `flex_match_mode_input`<sup>Optional</sup> <a name="flex_match_mode_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchModeInput"></a>

```python
flex_match_mode_input: str
```

- *Type:* str

---

##### `game_properties_input`<sup>Optional</sup> <a name="game_properties_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gamePropertiesInput"></a>

```python
game_properties_input: IResolvable | typing.List[GameliftMatchmakingConfigurationGameProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>]

---

##### `game_session_data_input`<sup>Optional</sup> <a name="game_session_data_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionDataInput"></a>

```python
game_session_data_input: str
```

- *Type:* str

---

##### `game_session_queue_arns_input`<sup>Optional</sup> <a name="game_session_queue_arns_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArnsInput"></a>

```python
game_session_queue_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_target_input`<sup>Optional</sup> <a name="notification_target_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTargetInput"></a>

```python
notification_target_input: str
```

- *Type:* str

---

##### `request_timeout_seconds_input`<sup>Optional</sup> <a name="request_timeout_seconds_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSecondsInput"></a>

```python
request_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_set_arn_input`<sup>Optional</sup> <a name="rule_set_arn_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArnInput"></a>

```python
rule_set_arn_input: str
```

- *Type:* str

---

##### `rule_set_name_input`<sup>Optional</sup> <a name="rule_set_name_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetNameInput"></a>

```python
rule_set_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GameliftMatchmakingConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>]

---

##### `acceptance_required`<sup>Required</sup> <a name="acceptance_required" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequired"></a>

```python
acceptance_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `acceptance_timeout_seconds`<sup>Required</sup> <a name="acceptance_timeout_seconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds"></a>

```python
acceptance_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_player_count`<sup>Required</sup> <a name="additional_player_count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCount"></a>

```python
additional_player_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backfill_mode`<sup>Required</sup> <a name="backfill_mode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillMode"></a>

```python
backfill_mode: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `custom_event_data`<sup>Required</sup> <a name="custom_event_data" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventData"></a>

```python
custom_event_data: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `flex_match_mode`<sup>Required</sup> <a name="flex_match_mode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchMode"></a>

```python
flex_match_mode: str
```

- *Type:* str

---

##### `game_session_data`<sup>Required</sup> <a name="game_session_data" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionData"></a>

```python
game_session_data: str
```

- *Type:* str

---

##### `game_session_queue_arns`<sup>Required</sup> <a name="game_session_queue_arns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArns"></a>

```python
game_session_queue_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_target`<sup>Required</sup> <a name="notification_target" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTarget"></a>

```python
notification_target: str
```

- *Type:* str

---

##### `request_timeout_seconds`<sup>Required</sup> <a name="request_timeout_seconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSeconds"></a>

```python
request_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_set_arn`<sup>Required</sup> <a name="rule_set_arn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArn"></a>

```python
rule_set_arn: str
```

- *Type:* str

---

##### `rule_set_name`<sup>Required</sup> <a name="rule_set_name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetName"></a>

```python
rule_set_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftMatchmakingConfigurationConfig <a name="GameliftMatchmakingConfigurationConfig" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acceptance_required: bool | IResolvable,
  name: str,
  request_timeout_seconds: typing.Union[int, float],
  rule_set_name: str,
  acceptance_timeout_seconds: typing.Union[int, float] = None,
  additional_player_count: typing.Union[int, float] = None,
  backfill_mode: str = None,
  creation_time: str = None,
  custom_event_data: str = None,
  description: str = None,
  flex_match_mode: str = None,
  game_properties: IResolvable | typing.List[GameliftMatchmakingConfigurationGameProperties] = None,
  game_session_data: str = None,
  game_session_queue_arns: typing.List[str] = None,
  notification_target: str = None,
  rule_set_arn: str = None,
  tags: IResolvable | typing.List[GameliftMatchmakingConfigurationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceRequired">acceptance_required</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.name">name</a></code> | <code>str</code> | A unique identifier for the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.requestTimeoutSeconds">request_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetName">rule_set_name</a></code> | <code>str</code> | A unique identifier for the matchmaking rule set to use with this configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceTimeoutSeconds">acceptance_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.additionalPlayerCount">additional_player_count</a></code> | <code>typing.Union[int, float]</code> | The number of player slots in a match to keep open for future players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.backfillMode">backfill_mode</a></code> | <code>str</code> | The method used to backfill game sessions created with this matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.creationTime">creation_time</a></code> | <code>str</code> | A time stamp indicating when this data object was created. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.customEventData">custom_event_data</a></code> | <code>str</code> | Information to attach to all events related to the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.description">description</a></code> | <code>str</code> | A descriptive label that is associated with matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.flexMatchMode">flex_match_mode</a></code> | <code>str</code> | Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameProperties">game_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>]</code> | A set of custom properties for a game session, formatted as key:value pairs. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionData">game_session_data</a></code> | <code>str</code> | A set of custom game session properties, formatted as a single string value. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionQueueArns">game_session_queue_arns</a></code> | <code>typing.List[str]</code> | The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.notificationTarget">notification_target</a></code> | <code>str</code> | An SNS topic ARN that is set up to receive matchmaking notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetArn">rule_set_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acceptance_required`<sup>Required</sup> <a name="acceptance_required" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceRequired"></a>

```python
acceptance_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag that indicates whether a match that was created with this configuration must be accepted by the matched players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#acceptance_required GameliftMatchmakingConfiguration#acceptance_required}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique identifier for the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#name GameliftMatchmakingConfiguration#name}

---

##### `request_timeout_seconds`<sup>Required</sup> <a name="request_timeout_seconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.requestTimeoutSeconds"></a>

```python
request_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#request_timeout_seconds GameliftMatchmakingConfiguration#request_timeout_seconds}

---

##### `rule_set_name`<sup>Required</sup> <a name="rule_set_name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetName"></a>

```python
rule_set_name: str
```

- *Type:* str

A unique identifier for the matchmaking rule set to use with this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#rule_set_name GameliftMatchmakingConfiguration#rule_set_name}

---

##### `acceptance_timeout_seconds`<sup>Optional</sup> <a name="acceptance_timeout_seconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceTimeoutSeconds"></a>

```python
acceptance_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#acceptance_timeout_seconds GameliftMatchmakingConfiguration#acceptance_timeout_seconds}

---

##### `additional_player_count`<sup>Optional</sup> <a name="additional_player_count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.additionalPlayerCount"></a>

```python
additional_player_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of player slots in a match to keep open for future players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#additional_player_count GameliftMatchmakingConfiguration#additional_player_count}

---

##### `backfill_mode`<sup>Optional</sup> <a name="backfill_mode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.backfillMode"></a>

```python
backfill_mode: str
```

- *Type:* str

The method used to backfill game sessions created with this matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#backfill_mode GameliftMatchmakingConfiguration#backfill_mode}

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

A time stamp indicating when this data object was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#creation_time GameliftMatchmakingConfiguration#creation_time}

---

##### `custom_event_data`<sup>Optional</sup> <a name="custom_event_data" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.customEventData"></a>

```python
custom_event_data: str
```

- *Type:* str

Information to attach to all events related to the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#custom_event_data GameliftMatchmakingConfiguration#custom_event_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A descriptive label that is associated with matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#description GameliftMatchmakingConfiguration#description}

---

##### `flex_match_mode`<sup>Optional</sup> <a name="flex_match_mode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.flexMatchMode"></a>

```python
flex_match_mode: str
```

- *Type:* str

Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#flex_match_mode GameliftMatchmakingConfiguration#flex_match_mode}

---

##### `game_properties`<sup>Optional</sup> <a name="game_properties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameProperties"></a>

```python
game_properties: IResolvable | typing.List[GameliftMatchmakingConfigurationGameProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>]

A set of custom properties for a game session, formatted as key:value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#game_properties GameliftMatchmakingConfiguration#game_properties}

---

##### `game_session_data`<sup>Optional</sup> <a name="game_session_data" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionData"></a>

```python
game_session_data: str
```

- *Type:* str

A set of custom game session properties, formatted as a single string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#game_session_data GameliftMatchmakingConfiguration#game_session_data}

---

##### `game_session_queue_arns`<sup>Optional</sup> <a name="game_session_queue_arns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionQueueArns"></a>

```python
game_session_queue_arns: typing.List[str]
```

- *Type:* typing.List[str]

The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#game_session_queue_arns GameliftMatchmakingConfiguration#game_session_queue_arns}

---

##### `notification_target`<sup>Optional</sup> <a name="notification_target" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.notificationTarget"></a>

```python
notification_target: str
```

- *Type:* str

An SNS topic ARN that is set up to receive matchmaking notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#notification_target GameliftMatchmakingConfiguration#notification_target}

---

##### `rule_set_arn`<sup>Optional</sup> <a name="rule_set_arn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetArn"></a>

```python
rule_set_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#rule_set_arn GameliftMatchmakingConfiguration#rule_set_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GameliftMatchmakingConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#tags GameliftMatchmakingConfiguration#tags}

---

### GameliftMatchmakingConfigurationGameProperties <a name="GameliftMatchmakingConfigurationGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.key">key</a></code> | <code>str</code> | The game property identifier. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.value">value</a></code> | <code>str</code> | The game property value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.key"></a>

```python
key: str
```

- *Type:* str

The game property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#key GameliftMatchmakingConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.value"></a>

```python
value: str
```

- *Type:* str

The game property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#value GameliftMatchmakingConfiguration#value}

---

### GameliftMatchmakingConfigurationTags <a name="GameliftMatchmakingConfigurationTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#key GameliftMatchmakingConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_matchmaking_configuration#value GameliftMatchmakingConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftMatchmakingConfigurationGamePropertiesList <a name="GameliftMatchmakingConfigurationGamePropertiesList" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftMatchmakingConfigurationGamePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftMatchmakingConfigurationGameProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>]

---


### GameliftMatchmakingConfigurationGamePropertiesOutputReference <a name="GameliftMatchmakingConfigurationGamePropertiesOutputReference" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftMatchmakingConfigurationGameProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>

---


### GameliftMatchmakingConfigurationTagsList <a name="GameliftMatchmakingConfigurationTagsList" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftMatchmakingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftMatchmakingConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>]

---


### GameliftMatchmakingConfigurationTagsOutputReference <a name="GameliftMatchmakingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_matchmaking_configuration

gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftMatchmakingConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>

---



