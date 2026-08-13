# `gameliftGameSessionQueue` Submodule <a name="`gameliftGameSessionQueue` Submodule" id="@cdktn/provider-awscc.gameliftGameSessionQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameSessionQueue <a name="GameliftGameSessionQueue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue awscc_gamelift_game_session_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueue;

GameliftGameSessionQueue.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .customEventData(java.lang.String)
//  .destinations(IResolvable|java.util.List<GameliftGameSessionQueueDestinations>)
//  .filterConfiguration(GameliftGameSessionQueueFilterConfiguration)
//  .notificationTarget(java.lang.String)
//  .playerLatencyPolicies(IResolvable|java.util.List<GameliftGameSessionQueuePlayerLatencyPolicies>)
//  .priorityConfiguration(GameliftGameSessionQueuePriorityConfiguration)
//  .tags(IResolvable|java.util.List<GameliftGameSessionQueueTags>)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A descriptive label that is associated with game session queue. Queue names must be unique within each Region. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.customEventData">customEventData</a></code> | <code>java.lang.String</code> | Information that is added to all events that are related to this game session queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>></code> | A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | A list of locations where a queue is allowed to place new game sessions. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.notificationTarget">notificationTarget</a></code> | <code>java.lang.String</code> | An SNS topic ARN that is set up to receive game session placement notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.playerLatencyPolicies">playerLatencyPolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>></code> | A set of policies that act as a sliding cap on player latency. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.priorityConfiguration">priorityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | Custom settings to use when prioritizing destinations and locations for game session placements. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | The maximum time, in seconds, that a new game session placement request remains in the queue. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A descriptive label that is associated with game session queue. Queue names must be unique within each Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#name GameliftGameSessionQueue#name}

---

##### `customEventData`<sup>Optional</sup> <a name="customEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.customEventData"></a>

- *Type:* java.lang.String

Information that is added to all events that are related to this game session queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#custom_event_data GameliftGameSessionQueue#custom_event_data}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.destinations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>>

A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}

---

##### `filterConfiguration`<sup>Optional</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.filterConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

A list of locations where a queue is allowed to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#filter_configuration GameliftGameSessionQueue#filter_configuration}

---

##### `notificationTarget`<sup>Optional</sup> <a name="notificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.notificationTarget"></a>

- *Type:* java.lang.String

An SNS topic ARN that is set up to receive game session placement notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}

---

##### `playerLatencyPolicies`<sup>Optional</sup> <a name="playerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.playerLatencyPolicies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>>

A set of policies that act as a sliding cap on player latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#player_latency_policies GameliftGameSessionQueue#player_latency_policies}

---

##### `priorityConfiguration`<sup>Optional</sup> <a name="priorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.priorityConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

Custom settings to use when prioritizing destinations and locations for game session placements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#priority_configuration GameliftGameSessionQueue#priority_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.timeoutInSeconds"></a>

- *Type:* java.lang.Number

The maximum time, in seconds, that a new game session placement request remains in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration">putFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies">putPlayerLatencyPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration">putPriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetCustomEventData">resetCustomEventData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetFilterConfiguration">resetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget">resetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicies">resetPlayerLatencyPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPriorityConfiguration">resetPriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<GameliftGameSessionQueueDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>>

---

##### `putFilterConfiguration` <a name="putFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration"></a>

