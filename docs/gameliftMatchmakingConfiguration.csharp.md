# `gameliftMatchmakingConfiguration` Submodule <a name="`gameliftMatchmakingConfiguration` Submodule" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftMatchmakingConfiguration <a name="GameliftMatchmakingConfiguration" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration awscc_gamelift_matchmaking_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftMatchmakingConfiguration(Construct Scope, string Id, GameliftMatchmakingConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig">GameliftMatchmakingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig">GameliftMatchmakingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties">PutGameProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAcceptanceTimeoutSeconds">ResetAcceptanceTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAdditionalPlayerCount">ResetAdditionalPlayerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetBackfillMode">ResetBackfillMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCustomEventData">ResetCustomEventData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetFlexMatchMode">ResetFlexMatchMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameProperties">ResetGameProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionData">ResetGameSessionData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionQueueArns">ResetGameSessionQueueArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetNotificationTarget">ResetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetRuleSetArn">ResetRuleSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGameProperties` <a name="PutGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties"></a>

```csharp
private void PutGameProperties(IResolvable|GameliftMatchmakingConfigurationGameProperties[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|GameliftMatchmakingConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]

---

##### `ResetAcceptanceTimeoutSeconds` <a name="ResetAcceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAcceptanceTimeoutSeconds"></a>

```csharp
private void ResetAcceptanceTimeoutSeconds()
```

##### `ResetAdditionalPlayerCount` <a name="ResetAdditionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAdditionalPlayerCount"></a>

```csharp
private void ResetAdditionalPlayerCount()
```

##### `ResetBackfillMode` <a name="ResetBackfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetBackfillMode"></a>

```csharp
private void ResetBackfillMode()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCreationTime"></a>

```csharp
private void ResetCreationTime()
```

##### `ResetCustomEventData` <a name="ResetCustomEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCustomEventData"></a>

```csharp
private void ResetCustomEventData()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFlexMatchMode` <a name="ResetFlexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetFlexMatchMode"></a>

```csharp
private void ResetFlexMatchMode()
```

##### `ResetGameProperties` <a name="ResetGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameProperties"></a>

```csharp
private void ResetGameProperties()
```

##### `ResetGameSessionData` <a name="ResetGameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionData"></a>

```csharp
private void ResetGameSessionData()
```

##### `ResetGameSessionQueueArns` <a name="ResetGameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionQueueArns"></a>

```csharp
private void ResetGameSessionQueueArns()
```

##### `ResetNotificationTarget` <a name="ResetNotificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetNotificationTarget"></a>

```csharp
private void ResetNotificationTarget()
```

##### `ResetRuleSetArn` <a name="ResetRuleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetRuleSetArn"></a>

```csharp
private void ResetRuleSetArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftMatchmakingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftMatchmakingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftMatchmakingConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftMatchmakingConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GameliftMatchmakingConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GameliftMatchmakingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GameliftMatchmakingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameProperties">GameProperties</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList">GameliftMatchmakingConfigurationGamePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList">GameliftMatchmakingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequiredInput">AcceptanceRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSecondsInput">AcceptanceTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCountInput">AdditionalPlayerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillModeInput">BackfillModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTimeInput">CreationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventDataInput">CustomEventDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchModeInput">FlexMatchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gamePropertiesInput">GamePropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionDataInput">GameSessionDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArnsInput">GameSessionQueueArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTargetInput">NotificationTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSecondsInput">RequestTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArnInput">RuleSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetNameInput">RuleSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequired">AcceptanceRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds">AcceptanceTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCount">AdditionalPlayerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillMode">BackfillMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventData">CustomEventData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchMode">FlexMatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionData">GameSessionData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArns">GameSessionQueueArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTarget">NotificationTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSeconds">RequestTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArn">RuleSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetName">RuleSetName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `GameProperties`<sup>Required</sup> <a name="GameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameProperties"></a>

```csharp
public GameliftMatchmakingConfigurationGamePropertiesList GameProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList">GameliftMatchmakingConfigurationGamePropertiesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tags"></a>

