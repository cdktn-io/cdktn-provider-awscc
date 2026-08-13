# `ioteventsAlarmModel` Submodule <a name="`ioteventsAlarmModel` Submodule" id="@cdktn/provider-awscc.ioteventsAlarmModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IoteventsAlarmModel <a name="IoteventsAlarmModel" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model awscc_iotevents_alarm_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModel(Construct Scope, string Id, IoteventsAlarmModelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig">IoteventsAlarmModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig">IoteventsAlarmModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities">PutAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions">PutAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule">PutAlarmRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmCapabilities">ResetAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmEventActions">ResetAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelDescription">ResetAlarmModelDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelName">ResetAlarmModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlarmCapabilities` <a name="PutAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities"></a>

```csharp
private void PutAlarmCapabilities(IoteventsAlarmModelAlarmCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---

##### `PutAlarmEventActions` <a name="PutAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions"></a>

```csharp
private void PutAlarmEventActions(IoteventsAlarmModelAlarmEventActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---

##### `PutAlarmRule` <a name="PutAlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule"></a>

```csharp
private void PutAlarmRule(IoteventsAlarmModelAlarmRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags"></a>

```csharp
private void PutTags(IResolvable|IoteventsAlarmModelTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]

---

##### `ResetAlarmCapabilities` <a name="ResetAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmCapabilities"></a>

```csharp
private void ResetAlarmCapabilities()
```

##### `ResetAlarmEventActions` <a name="ResetAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmEventActions"></a>

```csharp
private void ResetAlarmEventActions()
```

##### `ResetAlarmModelDescription` <a name="ResetAlarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelDescription"></a>

```csharp
private void ResetAlarmModelDescription()
```

##### `ResetAlarmModelName` <a name="ResetAlarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelName"></a>

```csharp
private void ResetAlarmModelName()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IoteventsAlarmModel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IoteventsAlarmModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IoteventsAlarmModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IoteventsAlarmModel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IoteventsAlarmModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IoteventsAlarmModel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IoteventsAlarmModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IoteventsAlarmModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IoteventsAlarmModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilities">AlarmCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference">IoteventsAlarmModelAlarmCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActions">AlarmEventActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference">IoteventsAlarmModelAlarmEventActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRule">AlarmRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference">IoteventsAlarmModelAlarmRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList">IoteventsAlarmModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilitiesInput">AlarmCapabilitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActionsInput">AlarmEventActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescriptionInput">AlarmModelDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelNameInput">AlarmModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRuleInput">AlarmRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severityInput">SeverityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescription">AlarmModelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelName">AlarmModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severity">Severity</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlarmCapabilities`<sup>Required</sup> <a name="AlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilities"></a>

```csharp
public IoteventsAlarmModelAlarmCapabilitiesOutputReference AlarmCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference">IoteventsAlarmModelAlarmCapabilitiesOutputReference</a>

---

##### `AlarmEventActions`<sup>Required</sup> <a name="AlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActions"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsOutputReference AlarmEventActions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference">IoteventsAlarmModelAlarmEventActionsOutputReference</a>

---

##### `AlarmRule`<sup>Required</sup> <a name="AlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRule"></a>

```csharp
public IoteventsAlarmModelAlarmRuleOutputReference AlarmRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference">IoteventsAlarmModelAlarmRuleOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tags"></a>

```csharp
public IoteventsAlarmModelTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList">IoteventsAlarmModelTagsList</a>

---

##### `AlarmCapabilitiesInput`<sup>Optional</sup> <a name="AlarmCapabilitiesInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilitiesInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmCapabilities AlarmCapabilitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---

##### `AlarmEventActionsInput`<sup>Optional</sup> <a name="AlarmEventActionsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActionsInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActions AlarmEventActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---

##### `AlarmModelDescriptionInput`<sup>Optional</sup> <a name="AlarmModelDescriptionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescriptionInput"></a>

```csharp
public string AlarmModelDescriptionInput { get; }
```

- *Type:* string

---

##### `AlarmModelNameInput`<sup>Optional</sup> <a name="AlarmModelNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelNameInput"></a>

```csharp
public string AlarmModelNameInput { get; }
```

- *Type:* string

---

##### `AlarmRuleInput`<sup>Optional</sup> <a name="AlarmRuleInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRuleInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmRule AlarmRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severityInput"></a>

```csharp
public double SeverityInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tagsInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]

---

##### `AlarmModelDescription`<sup>Required</sup> <a name="AlarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescription"></a>

```csharp
public string AlarmModelDescription { get; }
```

- *Type:* string

---

##### `AlarmModelName`<sup>Required</sup> <a name="AlarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelName"></a>

