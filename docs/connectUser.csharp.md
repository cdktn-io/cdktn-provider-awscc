# `connectUser` Submodule <a name="`connectUser` Submodule" id="@cdktn/provider-awscc.connectUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUser <a name="ConnectUser" id="@cdktn/provider-awscc.connectUser.ConnectUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user awscc_connect_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUser(Construct Scope, string Id, ConnectUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig">ConnectUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig">ConnectUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putAfterContactWorkConfigs">PutAfterContactWorkConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putAutoAcceptConfigs">PutAutoAcceptConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo">PutIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putPersistentConnectionConfigs">PutPersistentConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig">PutPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneNumberConfigs">PutPhoneNumberConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putUserProficiencies">PutUserProficiencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putVoiceEnhancementConfigs">PutVoiceEnhancementConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetAfterContactWorkConfigs">ResetAfterContactWorkConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetAutoAcceptConfigs">ResetAutoAcceptConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetDirectoryUserId">ResetDirectoryUserId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetHierarchyGroupArn">ResetHierarchyGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetIdentityInfo">ResetIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPersistentConnectionConfigs">ResetPersistentConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneConfig">ResetPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneNumberConfigs">ResetPhoneNumberConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetUserProficiencies">ResetUserProficiencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetVoiceEnhancementConfigs">ResetVoiceEnhancementConfigs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectUser.ConnectUser.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectUser.ConnectUser.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectUser.ConnectUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectUser.ConnectUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectUser.ConnectUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectUser.ConnectUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectUser.ConnectUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectUser.ConnectUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectUser.ConnectUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectUser.ConnectUser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAfterContactWorkConfigs` <a name="PutAfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAfterContactWorkConfigs"></a>

```csharp
private void PutAfterContactWorkConfigs(IResolvable|ConnectUserAfterContactWorkConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAfterContactWorkConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]

---

##### `PutAutoAcceptConfigs` <a name="PutAutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAutoAcceptConfigs"></a>

```csharp
private void PutAutoAcceptConfigs(IResolvable|ConnectUserAutoAcceptConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAutoAcceptConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]

---

##### `PutIdentityInfo` <a name="PutIdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo"></a>

```csharp
private void PutIdentityInfo(ConnectUserIdentityInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `PutPersistentConnectionConfigs` <a name="PutPersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPersistentConnectionConfigs"></a>

```csharp
private void PutPersistentConnectionConfigs(IResolvable|ConnectUserPersistentConnectionConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPersistentConnectionConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]

---

##### `PutPhoneConfig` <a name="PutPhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig"></a>

```csharp
private void PutPhoneConfig(ConnectUserPhoneConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `PutPhoneNumberConfigs` <a name="PutPhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneNumberConfigs"></a>

```csharp
private void PutPhoneNumberConfigs(IResolvable|ConnectUserPhoneNumberConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneNumberConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectUser.ConnectUser.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectUserTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]

---

##### `PutUserProficiencies` <a name="PutUserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.putUserProficiencies"></a>

```csharp
private void PutUserProficiencies(IResolvable|ConnectUserUserProficiencies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putUserProficiencies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]

---

##### `PutVoiceEnhancementConfigs` <a name="PutVoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putVoiceEnhancementConfigs"></a>

```csharp
private void PutVoiceEnhancementConfigs(IResolvable|ConnectUserVoiceEnhancementConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putVoiceEnhancementConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]

---

##### `ResetAfterContactWorkConfigs` <a name="ResetAfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetAfterContactWorkConfigs"></a>

```csharp
private void ResetAfterContactWorkConfigs()
```

##### `ResetAutoAcceptConfigs` <a name="ResetAutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetAutoAcceptConfigs"></a>

```csharp
private void ResetAutoAcceptConfigs()
```

##### `ResetDirectoryUserId` <a name="ResetDirectoryUserId" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetDirectoryUserId"></a>

```csharp
private void ResetDirectoryUserId()
```

##### `ResetHierarchyGroupArn` <a name="ResetHierarchyGroupArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetHierarchyGroupArn"></a>

```csharp
private void ResetHierarchyGroupArn()
```

##### `ResetIdentityInfo` <a name="ResetIdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetIdentityInfo"></a>

```csharp
private void ResetIdentityInfo()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPersistentConnectionConfigs` <a name="ResetPersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPersistentConnectionConfigs"></a>

```csharp
private void ResetPersistentConnectionConfigs()
```

##### `ResetPhoneConfig` <a name="ResetPhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneConfig"></a>

```csharp
private void ResetPhoneConfig()
```

##### `ResetPhoneNumberConfigs` <a name="ResetPhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneNumberConfigs"></a>

```csharp
private void ResetPhoneNumberConfigs()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUserProficiencies` <a name="ResetUserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetUserProficiencies"></a>

```csharp
private void ResetUserProficiencies()
```

##### `ResetVoiceEnhancementConfigs` <a name="ResetVoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetVoiceEnhancementConfigs"></a>

