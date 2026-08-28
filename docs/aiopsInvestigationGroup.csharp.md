# `aiopsInvestigationGroup` Submodule <a name="`aiopsInvestigationGroup` Submodule" id="@cdktn/provider-awscc.aiopsInvestigationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiopsInvestigationGroup <a name="AiopsInvestigationGroup" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group awscc_aiops_investigation_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroup(Construct Scope, string Id, AiopsInvestigationGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig">AiopsInvestigationGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig">AiopsInvestigationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels">PutChatbotNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations">PutCrossAccountConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetChatbotNotificationChannels">ResetChatbotNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetCrossAccountConfigurations">ResetCrossAccountConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetInvestigationGroupPolicy">ResetInvestigationGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetIsCloudTrailEventHistoryEnabled">ResetIsCloudTrailEventHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTagKeyBoundaries">ResetTagKeyBoundaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutChatbotNotificationChannels` <a name="PutChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels"></a>

```csharp
private void PutChatbotNotificationChannels(IResolvable|AiopsInvestigationGroupChatbotNotificationChannels[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]

---

##### `PutCrossAccountConfigurations` <a name="PutCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations"></a>

```csharp
private void PutCrossAccountConfigurations(IResolvable|AiopsInvestigationGroupCrossAccountConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig"></a>

```csharp
private void PutEncryptionConfig(AiopsInvestigationGroupEncryptionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|AiopsInvestigationGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]

---

##### `ResetChatbotNotificationChannels` <a name="ResetChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetChatbotNotificationChannels"></a>

```csharp
private void ResetChatbotNotificationChannels()
```

##### `ResetCrossAccountConfigurations` <a name="ResetCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetCrossAccountConfigurations"></a>

```csharp
private void ResetCrossAccountConfigurations()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetEncryptionConfig"></a>

```csharp
private void ResetEncryptionConfig()
```

##### `ResetInvestigationGroupPolicy` <a name="ResetInvestigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetInvestigationGroupPolicy"></a>

```csharp
private void ResetInvestigationGroupPolicy()
```

##### `ResetIsCloudTrailEventHistoryEnabled` <a name="ResetIsCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetIsCloudTrailEventHistoryEnabled"></a>

```csharp
private void ResetIsCloudTrailEventHistoryEnabled()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRetentionInDays"></a>

```csharp
private void ResetRetentionInDays()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTagKeyBoundaries` <a name="ResetTagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTagKeyBoundaries"></a>

```csharp
private void ResetTagKeyBoundaries()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiopsInvestigationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AiopsInvestigationGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AiopsInvestigationGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AiopsInvestigationGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AiopsInvestigationGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AiopsInvestigationGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiopsInvestigationGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiopsInvestigationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AiopsInvestigationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannels">ChatbotNotificationChannels</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList">AiopsInvestigationGroupChatbotNotificationChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurations">CrossAccountConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList">AiopsInvestigationGroupCrossAccountConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference">AiopsInvestigationGroupEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedAt">LastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedBy">LastModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList">AiopsInvestigationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannelsInput">ChatbotNotificationChannelsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurationsInput">CrossAccountConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicyInput">InvestigationGroupPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabledInput">IsCloudTrailEventHistoryEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundariesInput">TagKeyBoundariesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicy">InvestigationGroupPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled">IsCloudTrailEventHistoryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundaries">TagKeyBoundaries</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ChatbotNotificationChannels`<sup>Required</sup> <a name="ChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannels"></a>

```csharp
public AiopsInvestigationGroupChatbotNotificationChannelsList ChatbotNotificationChannels { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList">AiopsInvestigationGroupChatbotNotificationChannelsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CrossAccountConfigurations`<sup>Required</sup> <a name="CrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurations"></a>

```csharp
public AiopsInvestigationGroupCrossAccountConfigurationsList CrossAccountConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList">AiopsInvestigationGroupCrossAccountConfigurationsList</a>

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfig"></a>

```csharp
public AiopsInvestigationGroupEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference">AiopsInvestigationGroupEncryptionConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedAt"></a>

```csharp
public string LastModifiedAt { get; }
```

- *Type:* string

---

##### `LastModifiedBy`<sup>Required</sup> <a name="LastModifiedBy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedBy"></a>

```csharp
public string LastModifiedBy { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tags"></a>

```csharp
public AiopsInvestigationGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList">AiopsInvestigationGroupTagsList</a>

---

##### `ChatbotNotificationChannelsInput`<sup>Optional</sup> <a name="ChatbotNotificationChannelsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannelsInput"></a>

```csharp
public IResolvable|AiopsInvestigationGroupChatbotNotificationChannels[] ChatbotNotificationChannelsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]

---

##### `CrossAccountConfigurationsInput`<sup>Optional</sup> <a name="CrossAccountConfigurationsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurationsInput"></a>

```csharp
public IResolvable|AiopsInvestigationGroupCrossAccountConfigurations[] CrossAccountConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfigInput"></a>

```csharp
public IResolvable|AiopsInvestigationGroupEncryptionConfig EncryptionConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---

##### `InvestigationGroupPolicyInput`<sup>Optional</sup> <a name="InvestigationGroupPolicyInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicyInput"></a>

```csharp
public string InvestigationGroupPolicyInput { get; }
```

- *Type:* string

---

##### `IsCloudTrailEventHistoryEnabledInput`<sup>Optional</sup> <a name="IsCloudTrailEventHistoryEnabledInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabledInput"></a>

```csharp
public bool|IResolvable IsCloudTrailEventHistoryEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDaysInput"></a>

```csharp
public double RetentionInDaysInput { get; }
```

- *Type:* double

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagKeyBoundariesInput`<sup>Optional</sup> <a name="TagKeyBoundariesInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundariesInput"></a>

```csharp
public string[] TagKeyBoundariesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagsInput"></a>

```csharp
public IResolvable|AiopsInvestigationGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]

---

##### `InvestigationGroupPolicy`<sup>Required</sup> <a name="InvestigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicy"></a>

```csharp
public string InvestigationGroupPolicy { get; }
```

- *Type:* string

---

##### `IsCloudTrailEventHistoryEnabled`<sup>Required</sup> <a name="IsCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled"></a>

```csharp
public bool|IResolvable IsCloudTrailEventHistoryEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TagKeyBoundaries`<sup>Required</sup> <a name="TagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundaries"></a>

```csharp
public string[] TagKeyBoundaries { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiopsInvestigationGroupChatbotNotificationChannels <a name="AiopsInvestigationGroupChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupChatbotNotificationChannels {
    string[] ChatConfigurationArns = null,
    string SnsTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.chatConfigurationArns">ChatConfigurationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#chat_configuration_arns AiopsInvestigationGroup#chat_configuration_arns}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#sns_topic_arn AiopsInvestigationGroup#sns_topic_arn}. |

---

##### `ChatConfigurationArns`<sup>Optional</sup> <a name="ChatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.chatConfigurationArns"></a>

```csharp
public string[] ChatConfigurationArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#chat_configuration_arns AiopsInvestigationGroup#chat_configuration_arns}.

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#sns_topic_arn AiopsInvestigationGroup#sns_topic_arn}.

---

### AiopsInvestigationGroupConfig <a name="AiopsInvestigationGroupConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|AiopsInvestigationGroupChatbotNotificationChannels[] ChatbotNotificationChannels = null,
    IResolvable|AiopsInvestigationGroupCrossAccountConfigurations[] CrossAccountConfigurations = null,
    AiopsInvestigationGroupEncryptionConfig EncryptionConfig = null,
    string InvestigationGroupPolicy = null,
    bool|IResolvable IsCloudTrailEventHistoryEnabled = null,
    double RetentionInDays = null,
    string RoleArn = null,
    string[] TagKeyBoundaries = null,
    IResolvable|AiopsInvestigationGroupTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.name">Name</a></code> | <code>string</code> | User friendly name for resources. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.chatbotNotificationChannels">ChatbotNotificationChannels</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]</code> | An array of key-value pairs of notification channels to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.crossAccountConfigurations">CrossAccountConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]</code> | An array of cross account configurations. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.investigationGroupPolicy">InvestigationGroupPolicy</a></code> | <code>string</code> | Investigation Group policy. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.isCloudTrailEventHistoryEnabled">IsCloudTrailEventHistoryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Flag to enable cloud trail history. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | The number of days to retain the investigation group. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Investigation Role's ARN. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tagKeyBoundaries">TagKeyBoundaries</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

User friendly name for resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#name AiopsInvestigationGroup#name}

---

##### `ChatbotNotificationChannels`<sup>Optional</sup> <a name="ChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.chatbotNotificationChannels"></a>

```csharp
public IResolvable|AiopsInvestigationGroupChatbotNotificationChannels[] ChatbotNotificationChannels { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]

An array of key-value pairs of notification channels to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#chatbot_notification_channels AiopsInvestigationGroup#chatbot_notification_channels}

---

##### `CrossAccountConfigurations`<sup>Optional</sup> <a name="CrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.crossAccountConfigurations"></a>

```csharp
public IResolvable|AiopsInvestigationGroupCrossAccountConfigurations[] CrossAccountConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]

An array of cross account configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#cross_account_configurations AiopsInvestigationGroup#cross_account_configurations}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.encryptionConfig"></a>

```csharp
public AiopsInvestigationGroupEncryptionConfig EncryptionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}.

---

##### `InvestigationGroupPolicy`<sup>Optional</sup> <a name="InvestigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.investigationGroupPolicy"></a>

```csharp
public string InvestigationGroupPolicy { get; set; }
```

- *Type:* string

Investigation Group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#investigation_group_policy AiopsInvestigationGroup#investigation_group_policy}

---

##### `IsCloudTrailEventHistoryEnabled`<sup>Optional</sup> <a name="IsCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.isCloudTrailEventHistoryEnabled"></a>

```csharp
public bool|IResolvable IsCloudTrailEventHistoryEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Flag to enable cloud trail history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#is_cloud_trail_event_history_enabled AiopsInvestigationGroup#is_cloud_trail_event_history_enabled}

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; set; }
```

- *Type:* double

The number of days to retain the investigation group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#retention_in_days AiopsInvestigationGroup#retention_in_days}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#role_arn AiopsInvestigationGroup#role_arn}

---

##### `TagKeyBoundaries`<sup>Optional</sup> <a name="TagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tagKeyBoundaries"></a>

```csharp
public string[] TagKeyBoundaries { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tags"></a>

```csharp
public IResolvable|AiopsInvestigationGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#tags AiopsInvestigationGroup#tags}

---

### AiopsInvestigationGroupCrossAccountConfigurations <a name="AiopsInvestigationGroupCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupCrossAccountConfigurations {
    string SourceRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.property.sourceRoleArn">SourceRoleArn</a></code> | <code>string</code> | The Investigation Role's ARN. |

---

##### `SourceRoleArn`<sup>Optional</sup> <a name="SourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.property.sourceRoleArn"></a>

```csharp
public string SourceRoleArn { get; set; }
```

- *Type:* string

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#source_role_arn AiopsInvestigationGroup#source_role_arn}

---

### AiopsInvestigationGroupEncryptionConfig <a name="AiopsInvestigationGroupEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupEncryptionConfig {
    string EncryptionConfigurationType = null,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.encryptionConfigurationType">EncryptionConfigurationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}. |

---

##### `EncryptionConfigurationType`<sup>Optional</sup> <a name="EncryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.encryptionConfigurationType"></a>

```csharp
public string EncryptionConfigurationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}.

---

### AiopsInvestigationGroupTags <a name="AiopsInvestigationGroupTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#key AiopsInvestigationGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#value AiopsInvestigationGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#key AiopsInvestigationGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aiops_investigation_group#value AiopsInvestigationGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiopsInvestigationGroupChatbotNotificationChannelsList <a name="AiopsInvestigationGroupChatbotNotificationChannelsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupChatbotNotificationChannelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get"></a>

```csharp
private AiopsInvestigationGroupChatbotNotificationChannelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.internalValue"></a>

```csharp
public IResolvable|AiopsInvestigationGroupChatbotNotificationChannels[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]

---


### AiopsInvestigationGroupChatbotNotificationChannelsOutputReference <a name="AiopsInvestigationGroupChatbotNotificationChannelsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupChatbotNotificationChannelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetChatConfigurationArns">ResetChatConfigurationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChatConfigurationArns` <a name="ResetChatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetChatConfigurationArns"></a>

```csharp
private void ResetChatConfigurationArns()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArnsInput">ChatConfigurationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns">ChatConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChatConfigurationArnsInput`<sup>Optional</sup> <a name="ChatConfigurationArnsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArnsInput"></a>

```csharp
public string[] ChatConfigurationArnsInput { get; }
```

- *Type:* string[]

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `ChatConfigurationArns`<sup>Required</sup> <a name="ChatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns"></a>

```csharp
public string[] ChatConfigurationArns { get; }
```

- *Type:* string[]

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiopsInvestigationGroupChatbotNotificationChannels InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>

---


### AiopsInvestigationGroupCrossAccountConfigurationsList <a name="AiopsInvestigationGroupCrossAccountConfigurationsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupCrossAccountConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get"></a>

```csharp
private AiopsInvestigationGroupCrossAccountConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|AiopsInvestigationGroupCrossAccountConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]

---


### AiopsInvestigationGroupCrossAccountConfigurationsOutputReference <a name="AiopsInvestigationGroupCrossAccountConfigurationsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupCrossAccountConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resetSourceRoleArn">ResetSourceRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceRoleArn` <a name="ResetSourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resetSourceRoleArn"></a>

```csharp
private void ResetSourceRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArnInput">SourceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn">SourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceRoleArnInput`<sup>Optional</sup> <a name="SourceRoleArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArnInput"></a>

```csharp
public string SourceRoleArnInput { get; }
```

- *Type:* string

---

##### `SourceRoleArn`<sup>Required</sup> <a name="SourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn"></a>

```csharp
public string SourceRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiopsInvestigationGroupCrossAccountConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>

---


### AiopsInvestigationGroupEncryptionConfigOutputReference <a name="AiopsInvestigationGroupEncryptionConfigOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetEncryptionConfigurationType">ResetEncryptionConfigurationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionConfigurationType` <a name="ResetEncryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetEncryptionConfigurationType"></a>

```csharp
private void ResetEncryptionConfigurationType()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationTypeInput">EncryptionConfigurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType">EncryptionConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationTypeInput`<sup>Optional</sup> <a name="EncryptionConfigurationTypeInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationTypeInput"></a>

```csharp
public string EncryptionConfigurationTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationType`<sup>Required</sup> <a name="EncryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType"></a>

```csharp
public string EncryptionConfigurationType { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiopsInvestigationGroupEncryptionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---


### AiopsInvestigationGroupTagsList <a name="AiopsInvestigationGroupTagsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get"></a>

```csharp
private AiopsInvestigationGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|AiopsInvestigationGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]

---


### AiopsInvestigationGroupTagsOutputReference <a name="AiopsInvestigationGroupTagsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AiopsInvestigationGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiopsInvestigationGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>

---