```csharp
public string AlarmModelName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severity"></a>

```csharp
public double Severity { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IoteventsAlarmModelAlarmCapabilities <a name="IoteventsAlarmModelAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmCapabilities {
    IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow AcknowledgeFlow = null,
    IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration InitializationConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.acknowledgeFlow">AcknowledgeFlow</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | Specifies whether to get notified for alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.initializationConfiguration">InitializationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model. |

---

##### `AcknowledgeFlow`<sup>Optional</sup> <a name="AcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.acknowledgeFlow"></a>

```csharp
public IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow AcknowledgeFlow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

Specifies whether to get notified for alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#acknowledge_flow IoteventsAlarmModel#acknowledge_flow}

---

##### `InitializationConfiguration`<sup>Optional</sup> <a name="InitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.initializationConfiguration"></a>

```csharp
public IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration InitializationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#initialization_configuration IoteventsAlarmModel#initialization_configuration}

---

### IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow <a name="IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The value must be ``TRUE`` or ``FALSE``. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The value must be ``TRUE`` or ``FALSE``.

If `TRUE`, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to `NORMAL`. If `FALSE`, you won't receive notifications. The alarm automatically changes to the `NORMAL` state when the input property value returns to the specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#enabled IoteventsAlarmModel#enabled}

---

### IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration <a name="IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration {
    bool|IResolvable DisabledOnInitialization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.property.disabledOnInitialization">DisabledOnInitialization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The value must be ``TRUE`` or ``FALSE``. |

---

##### `DisabledOnInitialization`<sup>Optional</sup> <a name="DisabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.property.disabledOnInitialization"></a>

```csharp
public bool|IResolvable DisabledOnInitialization { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The value must be ``TRUE`` or ``FALSE``.

If `FALSE`, all alarm instances created based on the alarm model are activated. The default value is `TRUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#disabled_on_initialization IoteventsAlarmModel#disabled_on_initialization}

---

### IoteventsAlarmModelAlarmEventActions <a name="IoteventsAlarmModelAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActions {
    IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActions[] AlarmActions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.property.alarmActions">AlarmActions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]</code> | Specifies one or more supported actions to receive notifications when the alarm state changes. |

---

##### `AlarmActions`<sup>Optional</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.property.alarmActions"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActions[] AlarmActions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]

Specifies one or more supported actions to receive notifications when the alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#alarm_actions IoteventsAlarmModel#alarm_actions}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActions <a name="IoteventsAlarmModelAlarmEventActionsAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActions {
    IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb DynamoDb = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 DynamoDBv2 = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose Firehose = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents IotEvents = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise IotSiteWise = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish IotTopicPublish = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda Lambda = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsSns Sns = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs Sqs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDb">DynamoDb</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | Defines an action to write to the Amazon DynamoDB table that you created. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDBv2">DynamoDBv2</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | Defines an action to write to the Amazon DynamoDB table that you created. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotEvents">IotEvents</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | Sends an ITE input, passing in information about the detector model instance and the event that triggered the action. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotSiteWise">IotSiteWise</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotTopicPublish">IotTopicPublish</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | Information required to publish the MQTT message through the IoT message broker. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | Information required to publish the Amazon SNS message. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sqs">Sqs</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. |

---

##### `DynamoDb`<sup>Optional</sup> <a name="DynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDb"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb DynamoDb { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

Defines an action to write to the Amazon DynamoDB table that you created.

The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
You must use expressions for all parameters in `DynamoDBAction`. The expressions accept literals, operators, functions, references, and substitution templates.
**Examples**

* For literal values, the expressions must contain single quotes. For example, the value for the `hashKeyType` parameter can be `'STRING'`.
* For references, you must specify either variables or input values. For example, the value for the `hashKeyField` parameter can be `$input.GreenhouseInput.name`.
* For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `hashKeyValue` parameter uses a substitution template.
  `'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'`
* For a string concatenation, you must use `+`. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `tableName` parameter uses a string concatenation.
  `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`

For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
If the defined payload type is a string, `DynamoDBAction` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the `payloadField` parameter is `<payload-field>_raw`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#dynamo_db IoteventsAlarmModel#dynamo_db}

---

##### `DynamoDBv2`<sup>Optional</sup> <a name="DynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDBv2"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 DynamoDBv2 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

Defines an action to write to the Amazon DynamoDB table that you created.

The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
You must use expressions for all parameters in `DynamoDBv2Action`. The expressions accept literals, operators, functions, references, and substitution templates.
**Examples**

* For literal values, the expressions must contain single quotes. For example, the value for the `tableName` parameter can be `'GreenhouseTemperatureTable'`.
* For references, you must specify either variables or input values. For example, the value for the `tableName` parameter can be `$variable.ddbtableName`.
* For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `contentExpression` parameter in `Payload` uses a substitution template.
  `'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'`
* For a string concatenation, you must use `+`. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `tableName` parameter uses a string concatenation.
  `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`

For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
The value for the `type` parameter in `Payload` must be `JSON`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#dynamo_d_bv_2 IoteventsAlarmModel#dynamo_d_bv_2}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.firehose"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose Firehose { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#firehose IoteventsAlarmModel#firehose}

---

##### `IotEvents`<sup>Optional</sup> <a name="IotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotEvents"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents IotEvents { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#iot_events IoteventsAlarmModel#iot_events}

---

##### `IotSiteWise`<sup>Optional</sup> <a name="IotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotSiteWise"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise IotSiteWise { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW.

You must use expressions for all parameters in `IotSiteWiseAction`. The expressions accept literals, operators, functions, references, and substitutions templates.
**Examples**

* For literal values, the expressions must contain single quotes. For example, the value for the `propertyAlias` parameter can be `'/company/windfarm/3/turbine/7/temperature'`.
* For references, you must specify either variables or input values. For example, the value for the `assetId` parameter can be `$input.TurbineInput.assetId1`.
* For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `propertyAlias` parameter uses a substitution template.
  `'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'`

You must specify either `propertyAlias` or both `assetId` and `propertyId` to identify the target asset property in ITSW.
For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#iot_site_wise IoteventsAlarmModel#iot_site_wise}

---

##### `IotTopicPublish`<sup>Optional</sup> <a name="IotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotTopicPublish"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish IotTopicPublish { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

Information required to publish the MQTT message through the IoT message broker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#iot_topic_publish IoteventsAlarmModel#iot_topic_publish}

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.lambda"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda Lambda { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#lambda IoteventsAlarmModel#lambda}

---

##### `Sns`<sup>Optional</sup> <a name="Sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sns"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSns Sns { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

Information required to publish the Amazon SNS message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#sns IoteventsAlarmModel#sns}

---

##### `Sqs`<sup>Optional</sup> <a name="Sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sqs"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs Sqs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#sqs IoteventsAlarmModel#sqs}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb {
    string HashKeyField = null,
    string HashKeyType = null,
    string HashKeyValue = null,
    string Operation = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload Payload = null,
    string PayloadField = null,
    string RangeKeyField = null,
    string RangeKeyType = null,
    string RangeKeyValue = null,
    string TableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyField">HashKeyField</a></code> | <code>string</code> | The name of the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyType">HashKeyType</a></code> | <code>string</code> | The data type for the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyValue">HashKeyValue</a></code> | <code>string</code> | The value of the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.operation">Operation</a></code> | <code>string</code> | The type of operation to perform. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | Information needed to configure the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payloadField">PayloadField</a></code> | <code>string</code> | The name of the DynamoDB column that receives the action payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyField">RangeKeyField</a></code> | <code>string</code> | The name of the range key (also called the sort key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyType">RangeKeyType</a></code> | <code>string</code> | The data type for the range key (also called the sort key), You can specify the following values:   +  ``'STRING'`` - The range key is a string. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyValue">RangeKeyValue</a></code> | <code>string</code> | The value of the range key (also called the sort key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.tableName">TableName</a></code> | <code>string</code> | The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table. |

---

##### `HashKeyField`<sup>Optional</sup> <a name="HashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyField"></a>

```csharp
public string HashKeyField { get; set; }
```

- *Type:* string

The name of the hash key (also called the partition key).

The `hashKeyField` value must match the partition key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#hash_key_field IoteventsAlarmModel#hash_key_field}

---

##### `HashKeyType`<sup>Optional</sup> <a name="HashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyType"></a>

```csharp
public string HashKeyType { get; set; }
```

- *Type:* string

The data type for the hash key (also called the partition key).

You can specify the following values:

* `'STRING'` - The hash key is a string.
* `'NUMBER'` - The hash key is a number.

If you don't specify `hashKeyType`, the default value is `'STRING'`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#hash_key_type IoteventsAlarmModel#hash_key_type}

---

##### `HashKeyValue`<sup>Optional</sup> <a name="HashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyValue"></a>

```csharp
public string HashKeyValue { get; set; }
```

- *Type:* string

The value of the hash key (also called the partition key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#hash_key_value IoteventsAlarmModel#hash_key_value}

---

##### `Operation`<sup>Optional</sup> <a name="Operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

The type of operation to perform.

You can specify the following values:

* `'INSERT'` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
* `'UPDATE'` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
* `'DELETE'` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

If you don't specify this parameter, ITE triggers the `'INSERT'` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#operation IoteventsAlarmModel#operation}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload Payload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `PayloadField`<sup>Optional</sup> <a name="PayloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payloadField"></a>

```csharp
public string PayloadField { get; set; }
```

- *Type:* string

The name of the DynamoDB column that receives the action payload.

If you don't specify this parameter, the name of the DynamoDB column is `payload`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#payload_field IoteventsAlarmModel#payload_field}

---

##### `RangeKeyField`<sup>Optional</sup> <a name="RangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyField"></a>

```csharp
public string RangeKeyField { get; set; }
```

- *Type:* string

The name of the range key (also called the sort key).

The `rangeKeyField` value must match the sort key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#range_key_field IoteventsAlarmModel#range_key_field}

---

##### `RangeKeyType`<sup>Optional</sup> <a name="RangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyType"></a>

```csharp
public string RangeKeyType { get; set; }
```

- *Type:* string

The data type for the range key (also called the sort key), You can specify the following values:   +  ``'STRING'`` - The range key is a string.

* `'NUMBER'` - The range key is number.

If you don't specify `rangeKeyField`, the default value is `'STRING'`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#range_key_type IoteventsAlarmModel#range_key_type}

---

##### `RangeKeyValue`<sup>Optional</sup> <a name="RangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyValue"></a>

```csharp
public string RangeKeyValue { get; set; }
```

- *Type:* string

The value of the range key (also called the sort key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#range_key_value IoteventsAlarmModel#range_key_value}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload {
    string ContentExpression = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.contentExpression">ContentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.type">Type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.contentExpression"></a>

```csharp
public string ContentExpression { get; set; }
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 {
    IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload Payload = null,
    string TableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | Information needed to configure the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.tableName">TableName</a></code> | <code>string</code> | The name of the DynamoDB table. |

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload Payload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name of the DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload {
    string ContentExpression = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.contentExpression">ContentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.type">Type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.contentExpression"></a>

```csharp
public string ContentExpression { get; set; }
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose {
    string DeliveryStreamName = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload Payload = null,
    string Separator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.deliveryStreamName">DeliveryStreamName</a></code> | <code>string</code> | The name of the Kinesis Data Firehose delivery stream where the data is written. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.separator">Separator</a></code> | <code>string</code> | A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. |

---

##### `DeliveryStreamName`<sup>Optional</sup> <a name="DeliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.deliveryStreamName"></a>

```csharp
public string DeliveryStreamName { get; set; }
```

- *Type:* string

The name of the Kinesis Data Firehose delivery stream where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#delivery_stream_name IoteventsAlarmModel#delivery_stream_name}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload Payload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `Separator`<sup>Optional</sup> <a name="Separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.separator"></a>

```csharp
public string Separator { get; set; }
```

- *Type:* string

A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream.

Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#separator IoteventsAlarmModel#separator}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload {
    string ContentExpression = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.contentExpression">ContentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.type">Type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.contentExpression"></a>

```csharp
public string ContentExpression { get; set; }
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents {
    string InputName = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload Payload = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.inputName">InputName</a></code> | <code>string</code> | The name of the ITE input where the data is sent. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | You can configure the action payload when you send a message to an ITE input. |

---

##### `InputName`<sup>Optional</sup> <a name="InputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.inputName"></a>

```csharp
public string InputName { get; set; }
```

- *Type:* string

The name of the ITE input where the data is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#input_name IoteventsAlarmModel#input_name}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload Payload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

You can configure the action payload when you send a message to an ITE input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload {
    string ContentExpression = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.contentExpression">ContentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.type">Type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.contentExpression"></a>

```csharp
public string ContentExpression { get; set; }
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise {
    string AssetId = null,
    string EntryId = null,
    string PropertyAlias = null,
    string PropertyId = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue PropertyValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.assetId">AssetId</a></code> | <code>string</code> | The ID of the asset that has the specified property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.entryId">EntryId</a></code> | <code>string</code> | A unique identifier for this entry. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyAlias">PropertyAlias</a></code> | <code>string</code> | The alias of the asset property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyId">PropertyId</a></code> | <code>string</code> | The ID of the asset property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyValue">PropertyValue</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information. |

---

##### `AssetId`<sup>Optional</sup> <a name="AssetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.assetId"></a>

```csharp
public string AssetId { get; set; }
```

- *Type:* string

The ID of the asset that has the specified property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#asset_id IoteventsAlarmModel#asset_id}

---

##### `EntryId`<sup>Optional</sup> <a name="EntryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.entryId"></a>

```csharp
public string EntryId { get; set; }
```

- *Type:* string

A unique identifier for this entry.

You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#entry_id IoteventsAlarmModel#entry_id}

---

##### `PropertyAlias`<sup>Optional</sup> <a name="PropertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyAlias"></a>

```csharp
public string PropertyAlias { get; set; }
```

- *Type:* string

The alias of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#property_alias IoteventsAlarmModel#property_alias}

---

##### `PropertyId`<sup>Optional</sup> <a name="PropertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyId"></a>

```csharp
public string PropertyId { get; set; }
```

- *Type:* string

The ID of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#property_id IoteventsAlarmModel#property_id}

---

##### `PropertyValue`<sup>Optional</sup> <a name="PropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyValue"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue PropertyValue { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#property_value IoteventsAlarmModel#property_value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue {
    string Quality = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp Timestamp = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.quality">Quality</a></code> | <code>string</code> | The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.timestamp">Timestamp</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | The timestamp associated with the asset property value. The default is the current event time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | The value to send to an asset property. |

---

##### `Quality`<sup>Optional</sup> <a name="Quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.quality"></a>

```csharp
public string Quality { get; set; }
```

- *Type:* string

The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#quality IoteventsAlarmModel#quality}

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.timestamp"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp Timestamp { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

The timestamp associated with the asset property value. The default is the current event time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#timestamp IoteventsAlarmModel#timestamp}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.value"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue Value { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

The value to send to an asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#value IoteventsAlarmModel#value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp {
    string OffsetInNanos = null,
    string TimeInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.offsetInNanos">OffsetInNanos</a></code> | <code>string</code> | The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.timeInSeconds">TimeInSeconds</a></code> | <code>string</code> | The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199. |

---

##### `OffsetInNanos`<sup>Optional</sup> <a name="OffsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.offsetInNanos"></a>

```csharp
public string OffsetInNanos { get; set; }
```

- *Type:* string

The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#offset_in_nanos IoteventsAlarmModel#offset_in_nanos}

---

##### `TimeInSeconds`<sup>Optional</sup> <a name="TimeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.timeInSeconds"></a>

```csharp
public string TimeInSeconds { get; set; }
```

- *Type:* string

The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#time_in_seconds IoteventsAlarmModel#time_in_seconds}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue {
    string BooleanValue = null,
    string DoubleValue = null,
    string IntegerValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.booleanValue">BooleanValue</a></code> | <code>string</code> | The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.doubleValue">DoubleValue</a></code> | <code>string</code> | The asset property value is a double. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.integerValue">IntegerValue</a></code> | <code>string</code> | The asset property value is an integer. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.stringValue">StringValue</a></code> | <code>string</code> | The asset property value is a string. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.booleanValue"></a>

```csharp
public string BooleanValue { get; set; }
```

- *Type:* string

The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``.

You must use an expression, and the evaluated result should be a Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#boolean_value IoteventsAlarmModel#boolean_value}

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.doubleValue"></a>

```csharp
public string DoubleValue { get; set; }
```

- *Type:* string

The asset property value is a double.

You must use an expression, and the evaluated result should be a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#double_value IoteventsAlarmModel#double_value}

---

##### `IntegerValue`<sup>Optional</sup> <a name="IntegerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.integerValue"></a>

```csharp
public string IntegerValue { get; set; }
```

- *Type:* string

The asset property value is an integer.

You must use an expression, and the evaluated result should be an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#integer_value IoteventsAlarmModel#integer_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

The asset property value is a string.

You must use an expression, and the evaluated result should be a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#string_value IoteventsAlarmModel#string_value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish {
    string MqttTopic = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload Payload = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.mqttTopic">MqttTopic</a></code> | <code>string</code> | The MQTT topic of the message. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | You can configure the action payload when you publish a message to an IoTCore topic. |

---

##### `MqttTopic`<sup>Optional</sup> <a name="MqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.mqttTopic"></a>

```csharp
public string MqttTopic { get; set; }
```

- *Type:* string

The MQTT topic of the message.

You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#mqtt_topic IoteventsAlarmModel#mqtt_topic}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload Payload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

You can configure the action payload when you publish a message to an IoTCore topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload {
    string ContentExpression = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.contentExpression">ContentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.type">Type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.contentExpression"></a>

```csharp
public string ContentExpression { get; set; }
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda {
    string FunctionArn = null,
    IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload Payload = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.functionArn">FunctionArn</a></code> | <code>string</code> | The ARN of the Lambda function that is executed. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | You can configure the action payload when you send a message to a Lambda function. |

---

##### `FunctionArn`<sup>Optional</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.functionArn"></a>

```csharp
public string FunctionArn { get; set; }
```

- *Type:* string

The ARN of the Lambda function that is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#function_arn IoteventsAlarmModel#function_arn}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload Payload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

You can configure the action payload when you send a message to a Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload {
    string ContentExpression = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.contentExpression">ContentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.type">Type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.contentExpression"></a>

```csharp
public string ContentExpression { get; set; }
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSns <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSns {
    IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload Payload = null,
    string TargetArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | You can configure the action payload when you send a message as an Amazon SNS push notification. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.targetArn">TargetArn</a></code> | <code>string</code> | The ARN of the Amazon SNS target where the message is sent. |

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload Payload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

You can configure the action payload when you send a message as an Amazon SNS push notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `TargetArn`<sup>Optional</sup> <a name="TargetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.targetArn"></a>

```csharp
public string TargetArn { get; set; }
```

- *Type:* string

The ARN of the Amazon SNS target where the message is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#target_arn IoteventsAlarmModel#target_arn}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload {
    string ContentExpression = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.contentExpression">ContentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.type">Type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.contentExpression"></a>

```csharp
public string ContentExpression { get; set; }
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs {
    IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload Payload = null,
    string QueueUrl = null,
    bool|IResolvable UseBase64 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | You can configure the action payload when you send a message to an Amazon SQS queue. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.queueUrl">QueueUrl</a></code> | <code>string</code> | The URL of the SQS queue where the data is written. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.useBase64">UseBase64</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. |

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload Payload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

You can configure the action payload when you send a message to an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `QueueUrl`<sup>Optional</sup> <a name="QueueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.queueUrl"></a>

```csharp
public string QueueUrl { get; set; }
```

- *Type:* string

The URL of the SQS queue where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#queue_url IoteventsAlarmModel#queue_url}

---

##### `UseBase64`<sup>Optional</sup> <a name="UseBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.useBase64"></a>

```csharp
public bool|IResolvable UseBase64 { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue.

Otherwise, set this to FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#use_base_64 IoteventsAlarmModel#use_base_64}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload {
    string ContentExpression = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.contentExpression">ContentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.type">Type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `ContentExpression`<sup>Optional</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.contentExpression"></a>

```csharp
public string ContentExpression { get; set; }
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmRule <a name="IoteventsAlarmModelAlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmRule {
    IoteventsAlarmModelAlarmRuleSimpleRule SimpleRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.property.simpleRule">SimpleRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | A rule that compares an input property value to a threshold value with a comparison operator. |

---

##### `SimpleRule`<sup>Optional</sup> <a name="SimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.property.simpleRule"></a>

```csharp
public IoteventsAlarmModelAlarmRuleSimpleRule SimpleRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

A rule that compares an input property value to a threshold value with a comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#simple_rule IoteventsAlarmModel#simple_rule}

---

### IoteventsAlarmModelAlarmRuleSimpleRule <a name="IoteventsAlarmModelAlarmRuleSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmRuleSimpleRule {
    string ComparisonOperator = null,
    string InputProperty = null,
    string Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The comparison operator. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.inputProperty">InputProperty</a></code> | <code>string</code> | The value on the left side of the comparison operator. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.threshold">Threshold</a></code> | <code>string</code> | The value on the right side of the comparison operator. |

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#comparison_operator IoteventsAlarmModel#comparison_operator}

---

##### `InputProperty`<sup>Optional</sup> <a name="InputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.inputProperty"></a>

```csharp
public string InputProperty { get; set; }
```

- *Type:* string

The value on the left side of the comparison operator.

You can specify an ITE input attribute as an input property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#input_property IoteventsAlarmModel#input_property}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.threshold"></a>

```csharp
public string Threshold { get; set; }
```

- *Type:* string

The value on the right side of the comparison operator.

You can enter a number or specify an ITE input attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#threshold IoteventsAlarmModel#threshold}

---

### IoteventsAlarmModelConfig <a name="IoteventsAlarmModelConfig" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IoteventsAlarmModelAlarmRule AlarmRule,
    string RoleArn,
    IoteventsAlarmModelAlarmCapabilities AlarmCapabilities = null,
    IoteventsAlarmModelAlarmEventActions AlarmEventActions = null,
    string AlarmModelDescription = null,
    string AlarmModelName = null,
    string Key = null,
    double Severity = null,
    IResolvable|IoteventsAlarmModelTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmRule">AlarmRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | Defines when your alarm is invoked. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmCapabilities">AlarmCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | Contains the configuration information of alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmEventActions">AlarmEventActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | Contains information about one or more alarm actions. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelDescription">AlarmModelDescription</a></code> | <code>string</code> | The description of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelName">AlarmModelName</a></code> | <code>string</code> | The name of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.key">Key</a></code> | <code>string</code> | An input attribute used as a key to create an alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.severity">Severity</a></code> | <code>double</code> | A non-negative integer that reflects the severity level of the alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]</code> | A list of key-value pairs that contain metadata for the alarm model. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlarmRule`<sup>Required</sup> <a name="AlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmRule"></a>

```csharp
public IoteventsAlarmModelAlarmRule AlarmRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

Defines when your alarm is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#alarm_rule IoteventsAlarmModel#alarm_rule}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources.

For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#role_arn IoteventsAlarmModel#role_arn}

---

##### `AlarmCapabilities`<sup>Optional</sup> <a name="AlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmCapabilities"></a>

```csharp
public IoteventsAlarmModelAlarmCapabilities AlarmCapabilities { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

Contains the configuration information of alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#alarm_capabilities IoteventsAlarmModel#alarm_capabilities}

---

##### `AlarmEventActions`<sup>Optional</sup> <a name="AlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmEventActions"></a>

```csharp
public IoteventsAlarmModelAlarmEventActions AlarmEventActions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

Contains information about one or more alarm actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#alarm_event_actions IoteventsAlarmModel#alarm_event_actions}

---

##### `AlarmModelDescription`<sup>Optional</sup> <a name="AlarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelDescription"></a>

```csharp
public string AlarmModelDescription { get; set; }
```

- *Type:* string

The description of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#alarm_model_description IoteventsAlarmModel#alarm_model_description}

---

##### `AlarmModelName`<sup>Optional</sup> <a name="AlarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelName"></a>

```csharp
public string AlarmModelName { get; set; }
```

- *Type:* string

The name of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#alarm_model_name IoteventsAlarmModel#alarm_model_name}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

An input attribute used as a key to create an alarm.

ITE routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.severity"></a>

```csharp
public double Severity { get; set; }
```

- *Type:* double

A non-negative integer that reflects the severity level of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#severity IoteventsAlarmModel#severity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.tags"></a>

```csharp
public IResolvable|IoteventsAlarmModelTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]

A list of key-value pairs that contain metadata for the alarm model.

The tags help you manage the alarm model. For more information, see [Tagging your resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the *Developer Guide*.
You can create up to 50 tags for one alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#tags IoteventsAlarmModel#tags}

---

### IoteventsAlarmModelTags <a name="IoteventsAlarmModelTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.key">Key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.value">Value</a></code> | <code>string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_alarm_model#value IoteventsAlarmModel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---


### IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resetDisabledOnInitialization">ResetDisabledOnInitialization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabledOnInitialization` <a name="ResetDisabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resetDisabledOnInitialization"></a>

```csharp
private void ResetDisabledOnInitialization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitializationInput">DisabledOnInitializationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization">DisabledOnInitialization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledOnInitializationInput`<sup>Optional</sup> <a name="DisabledOnInitializationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitializationInput"></a>

```csharp
public bool|IResolvable DisabledOnInitializationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisabledOnInitialization`<sup>Required</sup> <a name="DisabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization"></a>

```csharp
public bool|IResolvable DisabledOnInitialization { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---


### IoteventsAlarmModelAlarmCapabilitiesOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow">PutAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration">PutInitializationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetAcknowledgeFlow">ResetAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetInitializationConfiguration">ResetInitializationConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcknowledgeFlow` <a name="PutAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow"></a>

```csharp
private void PutAcknowledgeFlow(IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---

##### `PutInitializationConfiguration` <a name="PutInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration"></a>

```csharp
private void PutInitializationConfiguration(IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---

##### `ResetAcknowledgeFlow` <a name="ResetAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetAcknowledgeFlow"></a>

```csharp
private void ResetAcknowledgeFlow()
```

##### `ResetInitializationConfiguration` <a name="ResetInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetInitializationConfiguration"></a>

```csharp
private void ResetInitializationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow">AcknowledgeFlow</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration">InitializationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlowInput">AcknowledgeFlowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfigurationInput">InitializationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcknowledgeFlow`<sup>Required</sup> <a name="AcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow"></a>

```csharp
public IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference AcknowledgeFlow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a>

---

##### `InitializationConfiguration`<sup>Required</sup> <a name="InitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration"></a>

```csharp
public IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference InitializationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a>

---

##### `AcknowledgeFlowInput`<sup>Optional</sup> <a name="AcknowledgeFlowInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlowInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow AcknowledgeFlowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---

##### `InitializationConfigurationInput`<sup>Optional</sup> <a name="InitializationConfigurationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfigurationInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration InitializationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmCapabilities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyField">ResetHashKeyField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyType">ResetHashKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyValue">ResetHashKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetOperation">ResetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayloadField">ResetPayloadField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyField">ResetRangeKeyField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyType">ResetRangeKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyValue">ResetRangeKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload"></a>

```csharp
private void PutPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---

##### `ResetHashKeyField` <a name="ResetHashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyField"></a>

```csharp
private void ResetHashKeyField()
```

##### `ResetHashKeyType` <a name="ResetHashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyType"></a>

```csharp
private void ResetHashKeyType()
```

##### `ResetHashKeyValue` <a name="ResetHashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyValue"></a>

```csharp
private void ResetHashKeyValue()
```

##### `ResetOperation` <a name="ResetOperation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetOperation"></a>

```csharp
private void ResetOperation()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayload"></a>

```csharp
private void ResetPayload()
```

##### `ResetPayloadField` <a name="ResetPayloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayloadField"></a>

```csharp
private void ResetPayloadField()
```

##### `ResetRangeKeyField` <a name="ResetRangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyField"></a>

```csharp
private void ResetRangeKeyField()
```

##### `ResetRangeKeyType` <a name="ResetRangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyType"></a>

```csharp
private void ResetRangeKeyType()
```

##### `ResetRangeKeyValue` <a name="ResetRangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyValue"></a>

```csharp
private void ResetRangeKeyValue()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyFieldInput">HashKeyFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyTypeInput">HashKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValueInput">HashKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadFieldInput">PayloadFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadInput">PayloadInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyFieldInput">RangeKeyFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyTypeInput">RangeKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValueInput">RangeKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField">HashKeyField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType">HashKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue">HashKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField">PayloadField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField">RangeKeyField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType">RangeKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue">RangeKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference Payload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a>

---

##### `HashKeyFieldInput`<sup>Optional</sup> <a name="HashKeyFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyFieldInput"></a>

```csharp
public string HashKeyFieldInput { get; }
```

- *Type:* string

---

##### `HashKeyTypeInput`<sup>Optional</sup> <a name="HashKeyTypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyTypeInput"></a>

```csharp
public string HashKeyTypeInput { get; }
```

- *Type:* string

---

##### `HashKeyValueInput`<sup>Optional</sup> <a name="HashKeyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValueInput"></a>

```csharp
public string HashKeyValueInput { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `PayloadFieldInput`<sup>Optional</sup> <a name="PayloadFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadFieldInput"></a>

```csharp
public string PayloadFieldInput { get; }
```

- *Type:* string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload PayloadInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---

##### `RangeKeyFieldInput`<sup>Optional</sup> <a name="RangeKeyFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyFieldInput"></a>

```csharp
public string RangeKeyFieldInput { get; }
```

- *Type:* string

---

##### `RangeKeyTypeInput`<sup>Optional</sup> <a name="RangeKeyTypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyTypeInput"></a>

```csharp
public string RangeKeyTypeInput { get; }
```

- *Type:* string

---

##### `RangeKeyValueInput`<sup>Optional</sup> <a name="RangeKeyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValueInput"></a>

```csharp
public string RangeKeyValueInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `HashKeyField`<sup>Required</sup> <a name="HashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField"></a>

```csharp
public string HashKeyField { get; }
```

- *Type:* string

---

##### `HashKeyType`<sup>Required</sup> <a name="HashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType"></a>

```csharp
public string HashKeyType { get; }
```

- *Type:* string

---

##### `HashKeyValue`<sup>Required</sup> <a name="HashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue"></a>

```csharp
public string HashKeyValue { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `PayloadField`<sup>Required</sup> <a name="PayloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField"></a>

```csharp
public string PayloadField { get; }
```

- *Type:* string

---

##### `RangeKeyField`<sup>Required</sup> <a name="RangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField"></a>

```csharp
public string RangeKeyField { get; }
```

- *Type:* string

---

##### `RangeKeyType`<sup>Required</sup> <a name="RangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType"></a>

```csharp
public string RangeKeyType { get; }
```

- *Type:* string

---

##### `RangeKeyValue`<sup>Required</sup> <a name="RangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue"></a>

```csharp
public string RangeKeyValue { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetContentExpression"></a>

```csharp
private void ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpressionInput"></a>

```csharp
public string ContentExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression"></a>

```csharp
public string ContentExpression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload"></a>

```csharp
private void PutPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetPayload"></a>

```csharp
private void ResetPayload()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payloadInput">PayloadInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference Payload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a>

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payloadInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload PayloadInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetContentExpression"></a>

```csharp
private void ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpressionInput"></a>

```csharp
public string ContentExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression"></a>

```csharp
public string ContentExpression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetDeliveryStreamName">ResetDeliveryStreamName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetSeparator">ResetSeparator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload"></a>

```csharp
private void PutPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---

##### `ResetDeliveryStreamName` <a name="ResetDeliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetDeliveryStreamName"></a>

```csharp
private void ResetDeliveryStreamName()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetPayload"></a>

```csharp
private void ResetPayload()
```

##### `ResetSeparator` <a name="ResetSeparator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetSeparator"></a>

```csharp
private void ResetSeparator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamNameInput">DeliveryStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payloadInput">PayloadInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separatorInput">SeparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName">DeliveryStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator">Separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference Payload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a>

---

##### `DeliveryStreamNameInput`<sup>Optional</sup> <a name="DeliveryStreamNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamNameInput"></a>

```csharp
public string DeliveryStreamNameInput { get; }
```

- *Type:* string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payloadInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload PayloadInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---

##### `SeparatorInput`<sup>Optional</sup> <a name="SeparatorInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separatorInput"></a>

```csharp
public string SeparatorInput { get; }
```

- *Type:* string

---

##### `DeliveryStreamName`<sup>Required</sup> <a name="DeliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName"></a>

```csharp
public string DeliveryStreamName { get; }
```

- *Type:* string

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator"></a>

```csharp
public string Separator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetContentExpression"></a>

```csharp
private void ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpressionInput"></a>

```csharp
public string ContentExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression"></a>

```csharp
public string ContentExpression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetInputName">ResetInputName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload"></a>

```csharp
private void PutPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---

##### `ResetInputName` <a name="ResetInputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetInputName"></a>

```csharp
private void ResetInputName()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetPayload"></a>

```csharp
private void ResetPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputNameInput">InputNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payloadInput">PayloadInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName">InputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference Payload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a>

---

##### `InputNameInput`<sup>Optional</sup> <a name="InputNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputNameInput"></a>

```csharp
public string InputNameInput { get; }
```

- *Type:* string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payloadInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload PayloadInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---

##### `InputName`<sup>Required</sup> <a name="InputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName"></a>

```csharp
public string InputName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetContentExpression"></a>

```csharp
private void ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpressionInput"></a>

```csharp
public string ContentExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression"></a>

```csharp
public string ContentExpression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue">PutPropertyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetAssetId">ResetAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetEntryId">ResetEntryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyAlias">ResetPropertyAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyId">ResetPropertyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyValue">ResetPropertyValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropertyValue` <a name="PutPropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue"></a>

```csharp
private void PutPropertyValue(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---

##### `ResetAssetId` <a name="ResetAssetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetAssetId"></a>

```csharp
private void ResetAssetId()
```

##### `ResetEntryId` <a name="ResetEntryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetEntryId"></a>

```csharp
private void ResetEntryId()
```

##### `ResetPropertyAlias` <a name="ResetPropertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyAlias"></a>

```csharp
private void ResetPropertyAlias()
```

##### `ResetPropertyId` <a name="ResetPropertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyId"></a>

```csharp
private void ResetPropertyId()
```

##### `ResetPropertyValue` <a name="ResetPropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyValue"></a>

```csharp
private void ResetPropertyValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue">PropertyValue</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetIdInput">AssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryIdInput">EntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAliasInput">PropertyAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyIdInput">PropertyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValueInput">PropertyValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId">AssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId">EntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias">PropertyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId">PropertyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertyValue`<sup>Required</sup> <a name="PropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference PropertyValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a>

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetIdInput"></a>

```csharp
public string AssetIdInput { get; }
```

- *Type:* string

---

##### `EntryIdInput`<sup>Optional</sup> <a name="EntryIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryIdInput"></a>

```csharp
public string EntryIdInput { get; }
```

- *Type:* string

---

##### `PropertyAliasInput`<sup>Optional</sup> <a name="PropertyAliasInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAliasInput"></a>

```csharp
public string PropertyAliasInput { get; }
```

- *Type:* string

---

##### `PropertyIdInput`<sup>Optional</sup> <a name="PropertyIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyIdInput"></a>

```csharp
public string PropertyIdInput { get; }
```

- *Type:* string

---

##### `PropertyValueInput`<sup>Optional</sup> <a name="PropertyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValueInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue PropertyValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId"></a>

```csharp
public string AssetId { get; }
```

- *Type:* string

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId"></a>

```csharp
public string EntryId { get; }
```

- *Type:* string

---

##### `PropertyAlias`<sup>Required</sup> <a name="PropertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias"></a>

```csharp
public string PropertyAlias { get; }
```

- *Type:* string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId"></a>

```csharp
public string PropertyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp">PutTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetQuality">ResetQuality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetTimestamp">ResetTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTimestamp` <a name="PutTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp"></a>

```csharp
private void PutTimestamp(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue"></a>

```csharp
private void PutValue(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---

##### `ResetQuality` <a name="ResetQuality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetQuality"></a>

```csharp
private void ResetQuality()
```

##### `ResetTimestamp` <a name="ResetTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetTimestamp"></a>

```csharp
private void ResetTimestamp()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp">Timestamp</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.qualityInput">QualityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestampInput">TimestampInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.valueInput">ValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality">Quality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference Timestamp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a>

---

##### `QualityInput`<sup>Optional</sup> <a name="QualityInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.qualityInput"></a>

```csharp
public string QualityInput { get; }
```

- *Type:* string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestampInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp TimestampInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.valueInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue ValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---

##### `Quality`<sup>Required</sup> <a name="Quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality"></a>

```csharp
public string Quality { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetOffsetInNanos">ResetOffsetInNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetTimeInSeconds">ResetTimeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffsetInNanos` <a name="ResetOffsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetOffsetInNanos"></a>

```csharp
private void ResetOffsetInNanos()
```

##### `ResetTimeInSeconds` <a name="ResetTimeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetTimeInSeconds"></a>

```csharp
private void ResetTimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanosInput">OffsetInNanosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSecondsInput">TimeInSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos">OffsetInNanos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds">TimeInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OffsetInNanosInput`<sup>Optional</sup> <a name="OffsetInNanosInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanosInput"></a>

```csharp
public string OffsetInNanosInput { get; }
```

- *Type:* string

---

##### `TimeInSecondsInput`<sup>Optional</sup> <a name="TimeInSecondsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSecondsInput"></a>

```csharp
public string TimeInSecondsInput { get; }
```

- *Type:* string

---

##### `OffsetInNanos`<sup>Required</sup> <a name="OffsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos"></a>

```csharp
public string OffsetInNanos { get; }
```

- *Type:* string

---

##### `TimeInSeconds`<sup>Required</sup> <a name="TimeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds"></a>

```csharp
public string TimeInSeconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetIntegerValue">ResetIntegerValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetBooleanValue"></a>

```csharp
private void ResetBooleanValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetDoubleValue"></a>

```csharp
private void ResetDoubleValue()
```

##### `ResetIntegerValue` <a name="ResetIntegerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetIntegerValue"></a>

```csharp
private void ResetIntegerValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValueInput">IntegerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue">BooleanValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue">IntegerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValueInput"></a>

```csharp
public string BooleanValueInput { get; }
```

- *Type:* string

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValueInput"></a>

```csharp
public string DoubleValueInput { get; }
```

- *Type:* string

---

##### `IntegerValueInput`<sup>Optional</sup> <a name="IntegerValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValueInput"></a>

```csharp
public string IntegerValueInput { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue"></a>

```csharp
public string BooleanValue { get; }
```

- *Type:* string

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue"></a>

```csharp
public string DoubleValue { get; }
```

- *Type:* string

---

##### `IntegerValue`<sup>Required</sup> <a name="IntegerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue"></a>

```csharp
public string IntegerValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetMqttTopic">ResetMqttTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload"></a>

```csharp
private void PutPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---

##### `ResetMqttTopic` <a name="ResetMqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetMqttTopic"></a>

```csharp
private void ResetMqttTopic()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetPayload"></a>

```csharp
private void ResetPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopicInput">MqttTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payloadInput">PayloadInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic">MqttTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference Payload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a>

---

##### `MqttTopicInput`<sup>Optional</sup> <a name="MqttTopicInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopicInput"></a>

```csharp
public string MqttTopicInput { get; }
```

- *Type:* string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payloadInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload PayloadInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---

##### `MqttTopic`<sup>Required</sup> <a name="MqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic"></a>

```csharp
public string MqttTopic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetContentExpression"></a>

```csharp
private void ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpressionInput"></a>

```csharp
public string ContentExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression"></a>

```csharp
public string ContentExpression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetFunctionArn">ResetFunctionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload"></a>

```csharp
private void PutPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---

##### `ResetFunctionArn` <a name="ResetFunctionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetFunctionArn"></a>

```csharp
private void ResetFunctionArn()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetPayload"></a>

```csharp
private void ResetPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payloadInput">PayloadInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference Payload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a>

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArnInput"></a>

```csharp
public string FunctionArnInput { get; }
```

- *Type:* string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payloadInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload PayloadInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetContentExpression"></a>

```csharp
private void ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpressionInput"></a>

```csharp
public string ContentExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression"></a>

```csharp
public string ContentExpression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsList <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsList" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get"></a>

```csharp
private IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb">PutDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2">PutDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents">PutIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise">PutIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish">PutIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda">PutLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns">PutSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs">PutSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDb">ResetDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDBv2">ResetDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotEvents">ResetIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotSiteWise">ResetIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotTopicPublish">ResetIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetLambda">ResetLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSns">ResetSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSqs">ResetSqs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamoDb` <a name="PutDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb"></a>

```csharp
private void PutDynamoDb(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---

##### `PutDynamoDBv2` <a name="PutDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2"></a>

```csharp
private void PutDynamoDBv2(IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose"></a>

```csharp
private void PutFirehose(IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---

##### `PutIotEvents` <a name="PutIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents"></a>

```csharp
private void PutIotEvents(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---

##### `PutIotSiteWise` <a name="PutIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise"></a>

```csharp
private void PutIotSiteWise(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---

##### `PutIotTopicPublish` <a name="PutIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish"></a>

```csharp
private void PutIotTopicPublish(IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---

##### `PutLambda` <a name="PutLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda"></a>

```csharp
private void PutLambda(IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---

##### `PutSns` <a name="PutSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns"></a>

```csharp
private void PutSns(IoteventsAlarmModelAlarmEventActionsAlarmActionsSns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---

##### `PutSqs` <a name="PutSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs"></a>

```csharp
private void PutSqs(IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---

##### `ResetDynamoDb` <a name="ResetDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDb"></a>

```csharp
private void ResetDynamoDb()
```

##### `ResetDynamoDBv2` <a name="ResetDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDBv2"></a>

```csharp
private void ResetDynamoDBv2()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetFirehose"></a>

```csharp
private void ResetFirehose()
```

##### `ResetIotEvents` <a name="ResetIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotEvents"></a>

```csharp
private void ResetIotEvents()
```

##### `ResetIotSiteWise` <a name="ResetIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotSiteWise"></a>

```csharp
private void ResetIotSiteWise()
```

##### `ResetIotTopicPublish` <a name="ResetIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotTopicPublish"></a>

```csharp
private void ResetIotTopicPublish()
```

##### `ResetLambda` <a name="ResetLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetLambda"></a>

```csharp
private void ResetLambda()
```

##### `ResetSns` <a name="ResetSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSns"></a>

```csharp
private void ResetSns()
```

##### `ResetSqs` <a name="ResetSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSqs"></a>

```csharp
private void ResetSqs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb">DynamoDb</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2">DynamoDBv2</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents">IotEvents</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise">IotSiteWise</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish">IotTopicPublish</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs">Sqs</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDbInput">DynamoDbInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2Input">DynamoDBv2Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEventsInput">IotEventsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWiseInput">IotSiteWiseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublishInput">IotTopicPublishInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambdaInput">LambdaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.snsInput">SnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqsInput">SqsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamoDb`<sup>Required</sup> <a name="DynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference DynamoDb { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a>

---

##### `DynamoDBv2`<sup>Required</sup> <a name="DynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference DynamoDBv2 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference Firehose { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a>

---

##### `IotEvents`<sup>Required</sup> <a name="IotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference IotEvents { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a>

---

##### `IotSiteWise`<sup>Required</sup> <a name="IotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference IotSiteWise { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a>

---

##### `IotTopicPublish`<sup>Required</sup> <a name="IotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference IotTopicPublish { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a>

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference Lambda { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a>

---

##### `Sns`<sup>Required</sup> <a name="Sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference Sns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a>

---

##### `Sqs`<sup>Required</sup> <a name="Sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference Sqs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a>

---

##### `DynamoDbInput`<sup>Optional</sup> <a name="DynamoDbInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDbInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb DynamoDbInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---

##### `DynamoDBv2Input`<sup>Optional</sup> <a name="DynamoDBv2Input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2Input"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 DynamoDBv2Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehoseInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose FirehoseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---

##### `IotEventsInput`<sup>Optional</sup> <a name="IotEventsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEventsInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents IotEventsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---

##### `IotSiteWiseInput`<sup>Optional</sup> <a name="IotSiteWiseInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWiseInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise IotSiteWiseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---

##### `IotTopicPublishInput`<sup>Optional</sup> <a name="IotTopicPublishInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublishInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish IotTopicPublishInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambdaInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda LambdaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---

##### `SnsInput`<sup>Optional</sup> <a name="SnsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.snsInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSns SnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---

##### `SqsInput`<sup>Optional</sup> <a name="SqsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqsInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs SqsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetTargetArn">ResetTargetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload"></a>

```csharp
private void PutPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetPayload"></a>

```csharp
private void ResetPayload()
```

##### `ResetTargetArn` <a name="ResetTargetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetTargetArn"></a>

```csharp
private void ResetTargetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payloadInput">PayloadInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArnInput">TargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference Payload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a>

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payloadInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload PayloadInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArnInput"></a>

```csharp
public string TargetArnInput { get; }
```

- *Type:* string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetContentExpression"></a>

```csharp
private void ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpressionInput"></a>

```csharp
public string ContentExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression"></a>

```csharp
public string ContentExpression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetQueueUrl">ResetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetUseBase64">ResetUseBase64</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload"></a>

```csharp
private void PutPayload(IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetPayload"></a>

```csharp
private void ResetPayload()
```

##### `ResetQueueUrl` <a name="ResetQueueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetQueueUrl"></a>

```csharp
private void ResetQueueUrl()
```

##### `ResetUseBase64` <a name="ResetUseBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetUseBase64"></a>

```csharp
private void ResetUseBase64()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payloadInput">PayloadInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrlInput">QueueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64Input">UseBase64Input</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl">QueueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64">UseBase64</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference Payload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a>

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payloadInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload PayloadInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---

##### `QueueUrlInput`<sup>Optional</sup> <a name="QueueUrlInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrlInput"></a>

```csharp
public string QueueUrlInput { get; }
```

- *Type:* string

---

##### `UseBase64Input`<sup>Optional</sup> <a name="UseBase64Input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64Input"></a>

```csharp
public bool|IResolvable UseBase64Input { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl"></a>

```csharp
public string QueueUrl { get; }
```

- *Type:* string

---

##### `UseBase64`<sup>Required</sup> <a name="UseBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64"></a>

```csharp
public bool|IResolvable UseBase64 { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetContentExpression">ResetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentExpression` <a name="ResetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetContentExpression"></a>

```csharp
private void ResetContentExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpressionInput">ContentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentExpressionInput`<sup>Optional</sup> <a name="ContentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpressionInput"></a>

```csharp
public string ContentExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression"></a>

```csharp
public string ContentExpression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmEventActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions">PutAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resetAlarmActions">ResetAlarmActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlarmActions` <a name="PutAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions"></a>

```csharp
private void PutAlarmActions(IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]

---

##### `ResetAlarmActions` <a name="ResetAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resetAlarmActions"></a>

```csharp
private void ResetAlarmActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions">AlarmActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList">IoteventsAlarmModelAlarmEventActionsAlarmActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActionsInput">AlarmActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmActions`<sup>Required</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions"></a>

```csharp
public IoteventsAlarmModelAlarmEventActionsAlarmActionsList AlarmActions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList">IoteventsAlarmModelAlarmEventActionsAlarmActionsList</a>

---

##### `AlarmActionsInput`<sup>Optional</sup> <a name="AlarmActionsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActionsInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActionsAlarmActions[] AlarmActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmEventActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---


### IoteventsAlarmModelAlarmRuleOutputReference <a name="IoteventsAlarmModelAlarmRuleOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule">PutSimpleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resetSimpleRule">ResetSimpleRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSimpleRule` <a name="PutSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule"></a>

```csharp
private void PutSimpleRule(IoteventsAlarmModelAlarmRuleSimpleRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---

##### `ResetSimpleRule` <a name="ResetSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resetSimpleRule"></a>

```csharp
private void ResetSimpleRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule">SimpleRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRuleInput">SimpleRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SimpleRule`<sup>Required</sup> <a name="SimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule"></a>

```csharp
public IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference SimpleRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a>

---

##### `SimpleRuleInput`<sup>Optional</sup> <a name="SimpleRuleInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRuleInput"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmRuleSimpleRule SimpleRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---


### IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference <a name="IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetInputProperty">ResetInputProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetComparisonOperator"></a>

```csharp
private void ResetComparisonOperator()
```

##### `ResetInputProperty` <a name="ResetInputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetInputProperty"></a>

```csharp
private void ResetInputProperty()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputPropertyInput">InputPropertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty">InputProperty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold">Threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `InputPropertyInput`<sup>Optional</sup> <a name="InputPropertyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputPropertyInput"></a>

```csharp
public string InputPropertyInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.thresholdInput"></a>

```csharp
public string ThresholdInput { get; }
```

- *Type:* string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `InputProperty`<sup>Required</sup> <a name="InputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty"></a>

```csharp
public string InputProperty { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold"></a>

```csharp
public string Threshold { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelAlarmRuleSimpleRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---


### IoteventsAlarmModelTagsList <a name="IoteventsAlarmModelTagsList" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get"></a>

```csharp
private IoteventsAlarmModelTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]

---


### IoteventsAlarmModelTagsOutputReference <a name="IoteventsAlarmModelTagsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IoteventsAlarmModelTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IoteventsAlarmModelTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>

---



