# `gameliftGameSessionQueue` Submodule <a name="`gameliftGameSessionQueue` Submodule" id="@cdktn/provider-awscc.gameliftGameSessionQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameSessionQueue <a name="GameliftGameSessionQueue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue awscc_gamelift_game_session_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueue(Construct Scope, string Id, GameliftGameSessionQueueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig">GameliftGameSessionQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig">GameliftGameSessionQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration">PutFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies">PutPlayerLatencyPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration">PutPriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetCustomEventData">ResetCustomEventData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetFilterConfiguration">ResetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget">ResetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicies">ResetPlayerLatencyPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPriorityConfiguration">ResetPriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|GameliftGameSessionQueueDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]

---

##### `PutFilterConfiguration` <a name="PutFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration"></a>

```csharp
private void PutFilterConfiguration(GameliftGameSessionQueueFilterConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---

##### `PutPlayerLatencyPolicies` <a name="PutPlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies"></a>

```csharp
private void PutPlayerLatencyPolicies(IResolvable|GameliftGameSessionQueuePlayerLatencyPolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]

---

##### `PutPriorityConfiguration` <a name="PutPriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration"></a>

```csharp
private void PutPriorityConfiguration(GameliftGameSessionQueuePriorityConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags"></a>

```csharp
private void PutTags(IResolvable|GameliftGameSessionQueueTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]

---

##### `ResetCustomEventData` <a name="ResetCustomEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetCustomEventData"></a>

```csharp
private void ResetCustomEventData()
```

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetFilterConfiguration` <a name="ResetFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetFilterConfiguration"></a>

```csharp
private void ResetFilterConfiguration()
```

##### `ResetNotificationTarget` <a name="ResetNotificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget"></a>

```csharp
private void ResetNotificationTarget()
```

##### `ResetPlayerLatencyPolicies` <a name="ResetPlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicies"></a>

```csharp
private void ResetPlayerLatencyPolicies()
```

##### `ResetPriorityConfiguration` <a name="ResetPriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPriorityConfiguration"></a>

```csharp
private void ResetPriorityConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftGameSessionQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftGameSessionQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftGameSessionQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftGameSessionQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftGameSessionQueue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GameliftGameSessionQueue resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GameliftGameSessionQueue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GameliftGameSessionQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GameliftGameSessionQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList">GameliftGameSessionQueueDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference">GameliftGameSessionQueueFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicies">PlayerLatencyPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList">GameliftGameSessionQueuePlayerLatencyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfiguration">PriorityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference">GameliftGameSessionQueuePriorityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList">GameliftGameSessionQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventDataInput">CustomEventDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfigurationInput">FilterConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput">NotificationTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPoliciesInput">PlayerLatencyPoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfigurationInput">PriorityConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventData">CustomEventData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget">NotificationTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations"></a>

```csharp
public GameliftGameSessionQueueDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList">GameliftGameSessionQueueDestinationsList</a>

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfiguration"></a>

```csharp
public GameliftGameSessionQueueFilterConfigurationOutputReference FilterConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference">GameliftGameSessionQueueFilterConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PlayerLatencyPolicies`<sup>Required</sup> <a name="PlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicies"></a>

```csharp
public GameliftGameSessionQueuePlayerLatencyPoliciesList PlayerLatencyPolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList">GameliftGameSessionQueuePlayerLatencyPoliciesList</a>

---

##### `PriorityConfiguration`<sup>Required</sup> <a name="PriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfiguration"></a>

```csharp
public GameliftGameSessionQueuePriorityConfigurationOutputReference PriorityConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference">GameliftGameSessionQueuePriorityConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags"></a>

```csharp
public GameliftGameSessionQueueTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList">GameliftGameSessionQueueTagsList</a>

---

##### `CustomEventDataInput`<sup>Optional</sup> <a name="CustomEventDataInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventDataInput"></a>

```csharp
public string CustomEventDataInput { get; }
```

- *Type:* string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput"></a>

```csharp
public IResolvable|GameliftGameSessionQueueDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]

---

##### `FilterConfigurationInput`<sup>Optional</sup> <a name="FilterConfigurationInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfigurationInput"></a>