```csharp
private void ResetVoiceEnhancementConfigs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectUser.ConnectUser.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectUser.ConnectUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectUser resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigs">AfterContactWorkConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList">ConnectUserAfterContactWorkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigs">AutoAcceptConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList">ConnectUserAutoAcceptConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfo">IdentityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigs">PersistentConnectionConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList">ConnectUserPersistentConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfig">PhoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigs">PhoneNumberConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList">ConnectUserPhoneNumberConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList">ConnectUserTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userArn">UserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficiencies">UserProficiencies</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList">ConnectUserUserProficienciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigs">VoiceEnhancementConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList">ConnectUserVoiceEnhancementConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigsInput">AfterContactWorkConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigsInput">AutoAcceptConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserIdInput">DirectoryUserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArnInput">HierarchyGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfoInput">IdentityInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigsInput">PersistentConnectionConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfigInput">PhoneConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigsInput">PhoneNumberConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArnInput">RoutingProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArnsInput">SecurityProfileArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficienciesInput">UserProficienciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigsInput">VoiceEnhancementConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserId">DirectoryUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArn">HierarchyGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArn">RoutingProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArns">SecurityProfileArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AfterContactWorkConfigs`<sup>Required</sup> <a name="AfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigs"></a>

```csharp
public ConnectUserAfterContactWorkConfigsList AfterContactWorkConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList">ConnectUserAfterContactWorkConfigsList</a>

---

##### `AutoAcceptConfigs`<sup>Required</sup> <a name="AutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigs"></a>

```csharp
public ConnectUserAutoAcceptConfigsList AutoAcceptConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList">ConnectUserAutoAcceptConfigsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityInfo`<sup>Required</sup> <a name="IdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfo"></a>

```csharp
public ConnectUserIdentityInfoOutputReference IdentityInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a>

---

##### `PersistentConnectionConfigs`<sup>Required</sup> <a name="PersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigs"></a>

```csharp
public ConnectUserPersistentConnectionConfigsList PersistentConnectionConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList">ConnectUserPersistentConnectionConfigsList</a>

---

##### `PhoneConfig`<sup>Required</sup> <a name="PhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfig"></a>

```csharp
public ConnectUserPhoneConfigOutputReference PhoneConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a>

---

##### `PhoneNumberConfigs`<sup>Required</sup> <a name="PhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigs"></a>

```csharp
public ConnectUserPhoneNumberConfigsList PhoneNumberConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList">ConnectUserPhoneNumberConfigsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tags"></a>

```csharp
public ConnectUserTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList">ConnectUserTagsList</a>

---

##### `UserArn`<sup>Required</sup> <a name="UserArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userArn"></a>

```csharp
public string UserArn { get; }
```

- *Type:* string

---

##### `UserProficiencies`<sup>Required</sup> <a name="UserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficiencies"></a>

```csharp
public ConnectUserUserProficienciesList UserProficiencies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList">ConnectUserUserProficienciesList</a>

---

##### `VoiceEnhancementConfigs`<sup>Required</sup> <a name="VoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigs"></a>

```csharp
public ConnectUserVoiceEnhancementConfigsList VoiceEnhancementConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList">ConnectUserVoiceEnhancementConfigsList</a>

---

##### `AfterContactWorkConfigsInput`<sup>Optional</sup> <a name="AfterContactWorkConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigsInput"></a>

```csharp
public IResolvable|ConnectUserAfterContactWorkConfigs[] AfterContactWorkConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]

---

##### `AutoAcceptConfigsInput`<sup>Optional</sup> <a name="AutoAcceptConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigsInput"></a>

```csharp
public IResolvable|ConnectUserAutoAcceptConfigs[] AutoAcceptConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]

---

##### `DirectoryUserIdInput`<sup>Optional</sup> <a name="DirectoryUserIdInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserIdInput"></a>

```csharp
public string DirectoryUserIdInput { get; }
```

- *Type:* string

---

##### `HierarchyGroupArnInput`<sup>Optional</sup> <a name="HierarchyGroupArnInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArnInput"></a>

```csharp
public string HierarchyGroupArnInput { get; }
```

- *Type:* string

---

##### `IdentityInfoInput`<sup>Optional</sup> <a name="IdentityInfoInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfoInput"></a>

```csharp
public IResolvable|ConnectUserIdentityInfo IdentityInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PersistentConnectionConfigsInput`<sup>Optional</sup> <a name="PersistentConnectionConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigsInput"></a>

```csharp
public IResolvable|ConnectUserPersistentConnectionConfigs[] PersistentConnectionConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]

---

##### `PhoneConfigInput`<sup>Optional</sup> <a name="PhoneConfigInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfigInput"></a>

```csharp
public IResolvable|ConnectUserPhoneConfig PhoneConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `PhoneNumberConfigsInput`<sup>Optional</sup> <a name="PhoneNumberConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigsInput"></a>

```csharp
public IResolvable|ConnectUserPhoneNumberConfigs[] PhoneNumberConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]

---

##### `RoutingProfileArnInput`<sup>Optional</sup> <a name="RoutingProfileArnInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArnInput"></a>

```csharp
public string RoutingProfileArnInput { get; }
```

- *Type:* string

---

##### `SecurityProfileArnsInput`<sup>Optional</sup> <a name="SecurityProfileArnsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArnsInput"></a>

```csharp
public string[] SecurityProfileArnsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tagsInput"></a>

```csharp
public IResolvable|ConnectUserTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UserProficienciesInput`<sup>Optional</sup> <a name="UserProficienciesInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficienciesInput"></a>

```csharp
public IResolvable|ConnectUserUserProficiencies[] UserProficienciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]

