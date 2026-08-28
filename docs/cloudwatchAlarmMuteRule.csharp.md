# `cloudwatchAlarmMuteRule` Submodule <a name="`cloudwatchAlarmMuteRule` Submodule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlarmMuteRule <a name="CloudwatchAlarmMuteRule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule awscc_cloudwatch_alarm_mute_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlarmMuteRule(Construct Scope, string Id, CloudwatchAlarmMuteRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig">CloudwatchAlarmMuteRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig">CloudwatchAlarmMuteRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets">PutMuteTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetExpireDate">ResetExpireDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetMuteTargets">ResetMuteTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMuteTargets` <a name="PutMuteTargets" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets"></a>

```csharp
private void PutMuteTargets(CloudwatchAlarmMuteRuleMuteTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule"></a>

```csharp
private void PutRule(CloudwatchAlarmMuteRuleRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putTags"></a>

```csharp
private void PutTags(IResolvable|CloudwatchAlarmMuteRuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpireDate` <a name="ResetExpireDate" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetExpireDate"></a>

```csharp
private void ResetExpireDate()
```

##### `ResetMuteTargets` <a name="ResetMuteTargets" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetMuteTargets"></a>

```csharp
private void ResetMuteTargets()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetStartDate"></a>

```csharp
private void ResetStartDate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchAlarmMuteRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchAlarmMuteRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchAlarmMuteRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchAlarmMuteRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchAlarmMuteRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchAlarmMuteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlarmMuteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargets">MuteTargets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference">CloudwatchAlarmMuteRuleMuteTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteType">MuteType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference">CloudwatchAlarmMuteRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList">CloudwatchAlarmMuteRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDateInput">ExpireDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargetsInput">MuteTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDate">ExpireDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lastUpdatedTimestamp"></a>

```csharp
public string LastUpdatedTimestamp { get; }
```

- *Type:* string

---

##### `MuteTargets`<sup>Required</sup> <a name="MuteTargets" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargets"></a>

```csharp
public CloudwatchAlarmMuteRuleMuteTargetsOutputReference MuteTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference">CloudwatchAlarmMuteRuleMuteTargetsOutputReference</a>

---

##### `MuteType`<sup>Required</sup> <a name="MuteType" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteType"></a>

```csharp
public string MuteType { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.rule"></a>

```csharp
public CloudwatchAlarmMuteRuleRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference">CloudwatchAlarmMuteRuleRuleOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tags"></a>

```csharp
public CloudwatchAlarmMuteRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList">CloudwatchAlarmMuteRuleTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpireDateInput`<sup>Optional</sup> <a name="ExpireDateInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDateInput"></a>

```csharp
public string ExpireDateInput { get; }
```

- *Type:* string

---

##### `MuteTargetsInput`<sup>Optional</sup> <a name="MuteTargetsInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargetsInput"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleMuteTargets MuteTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.ruleInput"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRule RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsInput"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExpireDate`<sup>Required</sup> <a name="ExpireDate" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDate"></a>

```csharp
public string ExpireDate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlarmMuteRuleConfig <a name="CloudwatchAlarmMuteRuleConfig" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlarmMuteRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    CloudwatchAlarmMuteRuleRule Rule,
    string Description = null,
    string ExpireDate = null,
    CloudwatchAlarmMuteRuleMuteTargets MuteTargets = null,
    string Name = null,
    string StartDate = null,
    IResolvable|CloudwatchAlarmMuteRuleTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a></code> | The rule for the mute. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.description">Description</a></code> | <code>string</code> | The description of the AlarmMuteRule. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.expireDate">ExpireDate</a></code> | <code>string</code> | The date, with the same timezone offset as "ScheduleTimezone" after which the alarm mute rule will be expired. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.muteTargets">MuteTargets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a></code> | Targets to be muted. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the AlarmMuteRule. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.startDate">StartDate</a></code> | <code>string</code> | The date, with the same timezone offset as "ScheduleTimezone", after which the alarm mute rule will become active. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.rule"></a>

```csharp
public CloudwatchAlarmMuteRuleRule Rule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>

The rule for the mute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#rule CloudwatchAlarmMuteRule#rule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the AlarmMuteRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}

---

##### `ExpireDate`<sup>Optional</sup> <a name="ExpireDate" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.expireDate"></a>

```csharp
public string ExpireDate { get; set; }
```

- *Type:* string

The date, with the same timezone offset as "ScheduleTimezone" after which the alarm mute rule will be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}

---

##### `MuteTargets`<sup>Optional</sup> <a name="MuteTargets" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.muteTargets"></a>

```csharp
public CloudwatchAlarmMuteRuleMuteTargets MuteTargets { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>

Targets to be muted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#mute_targets CloudwatchAlarmMuteRule#mute_targets}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the AlarmMuteRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

The date, with the same timezone offset as "ScheduleTimezone", after which the alarm mute rule will become active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.tags"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}

---

### CloudwatchAlarmMuteRuleMuteTargets <a name="CloudwatchAlarmMuteRuleMuteTargets" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlarmMuteRuleMuteTargets {
    string[] AlarmNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.property.alarmNames">AlarmNames</a></code> | <code>string[]</code> | The alarm names to be mute by the AlarmMuteRule. |

---

##### `AlarmNames`<sup>Optional</sup> <a name="AlarmNames" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.property.alarmNames"></a>

```csharp
public string[] AlarmNames { get; set; }
```

- *Type:* string[]

The alarm names to be mute by the AlarmMuteRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#alarm_names CloudwatchAlarmMuteRule#alarm_names}

---

### CloudwatchAlarmMuteRuleRule <a name="CloudwatchAlarmMuteRuleRule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlarmMuteRuleRule {
    CloudwatchAlarmMuteRuleRuleSchedule Schedule
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a></code> | Schedule for the mute to be active. |

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.property.schedule"></a>

```csharp
public CloudwatchAlarmMuteRuleRuleSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>

Schedule for the mute to be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#schedule CloudwatchAlarmMuteRule#schedule}

---

### CloudwatchAlarmMuteRuleRuleSchedule <a name="CloudwatchAlarmMuteRuleRuleSchedule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlarmMuteRuleRuleSchedule {
    string Duration,
    string Expression,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.duration">Duration</a></code> | <code>string</code> | The duration of the schedule when it triggers. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.expression">Expression</a></code> | <code>string</code> | The expression of the schedule. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.timezone">Timezone</a></code> | <code>string</code> | The timezone of the schedule. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The duration of the schedule when it triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#duration CloudwatchAlarmMuteRule#duration}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

The expression of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#expression CloudwatchAlarmMuteRule#expression}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

The timezone of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#timezone CloudwatchAlarmMuteRule#timezone}

---

### CloudwatchAlarmMuteRuleTags <a name="CloudwatchAlarmMuteRuleTags" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlarmMuteRuleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#key CloudwatchAlarmMuteRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_alarm_mute_rule#value CloudwatchAlarmMuteRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlarmMuteRuleMuteTargetsOutputReference <a name="CloudwatchAlarmMuteRuleMuteTargetsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlarmMuteRuleMuteTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resetAlarmNames">ResetAlarmNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmNames` <a name="ResetAlarmNames" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resetAlarmNames"></a>

```csharp
private void ResetAlarmNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNamesInput">AlarmNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames">AlarmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmNamesInput`<sup>Optional</sup> <a name="AlarmNamesInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNamesInput"></a>

```csharp
public string[] AlarmNamesInput { get; }
```

- *Type:* string[]

---

##### `AlarmNames`<sup>Required</sup> <a name="AlarmNames" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames"></a>

```csharp
public string[] AlarmNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleMuteTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>

---


### CloudwatchAlarmMuteRuleRuleOutputReference <a name="CloudwatchAlarmMuteRuleRuleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlarmMuteRuleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule"></a>

```csharp
private void PutSchedule(CloudwatchAlarmMuteRuleRuleSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference">CloudwatchAlarmMuteRuleRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.schedule"></a>

```csharp
public CloudwatchAlarmMuteRuleRuleScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference">CloudwatchAlarmMuteRuleRuleScheduleOutputReference</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.scheduleInput"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRuleSchedule ScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>

---


### CloudwatchAlarmMuteRuleRuleScheduleOutputReference <a name="CloudwatchAlarmMuteRuleRuleScheduleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlarmMuteRuleRuleScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRuleSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>

---


### CloudwatchAlarmMuteRuleTagsList <a name="CloudwatchAlarmMuteRuleTagsList" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlarmMuteRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.get"></a>

```csharp
private CloudwatchAlarmMuteRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>[]

---


### CloudwatchAlarmMuteRuleTagsOutputReference <a name="CloudwatchAlarmMuteRuleTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchAlarmMuteRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>

---