```csharp
public IResolvable|GameliftGameSessionQueueFilterConfiguration FilterConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationTargetInput`<sup>Optional</sup> <a name="NotificationTargetInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput"></a>

```csharp
public string NotificationTargetInput { get; }
```

- *Type:* string

---

##### `PlayerLatencyPoliciesInput`<sup>Optional</sup> <a name="PlayerLatencyPoliciesInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPoliciesInput"></a>

```csharp
public IResolvable|GameliftGameSessionQueuePlayerLatencyPolicies[] PlayerLatencyPoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]

---

##### `PriorityConfigurationInput`<sup>Optional</sup> <a name="PriorityConfigurationInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfigurationInput"></a>

```csharp
public IResolvable|GameliftGameSessionQueuePriorityConfiguration PriorityConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput"></a>

```csharp
public IResolvable|GameliftGameSessionQueueTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `CustomEventData`<sup>Required</sup> <a name="CustomEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventData"></a>

```csharp
public string CustomEventData { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationTarget`<sup>Required</sup> <a name="NotificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget"></a>

```csharp
public string NotificationTarget { get; }
```

- *Type:* string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameSessionQueueConfig <a name="GameliftGameSessionQueueConfig" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueueConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string CustomEventData = null,
    IResolvable|GameliftGameSessionQueueDestinations[] Destinations = null,
    GameliftGameSessionQueueFilterConfiguration FilterConfiguration = null,
    string NotificationTarget = null,
    IResolvable|GameliftGameSessionQueuePlayerLatencyPolicies[] PlayerLatencyPolicies = null,
    GameliftGameSessionQueuePriorityConfiguration PriorityConfiguration = null,
    IResolvable|GameliftGameSessionQueueTags[] Tags = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name">Name</a></code> | <code>string</code> | A descriptive label that is associated with game session queue. Queue names must be unique within each Region. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.customEventData">CustomEventData</a></code> | <code>string</code> | Information that is added to all events that are related to this game session queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]</code> | A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | A list of locations where a queue is allowed to place new game sessions. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget">NotificationTarget</a></code> | <code>string</code> | An SNS topic ARN that is set up to receive game session placement notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicies">PlayerLatencyPolicies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]</code> | A set of policies that act as a sliding cap on player latency. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.priorityConfiguration">PriorityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | Custom settings to use when prioritizing destinations and locations for game session placements. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | The maximum time, in seconds, that a new game session placement request remains in the queue. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A descriptive label that is associated with game session queue. Queue names must be unique within each Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#name GameliftGameSessionQueue#name}

---

##### `CustomEventData`<sup>Optional</sup> <a name="CustomEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.customEventData"></a>

```csharp
public string CustomEventData { get; set; }
```

- *Type:* string

Information that is added to all events that are related to this game session queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#custom_event_data GameliftGameSessionQueue#custom_event_data}

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations"></a>

```csharp
public IResolvable|GameliftGameSessionQueueDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]

A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}

---

##### `FilterConfiguration`<sup>Optional</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.filterConfiguration"></a>

```csharp
public GameliftGameSessionQueueFilterConfiguration FilterConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

A list of locations where a queue is allowed to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#filter_configuration GameliftGameSessionQueue#filter_configuration}

---

##### `NotificationTarget`<sup>Optional</sup> <a name="NotificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget"></a>

```csharp
public string NotificationTarget { get; set; }
```

- *Type:* string

An SNS topic ARN that is set up to receive game session placement notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}

---

##### `PlayerLatencyPolicies`<sup>Optional</sup> <a name="PlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicies"></a>

```csharp
public IResolvable|GameliftGameSessionQueuePlayerLatencyPolicies[] PlayerLatencyPolicies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]

A set of policies that act as a sliding cap on player latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#player_latency_policies GameliftGameSessionQueue#player_latency_policies}

---

##### `PriorityConfiguration`<sup>Optional</sup> <a name="PriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.priorityConfiguration"></a>

```csharp
public GameliftGameSessionQueuePriorityConfiguration PriorityConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

Custom settings to use when prioritizing destinations and locations for game session placements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#priority_configuration GameliftGameSessionQueue#priority_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags"></a>

```csharp
public IResolvable|GameliftGameSessionQueueTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