---

##### `VoiceEnhancementConfigsInput`<sup>Optional</sup> <a name="VoiceEnhancementConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigsInput"></a>

```csharp
public IResolvable|ConnectUserVoiceEnhancementConfigs[] VoiceEnhancementConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]

---

##### `DirectoryUserId`<sup>Required</sup> <a name="DirectoryUserId" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserId"></a>

```csharp
public string DirectoryUserId { get; }
```

- *Type:* string

---

##### `HierarchyGroupArn`<sup>Required</sup> <a name="HierarchyGroupArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArn"></a>

```csharp
public string HierarchyGroupArn { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RoutingProfileArn`<sup>Required</sup> <a name="RoutingProfileArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArn"></a>

```csharp
public string RoutingProfileArn { get; }
```

- *Type:* string

---

##### `SecurityProfileArns`<sup>Required</sup> <a name="SecurityProfileArns" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArns"></a>

```csharp
public string[] SecurityProfileArns { get; }
```

- *Type:* string[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserAfterContactWorkConfigs <a name="ConnectUserAfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserAfterContactWorkConfigs {
    ConnectUserAfterContactWorkConfigsAfterContactWorkConfig AfterContactWorkConfig = null,
    ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig AgentFirstCallbackAfterContactWorkConfig = null,
    string Channel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.afterContactWorkConfig">AfterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | After Contact Work configuration. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.agentFirstCallbackAfterContactWorkConfig">AgentFirstCallbackAfterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | After Contact Work configuration. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.channel">Channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |

---

##### `AfterContactWorkConfig`<sup>Optional</sup> <a name="AfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.afterContactWorkConfig"></a>

```csharp
public ConnectUserAfterContactWorkConfigsAfterContactWorkConfig AfterContactWorkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

After Contact Work configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_config ConnectUser#after_contact_work_config}

---

##### `AgentFirstCallbackAfterContactWorkConfig`<sup>Optional</sup> <a name="AgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.agentFirstCallbackAfterContactWorkConfig"></a>

```csharp
public ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig AgentFirstCallbackAfterContactWorkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

After Contact Work configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#agent_first_callback_after_contact_work_config ConnectUser#agent_first_callback_after_contact_work_config}

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#channel ConnectUser#channel}

---

### ConnectUserAfterContactWorkConfigsAfterContactWorkConfig <a name="ConnectUserAfterContactWorkConfigsAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserAfterContactWorkConfigsAfterContactWorkConfig {
    string AfterContactWorkMode = null,
    double AfterContactWorkTimeLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkMode">AfterContactWorkMode</a></code> | <code>string</code> | The after contact work (ACW) mode for the channel. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkTimeLimit">AfterContactWorkTimeLimit</a></code> | <code>double</code> | The After Call Work (ACW) timeout setting, in seconds. |

---

##### `AfterContactWorkMode`<sup>Optional</sup> <a name="AfterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkMode"></a>

```csharp
public string AfterContactWorkMode { get; set; }
```

- *Type:* string

The after contact work (ACW) mode for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_mode ConnectUser#after_contact_work_mode}

---

##### `AfterContactWorkTimeLimit`<sup>Optional</sup> <a name="AfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkTimeLimit"></a>

```csharp
public double AfterContactWorkTimeLimit { get; set; }
```

- *Type:* double

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

### ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig <a name="ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig {
    string AfterContactWorkMode = null,
    double AfterContactWorkTimeLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkMode">AfterContactWorkMode</a></code> | <code>string</code> | The after contact work (ACW) mode for the channel. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkTimeLimit">AfterContactWorkTimeLimit</a></code> | <code>double</code> | The After Call Work (ACW) timeout setting, in seconds. |

---

##### `AfterContactWorkMode`<sup>Optional</sup> <a name="AfterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkMode"></a>

```csharp
public string AfterContactWorkMode { get; set; }
```

- *Type:* string

The after contact work (ACW) mode for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_mode ConnectUser#after_contact_work_mode}

---

##### `AfterContactWorkTimeLimit`<sup>Optional</sup> <a name="AfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkTimeLimit"></a>

```csharp
public double AfterContactWorkTimeLimit { get; set; }
```

- *Type:* double

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

### ConnectUserAutoAcceptConfigs <a name="ConnectUserAutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserAutoAcceptConfigs {
    bool|IResolvable AgentFirstCallbackAutoAccept = null,
    bool|IResolvable AutoAccept = null,
    string Channel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.agentFirstCallbackAutoAccept">AgentFirstCallbackAutoAccept</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The agent first callback auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.autoAccept">AutoAccept</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The Auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.channel">Channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |

---

##### `AgentFirstCallbackAutoAccept`<sup>Optional</sup> <a name="AgentFirstCallbackAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.agentFirstCallbackAutoAccept"></a>

```csharp
public bool|IResolvable AgentFirstCallbackAutoAccept { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The agent first callback auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#agent_first_callback_auto_accept ConnectUser#agent_first_callback_auto_accept}

---

##### `AutoAccept`<sup>Optional</sup> <a name="AutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.autoAccept"></a>

```csharp
public bool|IResolvable AutoAccept { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The Auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#channel ConnectUser#channel}

---

### ConnectUserConfig <a name="ConnectUserConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceArn,
    string RoutingProfileArn,
    string[] SecurityProfileArns,
    string Username,
    IResolvable|ConnectUserAfterContactWorkConfigs[] AfterContactWorkConfigs = null,
    IResolvable|ConnectUserAutoAcceptConfigs[] AutoAcceptConfigs = null,
    string DirectoryUserId = null,
    string HierarchyGroupArn = null,
    ConnectUserIdentityInfo IdentityInfo = null,
    string Password = null,
    IResolvable|ConnectUserPersistentConnectionConfigs[] PersistentConnectionConfigs = null,
    ConnectUserPhoneConfig PhoneConfig = null,
    IResolvable|ConnectUserPhoneNumberConfigs[] PhoneNumberConfigs = null,
    IResolvable|ConnectUserTags[] Tags = null,
    IResolvable|ConnectUserUserProficiencies[] UserProficiencies = null,
    IResolvable|ConnectUserVoiceEnhancementConfigs[] VoiceEnhancementConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.routingProfileArn">RoutingProfileArn</a></code> | <code>string</code> | The identifier of the routing profile for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.securityProfileArns">SecurityProfileArns</a></code> | <code>string[]</code> | One or more security profile arns for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.username">Username</a></code> | <code>string</code> | The user name for the account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.afterContactWorkConfigs">AfterContactWorkConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]</code> | After Contact Work configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.autoAcceptConfigs">AutoAcceptConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]</code> | Auto-accept configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.directoryUserId">DirectoryUserId</a></code> | <code>string</code> | The identifier of the user account in the directory used for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.hierarchyGroupArn">HierarchyGroupArn</a></code> | <code>string</code> | The identifier of the hierarchy group for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.identityInfo">IdentityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | The information about the identity of the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.password">Password</a></code> | <code>string</code> | The password for the user account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.persistentConnectionConfigs">PersistentConnectionConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]</code> | Persistent Connection configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneConfig">PhoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | The phone settings for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneNumberConfigs">PhoneNumberConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]</code> | Phone Number configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.userProficiencies">UserProficiencies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]</code> | One or more predefined attributes assigned to a user, with a level that indicates how skilled they are. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.voiceEnhancementConfigs">VoiceEnhancementConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]</code> | Voice Enhancement configurations of a user. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#instance_arn ConnectUser#instance_arn}

---

##### `RoutingProfileArn`<sup>Required</sup> <a name="RoutingProfileArn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.routingProfileArn"></a>

```csharp
public string RoutingProfileArn { get; set; }
```

- *Type:* string

The identifier of the routing profile for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#routing_profile_arn ConnectUser#routing_profile_arn}

---

##### `SecurityProfileArns`<sup>Required</sup> <a name="SecurityProfileArns" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.securityProfileArns"></a>

```csharp
public string[] SecurityProfileArns { get; set; }
```

- *Type:* string[]

One or more security profile arns for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#security_profile_arns ConnectUser#security_profile_arns}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The user name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#username ConnectUser#username}

---

##### `AfterContactWorkConfigs`<sup>Optional</sup> <a name="AfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.afterContactWorkConfigs"></a>

```csharp
public IResolvable|ConnectUserAfterContactWorkConfigs[] AfterContactWorkConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]

After Contact Work configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_configs ConnectUser#after_contact_work_configs}

---

##### `AutoAcceptConfigs`<sup>Optional</sup> <a name="AutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.autoAcceptConfigs"></a>

```csharp
public IResolvable|ConnectUserAutoAcceptConfigs[] AutoAcceptConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]

Auto-accept configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#auto_accept_configs ConnectUser#auto_accept_configs}

---

##### `DirectoryUserId`<sup>Optional</sup> <a name="DirectoryUserId" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.directoryUserId"></a>

```csharp
public string DirectoryUserId { get; set; }
```

- *Type:* string

The identifier of the user account in the directory used for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#directory_user_id ConnectUser#directory_user_id}

---

##### `HierarchyGroupArn`<sup>Optional</sup> <a name="HierarchyGroupArn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.hierarchyGroupArn"></a>

```csharp
public string HierarchyGroupArn { get; set; }
```

- *Type:* string

The identifier of the hierarchy group for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#hierarchy_group_arn ConnectUser#hierarchy_group_arn}

---

##### `IdentityInfo`<sup>Optional</sup> <a name="IdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.identityInfo"></a>

```csharp
public ConnectUserIdentityInfo IdentityInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

The information about the identity of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#identity_info ConnectUser#identity_info}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for the user account.

A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#password ConnectUser#password}

---

##### `PersistentConnectionConfigs`<sup>Optional</sup> <a name="PersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.persistentConnectionConfigs"></a>

```csharp
public IResolvable|ConnectUserPersistentConnectionConfigs[] PersistentConnectionConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]

Persistent Connection configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#persistent_connection_configs ConnectUser#persistent_connection_configs}

---

##### `PhoneConfig`<sup>Optional</sup> <a name="PhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneConfig"></a>

```csharp
public ConnectUserPhoneConfig PhoneConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

The phone settings for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_config ConnectUser#phone_config}

---

##### `PhoneNumberConfigs`<sup>Optional</sup> <a name="PhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneNumberConfigs"></a>

```csharp
public IResolvable|ConnectUserPhoneNumberConfigs[] PhoneNumberConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]

Phone Number configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_number_configs ConnectUser#phone_number_configs}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.tags"></a>

```csharp
public IResolvable|ConnectUserTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#tags ConnectUser#tags}

---

##### `UserProficiencies`<sup>Optional</sup> <a name="UserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.userProficiencies"></a>

```csharp
public IResolvable|ConnectUserUserProficiencies[] UserProficiencies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]

One or more predefined attributes assigned to a user, with a level that indicates how skilled they are.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#user_proficiencies ConnectUser#user_proficiencies}

---

##### `VoiceEnhancementConfigs`<sup>Optional</sup> <a name="VoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.voiceEnhancementConfigs"></a>

```csharp
public IResolvable|ConnectUserVoiceEnhancementConfigs[] VoiceEnhancementConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]