```java
public void putFilterConfiguration(GameliftGameSessionQueueFilterConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---

##### `putPlayerLatencyPolicies` <a name="putPlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies"></a>

```java
public void putPlayerLatencyPolicies(IResolvable|java.util.List<GameliftGameSessionQueuePlayerLatencyPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>>

---

##### `putPriorityConfiguration` <a name="putPriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration"></a>

```java
public void putPriorityConfiguration(GameliftGameSessionQueuePriorityConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GameliftGameSessionQueueTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>>

---

##### `resetCustomEventData` <a name="resetCustomEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetCustomEventData"></a>

```java
public void resetCustomEventData()
```

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetFilterConfiguration` <a name="resetFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetFilterConfiguration"></a>

```java
public void resetFilterConfiguration()
```

##### `resetNotificationTarget` <a name="resetNotificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget"></a>

```java
public void resetNotificationTarget()
```

##### `resetPlayerLatencyPolicies` <a name="resetPlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicies"></a>

```java
public void resetPlayerLatencyPolicies()
```

##### `resetPriorityConfiguration` <a name="resetPriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPriorityConfiguration"></a>

```java
public void resetPriorityConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftGameSessionQueue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueue;

GameliftGameSessionQueue.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueue;

GameliftGameSessionQueue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueue;

GameliftGameSessionQueue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueue;

GameliftGameSessionQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GameliftGameSessionQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GameliftGameSessionQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GameliftGameSessionQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GameliftGameSessionQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GameliftGameSessionQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList">GameliftGameSessionQueueDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference">GameliftGameSessionQueueFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicies">playerLatencyPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList">GameliftGameSessionQueuePlayerLatencyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfiguration">priorityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference">GameliftGameSessionQueuePriorityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList">GameliftGameSessionQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventDataInput">customEventDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfigurationInput">filterConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput">notificationTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPoliciesInput">playerLatencyPoliciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfigurationInput">priorityConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventData">customEventData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget">notificationTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations"></a>

```java
public GameliftGameSessionQueueDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList">GameliftGameSessionQueueDestinationsList</a>

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfiguration"></a>

```java
public GameliftGameSessionQueueFilterConfigurationOutputReference getFilterConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference">GameliftGameSessionQueueFilterConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `playerLatencyPolicies`<sup>Required</sup> <a name="playerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicies"></a>

```java
public GameliftGameSessionQueuePlayerLatencyPoliciesList getPlayerLatencyPolicies();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList">GameliftGameSessionQueuePlayerLatencyPoliciesList</a>

---

##### `priorityConfiguration`<sup>Required</sup> <a name="priorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfiguration"></a>

```java
public GameliftGameSessionQueuePriorityConfigurationOutputReference getPriorityConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference">GameliftGameSessionQueuePriorityConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags"></a>

```java
public GameliftGameSessionQueueTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList">GameliftGameSessionQueueTagsList</a>

---

##### `customEventDataInput`<sup>Optional</sup> <a name="customEventDataInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventDataInput"></a>

```java
public java.lang.String getCustomEventDataInput();
```

- *Type:* java.lang.String

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<GameliftGameSessionQueueDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>>

---

##### `filterConfigurationInput`<sup>Optional</sup> <a name="filterConfigurationInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfigurationInput"></a>

```java
public IResolvable|GameliftGameSessionQueueFilterConfiguration getFilterConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationTargetInput`<sup>Optional</sup> <a name="notificationTargetInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput"></a>

```java
public java.lang.String getNotificationTargetInput();
```

- *Type:* java.lang.String

---

##### `playerLatencyPoliciesInput`<sup>Optional</sup> <a name="playerLatencyPoliciesInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPoliciesInput"></a>

```java
public IResolvable|java.util.List<GameliftGameSessionQueuePlayerLatencyPolicies> getPlayerLatencyPoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>>

---

##### `priorityConfigurationInput`<sup>Optional</sup> <a name="priorityConfigurationInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfigurationInput"></a>

```java
public IResolvable|GameliftGameSessionQueuePriorityConfiguration getPriorityConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GameliftGameSessionQueueTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>>

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `customEventData`<sup>Required</sup> <a name="customEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventData"></a>

```java
public java.lang.String getCustomEventData();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationTarget`<sup>Required</sup> <a name="notificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget"></a>

```java
public java.lang.String getNotificationTarget();
```

- *Type:* java.lang.String

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameSessionQueueConfig <a name="GameliftGameSessionQueueConfig" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueueConfig;

GameliftGameSessionQueueConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .customEventData(java.lang.String)
//  .destinations(IResolvable|java.util.List<GameliftGameSessionQueueDestinations>)
//  .filterConfiguration(GameliftGameSessionQueueFilterConfiguration)
//  .notificationTarget(java.lang.String)
//  .playerLatencyPolicies(IResolvable|java.util.List<GameliftGameSessionQueuePlayerLatencyPolicies>)
//  .priorityConfiguration(GameliftGameSessionQueuePriorityConfiguration)
//  .tags(IResolvable|java.util.List<GameliftGameSessionQueueTags>)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name">name</a></code> | <code>java.lang.String</code> | A descriptive label that is associated with game session queue. Queue names must be unique within each Region. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.customEventData">customEventData</a></code> | <code>java.lang.String</code> | Information that is added to all events that are related to this game session queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>></code> | A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | A list of locations where a queue is allowed to place new game sessions. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget">notificationTarget</a></code> | <code>java.lang.String</code> | An SNS topic ARN that is set up to receive game session placement notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicies">playerLatencyPolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>></code> | A set of policies that act as a sliding cap on player latency. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.priorityConfiguration">priorityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | Custom settings to use when prioritizing destinations and locations for game session placements. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | The maximum time, in seconds, that a new game session placement request remains in the queue. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A descriptive label that is associated with game session queue. Queue names must be unique within each Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#name GameliftGameSessionQueue#name}

---

##### `customEventData`<sup>Optional</sup> <a name="customEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.customEventData"></a>

```java
public java.lang.String getCustomEventData();
```

- *Type:* java.lang.String

Information that is added to all events that are related to this game session queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#custom_event_data GameliftGameSessionQueue#custom_event_data}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations"></a>

```java
public IResolvable|java.util.List<GameliftGameSessionQueueDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>>

A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}

---

##### `filterConfiguration`<sup>Optional</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.filterConfiguration"></a>

```java
public GameliftGameSessionQueueFilterConfiguration getFilterConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

A list of locations where a queue is allowed to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#filter_configuration GameliftGameSessionQueue#filter_configuration}

---

##### `notificationTarget`<sup>Optional</sup> <a name="notificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget"></a>

```java
public java.lang.String getNotificationTarget();
```

- *Type:* java.lang.String

An SNS topic ARN that is set up to receive game session placement notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}