```csharp
public GameliftMatchmakingConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList">GameliftMatchmakingConfigurationTagsList</a>

---

##### `AcceptanceRequiredInput`<sup>Optional</sup> <a name="AcceptanceRequiredInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequiredInput"></a>

```csharp
public bool|IResolvable AcceptanceRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AcceptanceTimeoutSecondsInput`<sup>Optional</sup> <a name="AcceptanceTimeoutSecondsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSecondsInput"></a>

```csharp
public double AcceptanceTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `AdditionalPlayerCountInput`<sup>Optional</sup> <a name="AdditionalPlayerCountInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCountInput"></a>

```csharp
public double AdditionalPlayerCountInput { get; }
```

- *Type:* double

---

##### `BackfillModeInput`<sup>Optional</sup> <a name="BackfillModeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillModeInput"></a>

```csharp
public string BackfillModeInput { get; }
```

- *Type:* string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTimeInput"></a>

```csharp
public string CreationTimeInput { get; }
```

- *Type:* string

---

##### `CustomEventDataInput`<sup>Optional</sup> <a name="CustomEventDataInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventDataInput"></a>

```csharp
public string CustomEventDataInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FlexMatchModeInput`<sup>Optional</sup> <a name="FlexMatchModeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchModeInput"></a>

```csharp
public string FlexMatchModeInput { get; }
```

- *Type:* string

---

##### `GamePropertiesInput`<sup>Optional</sup> <a name="GamePropertiesInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gamePropertiesInput"></a>

```csharp
public IResolvable|GameliftMatchmakingConfigurationGameProperties[] GamePropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]

---

##### `GameSessionDataInput`<sup>Optional</sup> <a name="GameSessionDataInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionDataInput"></a>

```csharp
public string GameSessionDataInput { get; }
```

- *Type:* string

---

##### `GameSessionQueueArnsInput`<sup>Optional</sup> <a name="GameSessionQueueArnsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArnsInput"></a>

```csharp
public string[] GameSessionQueueArnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationTargetInput`<sup>Optional</sup> <a name="NotificationTargetInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTargetInput"></a>

```csharp
public string NotificationTargetInput { get; }
```

- *Type:* string

---

##### `RequestTimeoutSecondsInput`<sup>Optional</sup> <a name="RequestTimeoutSecondsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSecondsInput"></a>

```csharp
public double RequestTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `RuleSetArnInput`<sup>Optional</sup> <a name="RuleSetArnInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArnInput"></a>

```csharp
public string RuleSetArnInput { get; }
```

- *Type:* string

---

##### `RuleSetNameInput`<sup>Optional</sup> <a name="RuleSetNameInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetNameInput"></a>