Voice Enhancement configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#voice_enhancement_configs ConnectUser#voice_enhancement_configs}

---

### ConnectUserIdentityInfo <a name="ConnectUserIdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserIdentityInfo {
    string Email = null,
    string FirstName = null,
    string LastName = null,
    string Mobile = null,
    string SecondaryEmail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.email">Email</a></code> | <code>string</code> | The email address. If you are using SAML for identity management and include this parameter, an error is returned. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.firstName">FirstName</a></code> | <code>string</code> | The first name. This is required if you are using Amazon Connect or SAML for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.lastName">LastName</a></code> | <code>string</code> | The last name. This is required if you are using Amazon Connect or SAML for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.mobile">Mobile</a></code> | <code>string</code> | The mobile phone number. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.secondaryEmail">SecondaryEmail</a></code> | <code>string</code> | The secondary email address. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The email address. If you are using SAML for identity management and include this parameter, an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#email ConnectUser#email}

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

The first name. This is required if you are using Amazon Connect or SAML for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#first_name ConnectUser#first_name}

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

The last name. This is required if you are using Amazon Connect or SAML for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#last_name ConnectUser#last_name}

---

##### `Mobile`<sup>Optional</sup> <a name="Mobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.mobile"></a>

```csharp
public string Mobile { get; set; }
```