---

##### `playerLatencyPolicies`<sup>Optional</sup> <a name="playerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicies"></a>

```java
public IResolvable|java.util.List<GameliftGameSessionQueuePlayerLatencyPolicies> getPlayerLatencyPolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>>

A set of policies that act as a sliding cap on player latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#player_latency_policies GameliftGameSessionQueue#player_latency_policies}

---

##### `priorityConfiguration`<sup>Optional</sup> <a name="priorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.priorityConfiguration"></a>

```java
public GameliftGameSessionQueuePriorityConfiguration getPriorityConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

Custom settings to use when prioritizing destinations and locations for game session placements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#priority_configuration GameliftGameSessionQueue#priority_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GameliftGameSessionQueueTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

The maximum time, in seconds, that a new game session placement request remains in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}

---

### GameliftGameSessionQueueDestinations <a name="GameliftGameSessionQueueDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueueDestinations;

GameliftGameSessionQueueDestinations.builder()
//  .destinationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#destination_arn GameliftGameSessionQueue#destination_arn}. |

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#destination_arn GameliftGameSessionQueue#destination_arn}.

---

### GameliftGameSessionQueueFilterConfiguration <a name="GameliftGameSessionQueueFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueueFilterConfiguration;

GameliftGameSessionQueueFilterConfiguration.builder()
//  .allowedLocations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.property.allowedLocations">allowedLocations</a></code> | <code>java.util.List<java.lang.String></code> | A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2. |

---

##### `allowedLocations`<sup>Optional</sup> <a name="allowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.property.allowedLocations"></a>

```java
public java.util.List<java.lang.String> getAllowedLocations();
```

