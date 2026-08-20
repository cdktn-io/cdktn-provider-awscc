# `gameliftMatchmakingConfiguration` Submodule <a name="`gameliftMatchmakingConfiguration` Submodule" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftMatchmakingConfiguration <a name="GameliftMatchmakingConfiguration" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration awscc_gamelift_matchmaking_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfiguration;

GameliftMatchmakingConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .acceptanceRequired(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
    .requestTimeoutSeconds(java.lang.Number)
    .ruleSetName(java.lang.String)
//  .acceptanceTimeoutSeconds(java.lang.Number)
//  .additionalPlayerCount(java.lang.Number)
//  .backfillMode(java.lang.String)
//  .creationTime(java.lang.String)
//  .customEventData(java.lang.String)
//  .description(java.lang.String)
//  .flexMatchMode(java.lang.String)
//  .gameProperties(IResolvable|java.util.List<GameliftMatchmakingConfigurationGameProperties>)
//  .gameSessionData(java.lang.String)
//  .gameSessionQueueArns(java.util.List<java.lang.String>)
//  .notificationTarget(java.lang.String)
//  .ruleSetArn(java.lang.String)
//  .tags(IResolvable|java.util.List<GameliftMatchmakingConfigurationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.acceptanceRequired">acceptanceRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.requestTimeoutSeconds">requestTimeoutSeconds</a></code> | <code>java.lang.Number</code> | The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.ruleSetName">ruleSetName</a></code> | <code>java.lang.String</code> | A unique identifier for the matchmaking rule set to use with this configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.acceptanceTimeoutSeconds">acceptanceTimeoutSeconds</a></code> | <code>java.lang.Number</code> | The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.additionalPlayerCount">additionalPlayerCount</a></code> | <code>java.lang.Number</code> | The number of player slots in a match to keep open for future players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.backfillMode">backfillMode</a></code> | <code>java.lang.String</code> | The method used to backfill game sessions created with this matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.creationTime">creationTime</a></code> | <code>java.lang.String</code> | A time stamp indicating when this data object was created. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.customEventData">customEventData</a></code> | <code>java.lang.String</code> | Information to attach to all events related to the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A descriptive label that is associated with matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.flexMatchMode">flexMatchMode</a></code> | <code>java.lang.String</code> | Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameProperties">gameProperties</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>></code> | A set of custom properties for a game session, formatted as key:value pairs. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameSessionData">gameSessionData</a></code> | <code>java.lang.String</code> | A set of custom game session properties, formatted as a single string value. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameSessionQueueArns">gameSessionQueueArns</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.notificationTarget">notificationTarget</a></code> | <code>java.lang.String</code> | An SNS topic ARN that is set up to receive matchmaking notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.ruleSetArn">ruleSetArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceptanceRequired`<sup>Required</sup> <a name="acceptanceRequired" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.acceptanceRequired"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that indicates whether a match that was created with this configuration must be accepted by the matched players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#acceptance_required GameliftMatchmakingConfiguration#acceptance_required}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique identifier for the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#name GameliftMatchmakingConfiguration#name}

---

##### `requestTimeoutSeconds`<sup>Required</sup> <a name="requestTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.requestTimeoutSeconds"></a>

- *Type:* java.lang.Number

The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#request_timeout_seconds GameliftMatchmakingConfiguration#request_timeout_seconds}

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.ruleSetName"></a>

- *Type:* java.lang.String

A unique identifier for the matchmaking rule set to use with this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#rule_set_name GameliftMatchmakingConfiguration#rule_set_name}

---

##### `acceptanceTimeoutSeconds`<sup>Optional</sup> <a name="acceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.acceptanceTimeoutSeconds"></a>

- *Type:* java.lang.Number

The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#acceptance_timeout_seconds GameliftMatchmakingConfiguration#acceptance_timeout_seconds}

---

##### `additionalPlayerCount`<sup>Optional</sup> <a name="additionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.additionalPlayerCount"></a>

- *Type:* java.lang.Number

The number of player slots in a match to keep open for future players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#additional_player_count GameliftMatchmakingConfiguration#additional_player_count}

---

##### `backfillMode`<sup>Optional</sup> <a name="backfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.backfillMode"></a>

- *Type:* java.lang.String

The method used to backfill game sessions created with this matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#backfill_mode GameliftMatchmakingConfiguration#backfill_mode}

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.creationTime"></a>

- *Type:* java.lang.String

A time stamp indicating when this data object was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#creation_time GameliftMatchmakingConfiguration#creation_time}

---

##### `customEventData`<sup>Optional</sup> <a name="customEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.customEventData"></a>

- *Type:* java.lang.String

Information to attach to all events related to the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#custom_event_data GameliftMatchmakingConfiguration#custom_event_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A descriptive label that is associated with matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#description GameliftMatchmakingConfiguration#description}

---

##### `flexMatchMode`<sup>Optional</sup> <a name="flexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.flexMatchMode"></a>

- *Type:* java.lang.String

Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#flex_match_mode GameliftMatchmakingConfiguration#flex_match_mode}

---

##### `gameProperties`<sup>Optional</sup> <a name="gameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameProperties"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>>

A set of custom properties for a game session, formatted as key:value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#game_properties GameliftMatchmakingConfiguration#game_properties}

---

##### `gameSessionData`<sup>Optional</sup> <a name="gameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameSessionData"></a>

- *Type:* java.lang.String

A set of custom game session properties, formatted as a single string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#game_session_data GameliftMatchmakingConfiguration#game_session_data}

---

##### `gameSessionQueueArns`<sup>Optional</sup> <a name="gameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.gameSessionQueueArns"></a>

- *Type:* java.util.List<java.lang.String>

The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#game_session_queue_arns GameliftMatchmakingConfiguration#game_session_queue_arns}

---

##### `notificationTarget`<sup>Optional</sup> <a name="notificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.notificationTarget"></a>

- *Type:* java.lang.String

An SNS topic ARN that is set up to receive matchmaking notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#notification_target GameliftMatchmakingConfiguration#notification_target}

---

##### `ruleSetArn`<sup>Optional</sup> <a name="ruleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.ruleSetArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#rule_set_arn GameliftMatchmakingConfiguration#rule_set_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#tags GameliftMatchmakingConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties">putGameProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAcceptanceTimeoutSeconds">resetAcceptanceTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAdditionalPlayerCount">resetAdditionalPlayerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetBackfillMode">resetBackfillMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCustomEventData">resetCustomEventData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetFlexMatchMode">resetFlexMatchMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameProperties">resetGameProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionData">resetGameSessionData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionQueueArns">resetGameSessionQueueArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetNotificationTarget">resetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetRuleSetArn">resetRuleSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGameProperties` <a name="putGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties"></a>

```java
public void putGameProperties(IResolvable|java.util.List<GameliftMatchmakingConfigurationGameProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GameliftMatchmakingConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>>

---

##### `resetAcceptanceTimeoutSeconds` <a name="resetAcceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAcceptanceTimeoutSeconds"></a>

```java
public void resetAcceptanceTimeoutSeconds()
```

##### `resetAdditionalPlayerCount` <a name="resetAdditionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAdditionalPlayerCount"></a>

```java
public void resetAdditionalPlayerCount()
```

##### `resetBackfillMode` <a name="resetBackfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetBackfillMode"></a>

```java
public void resetBackfillMode()
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCreationTime"></a>

```java
public void resetCreationTime()
```

##### `resetCustomEventData` <a name="resetCustomEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCustomEventData"></a>

```java
public void resetCustomEventData()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFlexMatchMode` <a name="resetFlexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetFlexMatchMode"></a>

```java
public void resetFlexMatchMode()
```

##### `resetGameProperties` <a name="resetGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameProperties"></a>

```java
public void resetGameProperties()
```

##### `resetGameSessionData` <a name="resetGameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionData"></a>

```java
public void resetGameSessionData()
```

##### `resetGameSessionQueueArns` <a name="resetGameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionQueueArns"></a>

```java
public void resetGameSessionQueueArns()
```

##### `resetNotificationTarget` <a name="resetNotificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetNotificationTarget"></a>

```java
public void resetNotificationTarget()
```

##### `resetRuleSetArn` <a name="resetRuleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetRuleSetArn"></a>

```java
public void resetRuleSetArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfiguration;

GameliftMatchmakingConfiguration.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfiguration;

GameliftMatchmakingConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfiguration;

GameliftMatchmakingConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfiguration;

GameliftMatchmakingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GameliftMatchmakingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GameliftMatchmakingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GameliftMatchmakingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GameliftMatchmakingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameProperties">gameProperties</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList">GameliftMatchmakingConfigurationGamePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList">GameliftMatchmakingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequiredInput">acceptanceRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSecondsInput">acceptanceTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCountInput">additionalPlayerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillModeInput">backfillModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTimeInput">creationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventDataInput">customEventDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchModeInput">flexMatchModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gamePropertiesInput">gamePropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionDataInput">gameSessionDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArnsInput">gameSessionQueueArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTargetInput">notificationTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSecondsInput">requestTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArnInput">ruleSetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetNameInput">ruleSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequired">acceptanceRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds">acceptanceTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCount">additionalPlayerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillMode">backfillMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventData">customEventData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchMode">flexMatchMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionData">gameSessionData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArns">gameSessionQueueArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTarget">notificationTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSeconds">requestTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArn">ruleSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetName">ruleSetName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `gameProperties`<sup>Required</sup> <a name="gameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameProperties"></a>

```java
public GameliftMatchmakingConfigurationGamePropertiesList getGameProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList">GameliftMatchmakingConfigurationGamePropertiesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tags"></a>

```java
public GameliftMatchmakingConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList">GameliftMatchmakingConfigurationTagsList</a>

---

##### `acceptanceRequiredInput`<sup>Optional</sup> <a name="acceptanceRequiredInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getAcceptanceRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `acceptanceTimeoutSecondsInput`<sup>Optional</sup> <a name="acceptanceTimeoutSecondsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSecondsInput"></a>

```java
public java.lang.Number getAcceptanceTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `additionalPlayerCountInput`<sup>Optional</sup> <a name="additionalPlayerCountInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCountInput"></a>

```java
public java.lang.Number getAdditionalPlayerCountInput();
```

- *Type:* java.lang.Number

---

##### `backfillModeInput`<sup>Optional</sup> <a name="backfillModeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillModeInput"></a>

```java
public java.lang.String getBackfillModeInput();
```

- *Type:* java.lang.String

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTimeInput"></a>

```java
public java.lang.String getCreationTimeInput();
```

- *Type:* java.lang.String

---

##### `customEventDataInput`<sup>Optional</sup> <a name="customEventDataInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventDataInput"></a>

```java
public java.lang.String getCustomEventDataInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `flexMatchModeInput`<sup>Optional</sup> <a name="flexMatchModeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchModeInput"></a>

```java
public java.lang.String getFlexMatchModeInput();
```

- *Type:* java.lang.String

---

##### `gamePropertiesInput`<sup>Optional</sup> <a name="gamePropertiesInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gamePropertiesInput"></a>

```java
public IResolvable|java.util.List<GameliftMatchmakingConfigurationGameProperties> getGamePropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>>

---

##### `gameSessionDataInput`<sup>Optional</sup> <a name="gameSessionDataInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionDataInput"></a>

```java
public java.lang.String getGameSessionDataInput();
```

- *Type:* java.lang.String

---

##### `gameSessionQueueArnsInput`<sup>Optional</sup> <a name="gameSessionQueueArnsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArnsInput"></a>

```java
public java.util.List<java.lang.String> getGameSessionQueueArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationTargetInput`<sup>Optional</sup> <a name="notificationTargetInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTargetInput"></a>

```java
public java.lang.String getNotificationTargetInput();
```

- *Type:* java.lang.String

---

##### `requestTimeoutSecondsInput`<sup>Optional</sup> <a name="requestTimeoutSecondsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSecondsInput"></a>

```java
public java.lang.Number getRequestTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `ruleSetArnInput`<sup>Optional</sup> <a name="ruleSetArnInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArnInput"></a>

```java
public java.lang.String getRuleSetArnInput();
```

- *Type:* java.lang.String

---

##### `ruleSetNameInput`<sup>Optional</sup> <a name="ruleSetNameInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetNameInput"></a>

```java
public java.lang.String getRuleSetNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GameliftMatchmakingConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>>

---

##### `acceptanceRequired`<sup>Required</sup> <a name="acceptanceRequired" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequired"></a>

```java
public java.lang.Boolean|IResolvable getAcceptanceRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `acceptanceTimeoutSeconds`<sup>Required</sup> <a name="acceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds"></a>

```java
public java.lang.Number getAcceptanceTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `additionalPlayerCount`<sup>Required</sup> <a name="additionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCount"></a>

```java
public java.lang.Number getAdditionalPlayerCount();
```

- *Type:* java.lang.Number

---

##### `backfillMode`<sup>Required</sup> <a name="backfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillMode"></a>

```java
public java.lang.String getBackfillMode();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `customEventData`<sup>Required</sup> <a name="customEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventData"></a>

```java
public java.lang.String getCustomEventData();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `flexMatchMode`<sup>Required</sup> <a name="flexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchMode"></a>

```java
public java.lang.String getFlexMatchMode();
```

- *Type:* java.lang.String

---

##### `gameSessionData`<sup>Required</sup> <a name="gameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionData"></a>

```java
public java.lang.String getGameSessionData();
```

- *Type:* java.lang.String

---

##### `gameSessionQueueArns`<sup>Required</sup> <a name="gameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArns"></a>

```java
public java.util.List<java.lang.String> getGameSessionQueueArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationTarget`<sup>Required</sup> <a name="notificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTarget"></a>

```java
public java.lang.String getNotificationTarget();
```

- *Type:* java.lang.String

---

##### `requestTimeoutSeconds`<sup>Required</sup> <a name="requestTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSeconds"></a>

```java
public java.lang.Number getRequestTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `ruleSetArn`<sup>Required</sup> <a name="ruleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArn"></a>

```java
public java.lang.String getRuleSetArn();
```

- *Type:* java.lang.String

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetName"></a>

```java
public java.lang.String getRuleSetName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftMatchmakingConfigurationConfig <a name="GameliftMatchmakingConfigurationConfig" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfigurationConfig;

GameliftMatchmakingConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .acceptanceRequired(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
    .requestTimeoutSeconds(java.lang.Number)
    .ruleSetName(java.lang.String)
//  .acceptanceTimeoutSeconds(java.lang.Number)
//  .additionalPlayerCount(java.lang.Number)
//  .backfillMode(java.lang.String)
//  .creationTime(java.lang.String)
//  .customEventData(java.lang.String)
//  .description(java.lang.String)
//  .flexMatchMode(java.lang.String)
//  .gameProperties(IResolvable|java.util.List<GameliftMatchmakingConfigurationGameProperties>)
//  .gameSessionData(java.lang.String)
//  .gameSessionQueueArns(java.util.List<java.lang.String>)
//  .notificationTarget(java.lang.String)
//  .ruleSetArn(java.lang.String)
//  .tags(IResolvable|java.util.List<GameliftMatchmakingConfigurationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceRequired">acceptanceRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.requestTimeoutSeconds">requestTimeoutSeconds</a></code> | <code>java.lang.Number</code> | The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetName">ruleSetName</a></code> | <code>java.lang.String</code> | A unique identifier for the matchmaking rule set to use with this configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceTimeoutSeconds">acceptanceTimeoutSeconds</a></code> | <code>java.lang.Number</code> | The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.additionalPlayerCount">additionalPlayerCount</a></code> | <code>java.lang.Number</code> | The number of player slots in a match to keep open for future players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.backfillMode">backfillMode</a></code> | <code>java.lang.String</code> | The method used to backfill game sessions created with this matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | A time stamp indicating when this data object was created. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.customEventData">customEventData</a></code> | <code>java.lang.String</code> | Information to attach to all events related to the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.description">description</a></code> | <code>java.lang.String</code> | A descriptive label that is associated with matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.flexMatchMode">flexMatchMode</a></code> | <code>java.lang.String</code> | Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameProperties">gameProperties</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>></code> | A set of custom properties for a game session, formatted as key:value pairs. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionData">gameSessionData</a></code> | <code>java.lang.String</code> | A set of custom game session properties, formatted as a single string value. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionQueueArns">gameSessionQueueArns</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.notificationTarget">notificationTarget</a></code> | <code>java.lang.String</code> | An SNS topic ARN that is set up to receive matchmaking notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetArn">ruleSetArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceptanceRequired`<sup>Required</sup> <a name="acceptanceRequired" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceRequired"></a>

```java
public java.lang.Boolean|IResolvable getAcceptanceRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that indicates whether a match that was created with this configuration must be accepted by the matched players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#acceptance_required GameliftMatchmakingConfiguration#acceptance_required}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique identifier for the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#name GameliftMatchmakingConfiguration#name}

---

##### `requestTimeoutSeconds`<sup>Required</sup> <a name="requestTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.requestTimeoutSeconds"></a>

```java
public java.lang.Number getRequestTimeoutSeconds();
```

- *Type:* java.lang.Number

The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#request_timeout_seconds GameliftMatchmakingConfiguration#request_timeout_seconds}

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetName"></a>

```java
public java.lang.String getRuleSetName();
```

- *Type:* java.lang.String

A unique identifier for the matchmaking rule set to use with this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#rule_set_name GameliftMatchmakingConfiguration#rule_set_name}

---

##### `acceptanceTimeoutSeconds`<sup>Optional</sup> <a name="acceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceTimeoutSeconds"></a>

```java
public java.lang.Number getAcceptanceTimeoutSeconds();
```

- *Type:* java.lang.Number

The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#acceptance_timeout_seconds GameliftMatchmakingConfiguration#acceptance_timeout_seconds}

---

##### `additionalPlayerCount`<sup>Optional</sup> <a name="additionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.additionalPlayerCount"></a>

```java
public java.lang.Number getAdditionalPlayerCount();
```

- *Type:* java.lang.Number

The number of player slots in a match to keep open for future players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#additional_player_count GameliftMatchmakingConfiguration#additional_player_count}

---

##### `backfillMode`<sup>Optional</sup> <a name="backfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.backfillMode"></a>

```java
public java.lang.String getBackfillMode();
```

- *Type:* java.lang.String

The method used to backfill game sessions created with this matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#backfill_mode GameliftMatchmakingConfiguration#backfill_mode}

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

A time stamp indicating when this data object was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#creation_time GameliftMatchmakingConfiguration#creation_time}

---

##### `customEventData`<sup>Optional</sup> <a name="customEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.customEventData"></a>

```java
public java.lang.String getCustomEventData();
```

- *Type:* java.lang.String

Information to attach to all events related to the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#custom_event_data GameliftMatchmakingConfiguration#custom_event_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A descriptive label that is associated with matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#description GameliftMatchmakingConfiguration#description}

---

##### `flexMatchMode`<sup>Optional</sup> <a name="flexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.flexMatchMode"></a>

```java
public java.lang.String getFlexMatchMode();
```

- *Type:* java.lang.String

Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#flex_match_mode GameliftMatchmakingConfiguration#flex_match_mode}

---

##### `gameProperties`<sup>Optional</sup> <a name="gameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameProperties"></a>

```java
public IResolvable|java.util.List<GameliftMatchmakingConfigurationGameProperties> getGameProperties();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>>

A set of custom properties for a game session, formatted as key:value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#game_properties GameliftMatchmakingConfiguration#game_properties}

---

##### `gameSessionData`<sup>Optional</sup> <a name="gameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionData"></a>

```java
public java.lang.String getGameSessionData();
```

- *Type:* java.lang.String

A set of custom game session properties, formatted as a single string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#game_session_data GameliftMatchmakingConfiguration#game_session_data}

---

##### `gameSessionQueueArns`<sup>Optional</sup> <a name="gameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionQueueArns"></a>

```java
public java.util.List<java.lang.String> getGameSessionQueueArns();
```

- *Type:* java.util.List<java.lang.String>

The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#game_session_queue_arns GameliftMatchmakingConfiguration#game_session_queue_arns}

---

##### `notificationTarget`<sup>Optional</sup> <a name="notificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.notificationTarget"></a>

```java
public java.lang.String getNotificationTarget();
```

- *Type:* java.lang.String

An SNS topic ARN that is set up to receive matchmaking notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#notification_target GameliftMatchmakingConfiguration#notification_target}

---

##### `ruleSetArn`<sup>Optional</sup> <a name="ruleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetArn"></a>

```java
public java.lang.String getRuleSetArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#rule_set_arn GameliftMatchmakingConfiguration#rule_set_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GameliftMatchmakingConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#tags GameliftMatchmakingConfiguration#tags}

---

### GameliftMatchmakingConfigurationGameProperties <a name="GameliftMatchmakingConfigurationGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfigurationGameProperties;

GameliftMatchmakingConfigurationGameProperties.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.key">key</a></code> | <code>java.lang.String</code> | The game property identifier. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.value">value</a></code> | <code>java.lang.String</code> | The game property value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The game property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#key GameliftMatchmakingConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The game property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#value GameliftMatchmakingConfiguration#value}

---

### GameliftMatchmakingConfigurationTags <a name="GameliftMatchmakingConfigurationTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfigurationTags;

GameliftMatchmakingConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#key GameliftMatchmakingConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#value GameliftMatchmakingConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftMatchmakingConfigurationGamePropertiesList <a name="GameliftMatchmakingConfigurationGamePropertiesList" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfigurationGamePropertiesList;

new GameliftMatchmakingConfigurationGamePropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get"></a>

```java
public GameliftMatchmakingConfigurationGamePropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftMatchmakingConfigurationGameProperties> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>>

---


### GameliftMatchmakingConfigurationGamePropertiesOutputReference <a name="GameliftMatchmakingConfigurationGamePropertiesOutputReference" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfigurationGamePropertiesOutputReference;

new GameliftMatchmakingConfigurationGamePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftMatchmakingConfigurationGameProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>

---


### GameliftMatchmakingConfigurationTagsList <a name="GameliftMatchmakingConfigurationTagsList" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfigurationTagsList;

new GameliftMatchmakingConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get"></a>

```java
public GameliftMatchmakingConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftMatchmakingConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>>

---


### GameliftMatchmakingConfigurationTagsOutputReference <a name="GameliftMatchmakingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_matchmaking_configuration.GameliftMatchmakingConfigurationTagsOutputReference;

new GameliftMatchmakingConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftMatchmakingConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>

---