- *Type:* string

The mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#mobile ConnectUser#mobile}

---

##### `SecondaryEmail`<sup>Optional</sup> <a name="SecondaryEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.secondaryEmail"></a>

```csharp
public string SecondaryEmail { get; set; }
```

- *Type:* string

The secondary email address.

If you provide a secondary email, the user receives email notifications -- other than password reset notifications -- to this email address instead of to their primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#secondary_email ConnectUser#secondary_email}

---

### ConnectUserPersistentConnectionConfigs <a name="ConnectUserPersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserPersistentConnectionConfigs {
    string Channel = null,
    bool|IResolvable PersistentConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.channel">Channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.persistentConnection">PersistentConnection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The Persistent Connection setting. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `PersistentConnection`<sup>Optional</sup> <a name="PersistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.persistentConnection"></a>

```csharp
public bool|IResolvable PersistentConnection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The Persistent Connection setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#persistent_connection ConnectUser#persistent_connection}

---

### ConnectUserPhoneConfig <a name="ConnectUserPhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserPhoneConfig {
    double AfterContactWorkTimeLimit = null,
    bool|IResolvable AutoAccept = null,
    string DeskPhoneNumber = null,
    bool|IResolvable PersistentConnection = null,
    string PhoneType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit">AfterContactWorkTimeLimit</a></code> | <code>double</code> | The After Call Work (ACW) timeout setting, in seconds. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.autoAccept">AutoAccept</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The Auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber">DeskPhoneNumber</a></code> | <code>string</code> | The phone number for the user's desk phone. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.persistentConnection">PersistentConnection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The Persistent Connection setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.phoneType">PhoneType</a></code> | <code>string</code> | The phone type. |

---

##### `AfterContactWorkTimeLimit`<sup>Optional</sup> <a name="AfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit"></a>

```csharp
public double AfterContactWorkTimeLimit { get; set; }
```

- *Type:* double

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

##### `AutoAccept`<sup>Optional</sup> <a name="AutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.autoAccept"></a>

```csharp
public bool|IResolvable AutoAccept { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The Auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}

---

##### `DeskPhoneNumber`<sup>Optional</sup> <a name="DeskPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber"></a>

```csharp
public string DeskPhoneNumber { get; set; }
```

- *Type:* string

The phone number for the user's desk phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#desk_phone_number ConnectUser#desk_phone_number}

---

##### `PersistentConnection`<sup>Optional</sup> <a name="PersistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.persistentConnection"></a>