- *Type:* java.util.List<java.lang.String>

A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#allowed_locations GameliftGameSessionQueue#allowed_locations}

---

### GameliftGameSessionQueuePlayerLatencyPolicies <a name="GameliftGameSessionQueuePlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueuePlayerLatencyPolicies;

GameliftGameSessionQueuePlayerLatencyPolicies.builder()
//  .maximumIndividualPlayerLatencyMilliseconds(java.lang.Number)
//  .policyDurationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.maximumIndividualPlayerLatencyMilliseconds">maximumIndividualPlayerLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | The maximum latency value that is allowed for any player, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.policyDurationSeconds">policyDurationSeconds</a></code> | <code>java.lang.Number</code> | The length of time, in seconds, that the policy is enforced while placing a new game session. |

---

##### `maximumIndividualPlayerLatencyMilliseconds`<sup>Optional</sup> <a name="maximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```java
public java.lang.Number getMaximumIndividualPlayerLatencyMilliseconds();
```

- *Type:* java.lang.Number

The maximum latency value that is allowed for any player, in milliseconds.

All policies must have a value set for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}

---

##### `policyDurationSeconds`<sup>Optional</sup> <a name="policyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.policyDurationSeconds"></a>

```java
public java.lang.Number getPolicyDurationSeconds();
```

- *Type:* java.lang.Number

The length of time, in seconds, that the policy is enforced while placing a new game session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}

---

### GameliftGameSessionQueuePriorityConfiguration <a name="GameliftGameSessionQueuePriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueuePriorityConfiguration;

GameliftGameSessionQueuePriorityConfiguration.builder()
//  .locationOrder(java.util.List<java.lang.String>)
//  .priorityOrder(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.locationOrder">locationOrder</a></code> | <code>java.util.List<java.lang.String></code> | The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.priorityOrder">priorityOrder</a></code> | <code>java.util.List<java.lang.String></code> | The recommended sequence to use when prioritizing where to place new game sessions. |

---

##### `locationOrder`<sup>Optional</sup> <a name="locationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.locationOrder"></a>

```java
public java.util.List<java.lang.String> getLocationOrder();
```

- *Type:* java.util.List<java.lang.String>

The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#location_order GameliftGameSessionQueue#location_order}

---

##### `priorityOrder`<sup>Optional</sup> <a name="priorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.priorityOrder"></a>

```java
public java.util.List<java.lang.String> getPriorityOrder();
```

- *Type:* java.util.List<java.lang.String>

The recommended sequence to use when prioritizing where to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#priority_order GameliftGameSessionQueue#priority_order}

---

### GameliftGameSessionQueueTags <a name="GameliftGameSessionQueueTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueueTags;

GameliftGameSessionQueueTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#key GameliftGameSessionQueue#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_game_session_queue#value GameliftGameSessionQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameSessionQueueDestinationsList <a name="GameliftGameSessionQueueDestinationsList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueueDestinationsList;

new GameliftGameSessionQueueDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get"></a>

```java
public GameliftGameSessionQueueDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftGameSessionQueueDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>>

---


### GameliftGameSessionQueueDestinationsOutputReference <a name="GameliftGameSessionQueueDestinationsOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueueDestinationsOutputReference;

new GameliftGameSessionQueueDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resetDestinationArn"></a>

```java
public void resetDestinationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArnInput"></a>

```java
public java.lang.String getDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftGameSessionQueueDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>

---


### GameliftGameSessionQueueFilterConfigurationOutputReference <a name="GameliftGameSessionQueueFilterConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueueFilterConfigurationOutputReference;

new GameliftGameSessionQueueFilterConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resetAllowedLocations">resetAllowedLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedLocations` <a name="resetAllowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resetAllowedLocations"></a>

```java
public void resetAllowedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocationsInput">allowedLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations">allowedLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedLocationsInput`<sup>Optional</sup> <a name="allowedLocationsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocationsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedLocations`<sup>Required</sup> <a name="allowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations"></a>