```csharp
public string RuleSetNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|GameliftMatchmakingConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]

---

##### `AcceptanceRequired`<sup>Required</sup> <a name="AcceptanceRequired" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequired"></a>

```csharp
public bool|IResolvable AcceptanceRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AcceptanceTimeoutSeconds`<sup>Required</sup> <a name="AcceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds"></a>

```csharp
public double AcceptanceTimeoutSeconds { get; }
```

- *Type:* double

---

##### `AdditionalPlayerCount`<sup>Required</sup> <a name="AdditionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCount"></a>

```csharp
public double AdditionalPlayerCount { get; }
```

- *Type:* double

---

##### `BackfillMode`<sup>Required</sup> <a name="BackfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillMode"></a>

```csharp
public string BackfillMode { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CustomEventData`<sup>Required</sup> <a name="CustomEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventData"></a>

```csharp
public string CustomEventData { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FlexMatchMode`<sup>Required</sup> <a name="FlexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchMode"></a>

```csharp
public string FlexMatchMode { get; }
```

- *Type:* string

---

##### `GameSessionData`<sup>Required</sup> <a name="GameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionData"></a>

```csharp
public string GameSessionData { get; }
```

- *Type:* string

---

##### `GameSessionQueueArns`<sup>Required</sup> <a name="GameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArns"></a>

```csharp
public string[] GameSessionQueueArns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationTarget`<sup>Required</sup> <a name="NotificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTarget"></a>

```csharp
public string NotificationTarget { get; }
```

- *Type:* string

---

##### `RequestTimeoutSeconds`<sup>Required</sup> <a name="RequestTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSeconds"></a>

```csharp
public double RequestTimeoutSeconds { get; }
```

- *Type:* double

---

##### `RuleSetArn`<sup>Required</sup> <a name="RuleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArn"></a>

```csharp
public string RuleSetArn { get; }
```

- *Type:* string

---

##### `RuleSetName`<sup>Required</sup> <a name="RuleSetName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetName"></a>

```csharp
public string RuleSetName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftMatchmakingConfigurationConfig <a name="GameliftMatchmakingConfigurationConfig" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftMatchmakingConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AcceptanceRequired,
    string Name,
    double RequestTimeoutSeconds,
    string RuleSetName,
    double AcceptanceTimeoutSeconds = null,
    double AdditionalPlayerCount = null,
    string BackfillMode = null,
    string CreationTime = null,
    string CustomEventData = null,
    string Description = null,
    string FlexMatchMode = null,
    IResolvable|GameliftMatchmakingConfigurationGameProperties[] GameProperties = null,
    string GameSessionData = null,
    string[] GameSessionQueueArns = null,
    string NotificationTarget = null,
    string RuleSetArn = null,
    IResolvable|GameliftMatchmakingConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceRequired">AcceptanceRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.name">Name</a></code> | <code>string</code> | A unique identifier for the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.requestTimeoutSeconds">RequestTimeoutSeconds</a></code> | <code>double</code> | The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetName">RuleSetName</a></code> | <code>string</code> | A unique identifier for the matchmaking rule set to use with this configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceTimeoutSeconds">AcceptanceTimeoutSeconds</a></code> | <code>double</code> | The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.additionalPlayerCount">AdditionalPlayerCount</a></code> | <code>double</code> | The number of player slots in a match to keep open for future players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.backfillMode">BackfillMode</a></code> | <code>string</code> | The method used to backfill game sessions created with this matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.creationTime">CreationTime</a></code> | <code>string</code> | A time stamp indicating when this data object was created. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.customEventData">CustomEventData</a></code> | <code>string</code> | Information to attach to all events related to the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.description">Description</a></code> | <code>string</code> | A descriptive label that is associated with matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.flexMatchMode">FlexMatchMode</a></code> | <code>string</code> | Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameProperties">GameProperties</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]</code> | A set of custom properties for a game session, formatted as key:value pairs. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionData">GameSessionData</a></code> | <code>string</code> | A set of custom game session properties, formatted as a single string value. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionQueueArns">GameSessionQueueArns</a></code> | <code>string[]</code> | The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.notificationTarget">NotificationTarget</a></code> | <code>string</code> | An SNS topic ARN that is set up to receive matchmaking notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetArn">RuleSetArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcceptanceRequired`<sup>Required</sup> <a name="AcceptanceRequired" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceRequired"></a>

```csharp
public bool|IResolvable AcceptanceRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag that indicates whether a match that was created with this configuration must be accepted by the matched players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#acceptance_required GameliftMatchmakingConfiguration#acceptance_required}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique identifier for the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#name GameliftMatchmakingConfiguration#name}

---

##### `RequestTimeoutSeconds`<sup>Required</sup> <a name="RequestTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.requestTimeoutSeconds"></a>

```csharp
public double RequestTimeoutSeconds { get; set; }
```

- *Type:* double

The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#request_timeout_seconds GameliftMatchmakingConfiguration#request_timeout_seconds}

---

##### `RuleSetName`<sup>Required</sup> <a name="RuleSetName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetName"></a>

```csharp
public string RuleSetName { get; set; }
```

- *Type:* string

A unique identifier for the matchmaking rule set to use with this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#rule_set_name GameliftMatchmakingConfiguration#rule_set_name}

---

##### `AcceptanceTimeoutSeconds`<sup>Optional</sup> <a name="AcceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceTimeoutSeconds"></a>

```csharp
public double AcceptanceTimeoutSeconds { get; set; }
```

- *Type:* double

The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#acceptance_timeout_seconds GameliftMatchmakingConfiguration#acceptance_timeout_seconds}

---

##### `AdditionalPlayerCount`<sup>Optional</sup> <a name="AdditionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.additionalPlayerCount"></a>

```csharp
public double AdditionalPlayerCount { get; set; }
```

- *Type:* double

The number of player slots in a match to keep open for future players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#additional_player_count GameliftMatchmakingConfiguration#additional_player_count}

---

##### `BackfillMode`<sup>Optional</sup> <a name="BackfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.backfillMode"></a>

```csharp
public string BackfillMode { get; set; }
```

- *Type:* string

The method used to backfill game sessions created with this matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#backfill_mode GameliftMatchmakingConfiguration#backfill_mode}

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.creationTime"></a>

```csharp
public string CreationTime { get; set; }
```

- *Type:* string

A time stamp indicating when this data object was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#creation_time GameliftMatchmakingConfiguration#creation_time}

---

##### `CustomEventData`<sup>Optional</sup> <a name="CustomEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.customEventData"></a>

```csharp
public string CustomEventData { get; set; }
```

- *Type:* string

Information to attach to all events related to the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#custom_event_data GameliftMatchmakingConfiguration#custom_event_data}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A descriptive label that is associated with matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#description GameliftMatchmakingConfiguration#description}

---

##### `FlexMatchMode`<sup>Optional</sup> <a name="FlexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.flexMatchMode"></a>

```csharp
public string FlexMatchMode { get; set; }
```

- *Type:* string

Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#flex_match_mode GameliftMatchmakingConfiguration#flex_match_mode}

---

##### `GameProperties`<sup>Optional</sup> <a name="GameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameProperties"></a>

```csharp
public IResolvable|GameliftMatchmakingConfigurationGameProperties[] GameProperties { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]

A set of custom properties for a game session, formatted as key:value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#game_properties GameliftMatchmakingConfiguration#game_properties}

---

##### `GameSessionData`<sup>Optional</sup> <a name="GameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionData"></a>

```csharp
public string GameSessionData { get; set; }
```

- *Type:* string

A set of custom game session properties, formatted as a single string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#game_session_data GameliftMatchmakingConfiguration#game_session_data}

---

##### `GameSessionQueueArns`<sup>Optional</sup> <a name="GameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionQueueArns"></a>

```csharp
public string[] GameSessionQueueArns { get; set; }
```

- *Type:* string[]

The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#game_session_queue_arns GameliftMatchmakingConfiguration#game_session_queue_arns}

---

##### `NotificationTarget`<sup>Optional</sup> <a name="NotificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.notificationTarget"></a>

```csharp
public string NotificationTarget { get; set; }
```

- *Type:* string

An SNS topic ARN that is set up to receive matchmaking notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#notification_target GameliftMatchmakingConfiguration#notification_target}

---

##### `RuleSetArn`<sup>Optional</sup> <a name="RuleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetArn"></a>

```csharp
public string RuleSetArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#rule_set_arn GameliftMatchmakingConfiguration#rule_set_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|GameliftMatchmakingConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#tags GameliftMatchmakingConfiguration#tags}

---

### GameliftMatchmakingConfigurationGameProperties <a name="GameliftMatchmakingConfigurationGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftMatchmakingConfigurationGameProperties {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.key">Key</a></code> | <code>string</code> | The game property identifier. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.value">Value</a></code> | <code>string</code> | The game property value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The game property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#key GameliftMatchmakingConfiguration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The game property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#value GameliftMatchmakingConfiguration#value}

---

### GameliftMatchmakingConfigurationTags <a name="GameliftMatchmakingConfigurationTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftMatchmakingConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#key GameliftMatchmakingConfiguration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_matchmaking_configuration#value GameliftMatchmakingConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftMatchmakingConfigurationGamePropertiesList <a name="GameliftMatchmakingConfigurationGamePropertiesList" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftMatchmakingConfigurationGamePropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get"></a>

```csharp
private GameliftMatchmakingConfigurationGamePropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.internalValue"></a>

```csharp
public IResolvable|GameliftMatchmakingConfigurationGameProperties[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]

---


### GameliftMatchmakingConfigurationGamePropertiesOutputReference <a name="GameliftMatchmakingConfigurationGamePropertiesOutputReference" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftMatchmakingConfigurationGamePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftMatchmakingConfigurationGameProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>

---


### GameliftMatchmakingConfigurationTagsList <a name="GameliftMatchmakingConfigurationTagsList" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftMatchmakingConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get"></a>

```csharp
private GameliftMatchmakingConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|GameliftMatchmakingConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]

---


### GameliftMatchmakingConfigurationTagsOutputReference <a name="GameliftMatchmakingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftMatchmakingConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftMatchmakingConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>

---