```csharp
public bool|IResolvable PersistentConnection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The Persistent Connection setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#persistent_connection ConnectUser#persistent_connection}

---

##### `PhoneType`<sup>Optional</sup> <a name="PhoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.phoneType"></a>

```csharp
public string PhoneType { get; set; }
```

- *Type:* string

The phone type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}

---

### ConnectUserPhoneNumberConfigs <a name="ConnectUserPhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserPhoneNumberConfigs {
    string Channel = null,
    string PhoneNumber = null,
    string PhoneType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.channel">Channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | The phone number for the user's desk phone. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneType">PhoneType</a></code> | <code>string</code> | The phone type. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

The phone number for the user's desk phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_number ConnectUser#phone_number}

---

##### `PhoneType`<sup>Optional</sup> <a name="PhoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneType"></a>

```csharp
public string PhoneType { get; set; }
```

- *Type:* string

The phone type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}

---

### ConnectUserTags <a name="ConnectUserTags" id="@cdktn/provider-awscc.connectUser.ConnectUserTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#key ConnectUser#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#value ConnectUser#value}

---

### ConnectUserUserProficiencies <a name="ConnectUserUserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserUserProficiencies {
    string AttributeName = null,
    string AttributeValue = null,
    double Level = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeName">AttributeName</a></code> | <code>string</code> | The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeValue">AttributeValue</a></code> | <code>string</code> | The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.level">Level</a></code> | <code>double</code> | The level of the proficiency. The valid values are 0 to 10. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#attribute_name ConnectUser#attribute_name}

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#attribute_value ConnectUser#attribute_value}

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.level"></a>

```csharp
public double Level { get; set; }
```

- *Type:* double

The level of the proficiency. The valid values are 0 to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#level ConnectUser#level}

---

### ConnectUserVoiceEnhancementConfigs <a name="ConnectUserVoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserVoiceEnhancementConfigs {
    string Channel = null,
    string VoiceEnhancementMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.channel">Channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.voiceEnhancementMode">VoiceEnhancementMode</a></code> | <code>string</code> | The Voice Enhancement Mode setting. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `VoiceEnhancementMode`<sup>Optional</sup> <a name="VoiceEnhancementMode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.voiceEnhancementMode"></a>

```csharp
public string VoiceEnhancementMode { get; set; }
```

- *Type:* string

The Voice Enhancement Mode setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#voice_enhancement_mode ConnectUser#voice_enhancement_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference <a name="ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkMode">ResetAfterContactWorkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit">ResetAfterContactWorkTimeLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterContactWorkMode` <a name="ResetAfterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkMode"></a>

```csharp
private void ResetAfterContactWorkMode()
```

##### `ResetAfterContactWorkTimeLimit` <a name="ResetAfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```csharp
private void ResetAfterContactWorkTimeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput">AfterContactWorkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput">AfterContactWorkTimeLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode">AfterContactWorkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">AfterContactWorkTimeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterContactWorkModeInput`<sup>Optional</sup> <a name="AfterContactWorkModeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput"></a>

```csharp
public string AfterContactWorkModeInput { get; }
```

- *Type:* string

---

##### `AfterContactWorkTimeLimitInput`<sup>Optional</sup> <a name="AfterContactWorkTimeLimitInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```csharp
public double AfterContactWorkTimeLimitInput { get; }
```

- *Type:* double

---

##### `AfterContactWorkMode`<sup>Required</sup> <a name="AfterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```csharp
public string AfterContactWorkMode { get; }
```

- *Type:* string

---

##### `AfterContactWorkTimeLimit`<sup>Required</sup> <a name="AfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```csharp
public double AfterContactWorkTimeLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserAfterContactWorkConfigsAfterContactWorkConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---


### ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference <a name="ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkMode">ResetAfterContactWorkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit">ResetAfterContactWorkTimeLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterContactWorkMode` <a name="ResetAfterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkMode"></a>

```csharp
private void ResetAfterContactWorkMode()
```

##### `ResetAfterContactWorkTimeLimit` <a name="ResetAfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```csharp
private void ResetAfterContactWorkTimeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput">AfterContactWorkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput">AfterContactWorkTimeLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode">AfterContactWorkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">AfterContactWorkTimeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterContactWorkModeInput`<sup>Optional</sup> <a name="AfterContactWorkModeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput"></a>

```csharp
public string AfterContactWorkModeInput { get; }
```

- *Type:* string

---

##### `AfterContactWorkTimeLimitInput`<sup>Optional</sup> <a name="AfterContactWorkTimeLimitInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```csharp
public double AfterContactWorkTimeLimitInput { get; }
```

- *Type:* double

---

##### `AfterContactWorkMode`<sup>Required</sup> <a name="AfterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```csharp
public string AfterContactWorkMode { get; }
```

- *Type:* string

---

##### `AfterContactWorkTimeLimit`<sup>Required</sup> <a name="AfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```csharp
public double AfterContactWorkTimeLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---


### ConnectUserAfterContactWorkConfigsList <a name="ConnectUserAfterContactWorkConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserAfterContactWorkConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.get"></a>

```csharp
private ConnectUserAfterContactWorkConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserAfterContactWorkConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]

---


### ConnectUserAfterContactWorkConfigsOutputReference <a name="ConnectUserAfterContactWorkConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserAfterContactWorkConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig">PutAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig">PutAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAfterContactWorkConfig">ResetAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAgentFirstCallbackAfterContactWorkConfig">ResetAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAfterContactWorkConfig` <a name="PutAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig"></a>