```java
public java.util.List<java.lang.String> getAllowedLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftGameSessionQueueFilterConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---


### GameliftGameSessionQueuePlayerLatencyPoliciesList <a name="GameliftGameSessionQueuePlayerLatencyPoliciesList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueuePlayerLatencyPoliciesList;

new GameliftGameSessionQueuePlayerLatencyPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get"></a>

```java
public GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftGameSessionQueuePlayerLatencyPolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>>

---


### GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference <a name="GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference;

new GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetMaximumIndividualPlayerLatencyMilliseconds">resetMaximumIndividualPlayerLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetPolicyDurationSeconds">resetPolicyDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumIndividualPlayerLatencyMilliseconds` <a name="resetMaximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetMaximumIndividualPlayerLatencyMilliseconds"></a>

```java
public void resetMaximumIndividualPlayerLatencyMilliseconds()
```

##### `resetPolicyDurationSeconds` <a name="resetPolicyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetPolicyDurationSeconds"></a>

```java
public void resetPolicyDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput">maximumIndividualPlayerLatencyMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSecondsInput">policyDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds">maximumIndividualPlayerLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds">policyDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumIndividualPlayerLatencyMillisecondsInput`<sup>Optional</sup> <a name="maximumIndividualPlayerLatencyMillisecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput"></a>

```java
public java.lang.Number getMaximumIndividualPlayerLatencyMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `policyDurationSecondsInput`<sup>Optional</sup> <a name="policyDurationSecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSecondsInput"></a>

```java
public java.lang.Number getPolicyDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maximumIndividualPlayerLatencyMilliseconds`<sup>Required</sup> <a name="maximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```java
public java.lang.Number getMaximumIndividualPlayerLatencyMilliseconds();
```

- *Type:* java.lang.Number

---

##### `policyDurationSeconds`<sup>Required</sup> <a name="policyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds"></a>

```java
public java.lang.Number getPolicyDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftGameSessionQueuePlayerLatencyPolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>

---


### GameliftGameSessionQueuePriorityConfigurationOutputReference <a name="GameliftGameSessionQueuePriorityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueuePriorityConfigurationOutputReference;

new GameliftGameSessionQueuePriorityConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetLocationOrder">resetLocationOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetPriorityOrder">resetPriorityOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocationOrder` <a name="resetLocationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetLocationOrder"></a>

```java
public void resetLocationOrder()
```

##### `resetPriorityOrder` <a name="resetPriorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetPriorityOrder"></a>

```java
public void resetPriorityOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrderInput">locationOrderInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrderInput">priorityOrderInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder">locationOrder</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder">priorityOrder</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationOrderInput`<sup>Optional</sup> <a name="locationOrderInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrderInput"></a>

```java
public java.util.List<java.lang.String> getLocationOrderInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `priorityOrderInput`<sup>Optional</sup> <a name="priorityOrderInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrderInput"></a>

```java
public java.util.List<java.lang.String> getPriorityOrderInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationOrder`<sup>Required</sup> <a name="locationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder"></a>

```java
public java.util.List<java.lang.String> getLocationOrder();
```

- *Type:* java.util.List<java.lang.String>

---

##### `priorityOrder`<sup>Required</sup> <a name="priorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder"></a>

```java
public java.util.List<java.lang.String> getPriorityOrder();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftGameSessionQueuePriorityConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---


### GameliftGameSessionQueueTagsList <a name="GameliftGameSessionQueueTagsList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueueTagsList;

new GameliftGameSessionQueueTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get"></a>

```java
public GameliftGameSessionQueueTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftGameSessionQueueTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>>

---


### GameliftGameSessionQueueTagsOutputReference <a name="GameliftGameSessionQueueTagsOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_game_session_queue.GameliftGameSessionQueueTagsOutputReference;

new GameliftGameSessionQueueTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftGameSessionQueueTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>

---