The maximum time, in seconds, that a new game session placement request remains in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}

---

### GameliftGameSessionQueueDestinations <a name="GameliftGameSessionQueueDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueueDestinations {
    string DestinationArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.property.destinationArn">DestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#destination_arn GameliftGameSessionQueue#destination_arn}. |

---

##### `DestinationArn`<sup>Optional</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.property.destinationArn"></a>

```csharp
public string DestinationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#destination_arn GameliftGameSessionQueue#destination_arn}.

---

### GameliftGameSessionQueueFilterConfiguration <a name="GameliftGameSessionQueueFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueueFilterConfiguration {
    string[] AllowedLocations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.property.allowedLocations">AllowedLocations</a></code> | <code>string[]</code> | A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2. |

---

##### `AllowedLocations`<sup>Optional</sup> <a name="AllowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.property.allowedLocations"></a>

```csharp
public string[] AllowedLocations { get; set; }
```

- *Type:* string[]

A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#allowed_locations GameliftGameSessionQueue#allowed_locations}

---

### GameliftGameSessionQueuePlayerLatencyPolicies <a name="GameliftGameSessionQueuePlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueuePlayerLatencyPolicies {
    double MaximumIndividualPlayerLatencyMilliseconds = null,
    double PolicyDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.maximumIndividualPlayerLatencyMilliseconds">MaximumIndividualPlayerLatencyMilliseconds</a></code> | <code>double</code> | The maximum latency value that is allowed for any player, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.policyDurationSeconds">PolicyDurationSeconds</a></code> | <code>double</code> | The length of time, in seconds, that the policy is enforced while placing a new game session. |

---

##### `MaximumIndividualPlayerLatencyMilliseconds`<sup>Optional</sup> <a name="MaximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```csharp
public double MaximumIndividualPlayerLatencyMilliseconds { get; set; }
```

- *Type:* double

The maximum latency value that is allowed for any player, in milliseconds.

All policies must have a value set for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}

---

##### `PolicyDurationSeconds`<sup>Optional</sup> <a name="PolicyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.policyDurationSeconds"></a>

```csharp
public double PolicyDurationSeconds { get; set; }
```

- *Type:* double

The length of time, in seconds, that the policy is enforced while placing a new game session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}

---

### GameliftGameSessionQueuePriorityConfiguration <a name="GameliftGameSessionQueuePriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueuePriorityConfiguration {
    string[] LocationOrder = null,
    string[] PriorityOrder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.locationOrder">LocationOrder</a></code> | <code>string[]</code> | The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.priorityOrder">PriorityOrder</a></code> | <code>string[]</code> | The recommended sequence to use when prioritizing where to place new game sessions. |

---

##### `LocationOrder`<sup>Optional</sup> <a name="LocationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.locationOrder"></a>

```csharp
public string[] LocationOrder { get; set; }
```

- *Type:* string[]

The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#location_order GameliftGameSessionQueue#location_order}

---

##### `PriorityOrder`<sup>Optional</sup> <a name="PriorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.priorityOrder"></a>

```csharp
public string[] PriorityOrder { get; set; }
```

- *Type:* string[]

The recommended sequence to use when prioritizing where to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#priority_order GameliftGameSessionQueue#priority_order}

---

### GameliftGameSessionQueueTags <a name="GameliftGameSessionQueueTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueueTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#key GameliftGameSessionQueue#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_game_session_queue#value GameliftGameSessionQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameSessionQueueDestinationsList <a name="GameliftGameSessionQueueDestinationsList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueueDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get"></a>

```csharp
private GameliftGameSessionQueueDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|GameliftGameSessionQueueDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]

---


### GameliftGameSessionQueueDestinationsOutputReference <a name="GameliftGameSessionQueueDestinationsOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueueDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resetDestinationArn">ResetDestinationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationArn` <a name="ResetDestinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resetDestinationArn"></a>

```csharp
private void ResetDestinationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArnInput">DestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArnInput"></a>

```csharp
public string DestinationArnInput { get; }
```

- *Type:* string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftGameSessionQueueDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>

---


### GameliftGameSessionQueueFilterConfigurationOutputReference <a name="GameliftGameSessionQueueFilterConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueueFilterConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resetAllowedLocations">ResetAllowedLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedLocations` <a name="ResetAllowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resetAllowedLocations"></a>