```csharp
private void PutAfterContactWorkConfig(ConnectUserAfterContactWorkConfigsAfterContactWorkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---

##### `PutAgentFirstCallbackAfterContactWorkConfig` <a name="PutAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig"></a>

```csharp
private void PutAgentFirstCallbackAfterContactWorkConfig(ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---

##### `ResetAfterContactWorkConfig` <a name="ResetAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAfterContactWorkConfig"></a>

```csharp
private void ResetAfterContactWorkConfig()
```

##### `ResetAgentFirstCallbackAfterContactWorkConfig` <a name="ResetAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAgentFirstCallbackAfterContactWorkConfig"></a>

```csharp
private void ResetAgentFirstCallbackAfterContactWorkConfig()
```

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetChannel"></a>

```csharp
private void ResetChannel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig">AfterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig">AgentFirstCallbackAfterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfigInput">AfterContactWorkConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfigInput">AgentFirstCallbackAfterContactWorkConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterContactWorkConfig`<sup>Required</sup> <a name="AfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig"></a>

```csharp
public ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference AfterContactWorkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a>

---

##### `AgentFirstCallbackAfterContactWorkConfig`<sup>Required</sup> <a name="AgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig"></a>

```csharp
public ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference AgentFirstCallbackAfterContactWorkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a>

---

##### `AfterContactWorkConfigInput`<sup>Optional</sup> <a name="AfterContactWorkConfigInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfigInput"></a>

```csharp
public IResolvable|ConnectUserAfterContactWorkConfigsAfterContactWorkConfig AfterContactWorkConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---

##### `AgentFirstCallbackAfterContactWorkConfigInput`<sup>Optional</sup> <a name="AgentFirstCallbackAfterContactWorkConfigInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfigInput"></a>

```csharp
public IResolvable|ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig AgentFirstCallbackAfterContactWorkConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserAfterContactWorkConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>

---


### ConnectUserAutoAcceptConfigsList <a name="ConnectUserAutoAcceptConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserAutoAcceptConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.get"></a>

```csharp
private ConnectUserAutoAcceptConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserAutoAcceptConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]

---


### ConnectUserAutoAcceptConfigsOutputReference <a name="ConnectUserAutoAcceptConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserAutoAcceptConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAgentFirstCallbackAutoAccept">ResetAgentFirstCallbackAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAutoAccept">ResetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAgentFirstCallbackAutoAccept` <a name="ResetAgentFirstCallbackAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAgentFirstCallbackAutoAccept"></a>

```csharp
private void ResetAgentFirstCallbackAutoAccept()
```

##### `ResetAutoAccept` <a name="ResetAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAutoAccept"></a>

```csharp
private void ResetAutoAccept()
```

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetChannel"></a>

```csharp
private void ResetChannel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAcceptInput">AgentFirstCallbackAutoAcceptInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAcceptInput">AutoAcceptInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept">AgentFirstCallbackAutoAccept</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAccept">AutoAccept</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentFirstCallbackAutoAcceptInput`<sup>Optional</sup> <a name="AgentFirstCallbackAutoAcceptInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAcceptInput"></a>

```csharp
public bool|IResolvable AgentFirstCallbackAutoAcceptInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoAcceptInput`<sup>Optional</sup> <a name="AutoAcceptInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAcceptInput"></a>

```csharp
public bool|IResolvable AutoAcceptInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `AgentFirstCallbackAutoAccept`<sup>Required</sup> <a name="AgentFirstCallbackAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept"></a>

```csharp
public bool|IResolvable AgentFirstCallbackAutoAccept { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoAccept`<sup>Required</sup> <a name="AutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAccept"></a>

```csharp
public bool|IResolvable AutoAccept { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserAutoAcceptConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>

---


### ConnectUserIdentityInfoOutputReference <a name="ConnectUserIdentityInfoOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserIdentityInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetMobile">ResetMobile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetSecondaryEmail">ResetSecondaryEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetMobile` <a name="ResetMobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetMobile"></a>

```csharp
private void ResetMobile()
```

##### `ResetSecondaryEmail` <a name="ResetSecondaryEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetSecondaryEmail"></a>

```csharp
private void ResetSecondaryEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobileInput">MobileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmailInput">SecondaryEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobile">Mobile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmail">SecondaryEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `MobileInput`<sup>Optional</sup> <a name="MobileInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobileInput"></a>

```csharp
public string MobileInput { get; }
```

- *Type:* string

---

##### `SecondaryEmailInput`<sup>Optional</sup> <a name="SecondaryEmailInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmailInput"></a>

```csharp
public string SecondaryEmailInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Mobile`<sup>Required</sup> <a name="Mobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobile"></a>

```csharp
public string Mobile { get; }
```

- *Type:* string

---

##### `SecondaryEmail`<sup>Required</sup> <a name="SecondaryEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmail"></a>

```csharp
public string SecondaryEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserIdentityInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---


### ConnectUserPersistentConnectionConfigsList <a name="ConnectUserPersistentConnectionConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserPersistentConnectionConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.get"></a>

```csharp
private ConnectUserPersistentConnectionConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserPersistentConnectionConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]

---


### ConnectUserPersistentConnectionConfigsOutputReference <a name="ConnectUserPersistentConnectionConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserPersistentConnectionConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetPersistentConnection">ResetPersistentConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetPersistentConnection` <a name="ResetPersistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetPersistentConnection"></a>

```csharp
private void ResetPersistentConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnectionInput">PersistentConnectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection">PersistentConnection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `PersistentConnectionInput`<sup>Optional</sup> <a name="PersistentConnectionInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnectionInput"></a>

```csharp
public bool|IResolvable PersistentConnectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `PersistentConnection`<sup>Required</sup> <a name="PersistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection"></a>

```csharp
public bool|IResolvable PersistentConnection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserPersistentConnectionConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>

---


### ConnectUserPhoneConfigOutputReference <a name="ConnectUserPhoneConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserPhoneConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit">ResetAfterContactWorkTimeLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept">ResetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber">ResetDeskPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPersistentConnection">ResetPersistentConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPhoneType">ResetPhoneType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterContactWorkTimeLimit` <a name="ResetAfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```csharp
private void ResetAfterContactWorkTimeLimit()
```

##### `ResetAutoAccept` <a name="ResetAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept"></a>

```csharp
private void ResetAutoAccept()
```

##### `ResetDeskPhoneNumber` <a name="ResetDeskPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber"></a>

```csharp
private void ResetDeskPhoneNumber()
```

##### `ResetPersistentConnection` <a name="ResetPersistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPersistentConnection"></a>

```csharp
private void ResetPersistentConnection()
```

##### `ResetPhoneType` <a name="ResetPhoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPhoneType"></a>

```csharp
private void ResetPhoneType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput">AfterContactWorkTimeLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput">AutoAcceptInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput">DeskPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnectionInput">PersistentConnectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput">PhoneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit">AfterContactWorkTimeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept">AutoAccept</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber">DeskPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnection">PersistentConnection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType">PhoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterContactWorkTimeLimitInput`<sup>Optional</sup> <a name="AfterContactWorkTimeLimitInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```csharp
public double AfterContactWorkTimeLimitInput { get; }
```

- *Type:* double

---

##### `AutoAcceptInput`<sup>Optional</sup> <a name="AutoAcceptInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput"></a>

```csharp
public bool|IResolvable AutoAcceptInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeskPhoneNumberInput`<sup>Optional</sup> <a name="DeskPhoneNumberInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput"></a>

```csharp
public string DeskPhoneNumberInput { get; }
```

- *Type:* string

---

##### `PersistentConnectionInput`<sup>Optional</sup> <a name="PersistentConnectionInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnectionInput"></a>

```csharp
public bool|IResolvable PersistentConnectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PhoneTypeInput`<sup>Optional</sup> <a name="PhoneTypeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput"></a>

```csharp
public string PhoneTypeInput { get; }
```

- *Type:* string

---

##### `AfterContactWorkTimeLimit`<sup>Required</sup> <a name="AfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```csharp
public double AfterContactWorkTimeLimit { get; }
```

- *Type:* double

---

##### `AutoAccept`<sup>Required</sup> <a name="AutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept"></a>

```csharp
public bool|IResolvable AutoAccept { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeskPhoneNumber`<sup>Required</sup> <a name="DeskPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber"></a>

```csharp
public string DeskPhoneNumber { get; }
```

- *Type:* string

---

##### `PersistentConnection`<sup>Required</sup> <a name="PersistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnection"></a>

```csharp
public bool|IResolvable PersistentConnection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PhoneType`<sup>Required</sup> <a name="PhoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType"></a>

```csharp
public string PhoneType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserPhoneConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---


### ConnectUserPhoneNumberConfigsList <a name="ConnectUserPhoneNumberConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserPhoneNumberConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.get"></a>

```csharp
private ConnectUserPhoneNumberConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserPhoneNumberConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]

---


### ConnectUserPhoneNumberConfigsOutputReference <a name="ConnectUserPhoneNumberConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserPhoneNumberConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneType">ResetPhoneType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetPhoneType` <a name="ResetPhoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneType"></a>

```csharp
private void ResetPhoneType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneTypeInput">PhoneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneType">PhoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `PhoneTypeInput`<sup>Optional</sup> <a name="PhoneTypeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneTypeInput"></a>

```csharp
public string PhoneTypeInput { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `PhoneType`<sup>Required</sup> <a name="PhoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneType"></a>

```csharp
public string PhoneType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserPhoneNumberConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>

---


### ConnectUserTagsList <a name="ConnectUserTagsList" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.get"></a>

```csharp
private ConnectUserTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]

---


### ConnectUserTagsOutputReference <a name="ConnectUserTagsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>

---


### ConnectUserUserProficienciesList <a name="ConnectUserUserProficienciesList" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserUserProficienciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.get"></a>

```csharp
private ConnectUserUserProficienciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserUserProficiencies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]

---


### ConnectUserUserProficienciesOutputReference <a name="ConnectUserUserProficienciesOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserUserProficienciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetLevel"></a>

```csharp
private void ResetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.levelInput">LevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.level">Level</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.levelInput"></a>

```csharp
public double LevelInput { get; }
```

- *Type:* double

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.level"></a>

```csharp
public double Level { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserUserProficiencies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>

---


### ConnectUserVoiceEnhancementConfigsList <a name="ConnectUserVoiceEnhancementConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserVoiceEnhancementConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.get"></a>

```csharp
private ConnectUserVoiceEnhancementConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserVoiceEnhancementConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]

---


### ConnectUserVoiceEnhancementConfigsOutputReference <a name="ConnectUserVoiceEnhancementConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectUserVoiceEnhancementConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetVoiceEnhancementMode">ResetVoiceEnhancementMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetVoiceEnhancementMode` <a name="ResetVoiceEnhancementMode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetVoiceEnhancementMode"></a>

```csharp
private void ResetVoiceEnhancementMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementModeInput">VoiceEnhancementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode">VoiceEnhancementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `VoiceEnhancementModeInput`<sup>Optional</sup> <a name="VoiceEnhancementModeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementModeInput"></a>

```csharp
public string VoiceEnhancementModeInput { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `VoiceEnhancementMode`<sup>Required</sup> <a name="VoiceEnhancementMode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode"></a>

```csharp
public string VoiceEnhancementMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectUserVoiceEnhancementConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>

---