```csharp
private void ResetAllowedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocationsInput">AllowedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations">AllowedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedLocationsInput`<sup>Optional</sup> <a name="AllowedLocationsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocationsInput"></a>

```csharp
public string[] AllowedLocationsInput { get; }
```

- *Type:* string[]

---

##### `AllowedLocations`<sup>Required</sup> <a name="AllowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations"></a>

```csharp
public string[] AllowedLocations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftGameSessionQueueFilterConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---


### GameliftGameSessionQueuePlayerLatencyPoliciesList <a name="GameliftGameSessionQueuePlayerLatencyPoliciesList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueuePlayerLatencyPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get"></a>

```csharp
private GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.internalValue"></a>

```csharp
public IResolvable|GameliftGameSessionQueuePlayerLatencyPolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]

---


### GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference <a name="GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetMaximumIndividualPlayerLatencyMilliseconds">ResetMaximumIndividualPlayerLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetPolicyDurationSeconds">ResetPolicyDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumIndividualPlayerLatencyMilliseconds` <a name="ResetMaximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetMaximumIndividualPlayerLatencyMilliseconds"></a>

```csharp
private void ResetMaximumIndividualPlayerLatencyMilliseconds()
```

##### `ResetPolicyDurationSeconds` <a name="ResetPolicyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetPolicyDurationSeconds"></a>

```csharp
private void ResetPolicyDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput">MaximumIndividualPlayerLatencyMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSecondsInput">PolicyDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds">MaximumIndividualPlayerLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds">PolicyDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumIndividualPlayerLatencyMillisecondsInput`<sup>Optional</sup> <a name="MaximumIndividualPlayerLatencyMillisecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput"></a>

```csharp
public double MaximumIndividualPlayerLatencyMillisecondsInput { get; }
```

- *Type:* double

---

##### `PolicyDurationSecondsInput`<sup>Optional</sup> <a name="PolicyDurationSecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSecondsInput"></a>

```csharp
public double PolicyDurationSecondsInput { get; }
```

- *Type:* double

---

##### `MaximumIndividualPlayerLatencyMilliseconds`<sup>Required</sup> <a name="MaximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```csharp
public double MaximumIndividualPlayerLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `PolicyDurationSeconds`<sup>Required</sup> <a name="PolicyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds"></a>

```csharp
public double PolicyDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftGameSessionQueuePlayerLatencyPolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>

---


### GameliftGameSessionQueuePriorityConfigurationOutputReference <a name="GameliftGameSessionQueuePriorityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueuePriorityConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetLocationOrder">ResetLocationOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetPriorityOrder">ResetPriorityOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocationOrder` <a name="ResetLocationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetLocationOrder"></a>

```csharp
private void ResetLocationOrder()
```

##### `ResetPriorityOrder` <a name="ResetPriorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetPriorityOrder"></a>

```csharp
private void ResetPriorityOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrderInput">LocationOrderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrderInput">PriorityOrderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder">LocationOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder">PriorityOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationOrderInput`<sup>Optional</sup> <a name="LocationOrderInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrderInput"></a>

```csharp
public string[] LocationOrderInput { get; }
```

- *Type:* string[]

---

##### `PriorityOrderInput`<sup>Optional</sup> <a name="PriorityOrderInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrderInput"></a>

```csharp
public string[] PriorityOrderInput { get; }
```

- *Type:* string[]

---

##### `LocationOrder`<sup>Required</sup> <a name="LocationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder"></a>

```csharp
public string[] LocationOrder { get; }
```

- *Type:* string[]

---

##### `PriorityOrder`<sup>Required</sup> <a name="PriorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder"></a>

```csharp
public string[] PriorityOrder { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftGameSessionQueuePriorityConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---


### GameliftGameSessionQueueTagsList <a name="GameliftGameSessionQueueTagsList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueueTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get"></a>

```csharp
private GameliftGameSessionQueueTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.internalValue"></a>

```csharp
public IResolvable|GameliftGameSessionQueueTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]

---


### GameliftGameSessionQueueTagsOutputReference <a name="GameliftGameSessionQueueTagsOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftGameSessionQueueTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftGameSessionQueueTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>

---



