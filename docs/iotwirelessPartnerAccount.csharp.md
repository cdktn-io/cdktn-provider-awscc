# `iotwirelessPartnerAccount` Submodule <a name="`iotwirelessPartnerAccount` Submodule" id="@cdktn/provider-awscc.iotwirelessPartnerAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessPartnerAccount <a name="IotwirelessPartnerAccount" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account awscc_iotwireless_partner_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessPartnerAccount(Construct Scope, string Id, IotwirelessPartnerAccountConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig">IotwirelessPartnerAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig">IotwirelessPartnerAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk">PutSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse">PutSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate">PutSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetAccountLinked">ResetAccountLinked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerAccountId">ResetPartnerAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerType">ResetPartnerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalk">ResetSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkResponse">ResetSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkUpdate">ResetSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSidewalk` <a name="PutSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk"></a>

```csharp
private void PutSidewalk(IotwirelessPartnerAccountSidewalk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---

##### `PutSidewalkResponse` <a name="PutSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse"></a>

```csharp
private void PutSidewalkResponse(IotwirelessPartnerAccountSidewalkResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---

##### `PutSidewalkUpdate` <a name="PutSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate"></a>

```csharp
private void PutSidewalkUpdate(IotwirelessPartnerAccountSidewalkUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags"></a>

```csharp
private void PutTags(IResolvable|IotwirelessPartnerAccountTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]

---

##### `ResetAccountLinked` <a name="ResetAccountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetAccountLinked"></a>

```csharp
private void ResetAccountLinked()
```

##### `ResetPartnerAccountId` <a name="ResetPartnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerAccountId"></a>

```csharp
private void ResetPartnerAccountId()
```

##### `ResetPartnerType` <a name="ResetPartnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerType"></a>

```csharp
private void ResetPartnerType()
```

##### `ResetSidewalk` <a name="ResetSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalk"></a>

```csharp
private void ResetSidewalk()
```

##### `ResetSidewalkResponse` <a name="ResetSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkResponse"></a>

```csharp
private void ResetSidewalkResponse()
```

##### `ResetSidewalkUpdate` <a name="ResetSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkUpdate"></a>

```csharp
private void ResetSidewalkUpdate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessPartnerAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessPartnerAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessPartnerAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessPartnerAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessPartnerAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessPartnerAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessPartnerAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalk">Sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference">IotwirelessPartnerAccountSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponse">SidewalkResponse</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference">IotwirelessPartnerAccountSidewalkResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdate">SidewalkUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference">IotwirelessPartnerAccountSidewalkUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList">IotwirelessPartnerAccountTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinkedInput">AccountLinkedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountIdInput">PartnerAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerTypeInput">PartnerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkInput">SidewalkInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponseInput">SidewalkResponseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdateInput">SidewalkUpdateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinked">AccountLinked</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountId">PartnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerType">PartnerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Sidewalk`<sup>Required</sup> <a name="Sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalk"></a>

```csharp
public IotwirelessPartnerAccountSidewalkOutputReference Sidewalk { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference">IotwirelessPartnerAccountSidewalkOutputReference</a>

---

##### `SidewalkResponse`<sup>Required</sup> <a name="SidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponse"></a>

```csharp
public IotwirelessPartnerAccountSidewalkResponseOutputReference SidewalkResponse { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference">IotwirelessPartnerAccountSidewalkResponseOutputReference</a>

---

##### `SidewalkUpdate`<sup>Required</sup> <a name="SidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdate"></a>

```csharp
public IotwirelessPartnerAccountSidewalkUpdateOutputReference SidewalkUpdate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference">IotwirelessPartnerAccountSidewalkUpdateOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tags"></a>

```csharp
public IotwirelessPartnerAccountTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList">IotwirelessPartnerAccountTagsList</a>

---

##### `AccountLinkedInput`<sup>Optional</sup> <a name="AccountLinkedInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinkedInput"></a>

```csharp
public bool|IResolvable AccountLinkedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PartnerAccountIdInput`<sup>Optional</sup> <a name="PartnerAccountIdInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountIdInput"></a>

```csharp
public string PartnerAccountIdInput { get; }
```

- *Type:* string

---

##### `PartnerTypeInput`<sup>Optional</sup> <a name="PartnerTypeInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerTypeInput"></a>

```csharp
public string PartnerTypeInput { get; }
```

- *Type:* string

---

##### `SidewalkInput`<sup>Optional</sup> <a name="SidewalkInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkInput"></a>

```csharp
public IResolvable|IotwirelessPartnerAccountSidewalk SidewalkInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---

##### `SidewalkResponseInput`<sup>Optional</sup> <a name="SidewalkResponseInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponseInput"></a>

```csharp
public IResolvable|IotwirelessPartnerAccountSidewalkResponse SidewalkResponseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---

##### `SidewalkUpdateInput`<sup>Optional</sup> <a name="SidewalkUpdateInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdateInput"></a>

```csharp
public IResolvable|IotwirelessPartnerAccountSidewalkUpdate SidewalkUpdateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tagsInput"></a>

```csharp
public IResolvable|IotwirelessPartnerAccountTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]

---

##### `AccountLinked`<sup>Required</sup> <a name="AccountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinked"></a>

```csharp
public bool|IResolvable AccountLinked { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PartnerAccountId`<sup>Required</sup> <a name="PartnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountId"></a>

```csharp
public string PartnerAccountId { get; }
```

- *Type:* string

---

##### `PartnerType`<sup>Required</sup> <a name="PartnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerType"></a>

```csharp
public string PartnerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessPartnerAccountConfig <a name="IotwirelessPartnerAccountConfig" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessPartnerAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AccountLinked = null,
    string PartnerAccountId = null,
    string PartnerType = null,
    IotwirelessPartnerAccountSidewalk Sidewalk = null,
    IotwirelessPartnerAccountSidewalkResponse SidewalkResponse = null,
    IotwirelessPartnerAccountSidewalkUpdate SidewalkUpdate = null,
    IResolvable|IotwirelessPartnerAccountTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.accountLinked">AccountLinked</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the partner account is linked to the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerAccountId">PartnerAccountId</a></code> | <code>string</code> | The partner account ID to disassociate from the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerType">PartnerType</a></code> | <code>string</code> | The partner type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalk">Sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkResponse">SidewalkResponse</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkUpdate">SidewalkUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]</code> | A list of key-value pairs that contain metadata for the destination. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountLinked`<sup>Optional</sup> <a name="AccountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.accountLinked"></a>

```csharp
public bool|IResolvable AccountLinked { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the partner account is linked to the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#account_linked IotwirelessPartnerAccount#account_linked}

---

##### `PartnerAccountId`<sup>Optional</sup> <a name="PartnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerAccountId"></a>

```csharp
public string PartnerAccountId { get; set; }
```

- *Type:* string

The partner account ID to disassociate from the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#partner_account_id IotwirelessPartnerAccount#partner_account_id}

---

##### `PartnerType`<sup>Optional</sup> <a name="PartnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerType"></a>

```csharp
public string PartnerType { get; set; }
```

- *Type:* string

The partner type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#partner_type IotwirelessPartnerAccount#partner_type}

---

##### `Sidewalk`<sup>Optional</sup> <a name="Sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalk"></a>

```csharp
public IotwirelessPartnerAccountSidewalk Sidewalk { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#sidewalk IotwirelessPartnerAccount#sidewalk}

---

##### `SidewalkResponse`<sup>Optional</sup> <a name="SidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkResponse"></a>

```csharp
public IotwirelessPartnerAccountSidewalkResponse SidewalkResponse { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#sidewalk_response IotwirelessPartnerAccount#sidewalk_response}

---

##### `SidewalkUpdate`<sup>Optional</sup> <a name="SidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkUpdate"></a>

```csharp
public IotwirelessPartnerAccountSidewalkUpdate SidewalkUpdate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#sidewalk_update IotwirelessPartnerAccount#sidewalk_update}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.tags"></a>

```csharp
public IResolvable|IotwirelessPartnerAccountTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#tags IotwirelessPartnerAccount#tags}

---

### IotwirelessPartnerAccountSidewalk <a name="IotwirelessPartnerAccountSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessPartnerAccountSidewalk {
    string AppServerPrivateKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.property.appServerPrivateKey">AppServerPrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}. |

---

##### `AppServerPrivateKey`<sup>Optional</sup> <a name="AppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.property.appServerPrivateKey"></a>

```csharp
public string AppServerPrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

### IotwirelessPartnerAccountSidewalkResponse <a name="IotwirelessPartnerAccountSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessPartnerAccountSidewalkResponse {
    string AmazonId = null,
    string Arn = null,
    string Fingerprint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.amazonId">AmazonId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#amazon_id IotwirelessPartnerAccount#amazon_id}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#arn IotwirelessPartnerAccount#arn}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.fingerprint">Fingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#fingerprint IotwirelessPartnerAccount#fingerprint}. |

---

##### `AmazonId`<sup>Optional</sup> <a name="AmazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.amazonId"></a>

```csharp
public string AmazonId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#amazon_id IotwirelessPartnerAccount#amazon_id}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#arn IotwirelessPartnerAccount#arn}.

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.fingerprint"></a>

```csharp
public string Fingerprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#fingerprint IotwirelessPartnerAccount#fingerprint}.

---

### IotwirelessPartnerAccountSidewalkUpdate <a name="IotwirelessPartnerAccountSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessPartnerAccountSidewalkUpdate {
    string AppServerPrivateKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.property.appServerPrivateKey">AppServerPrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}. |

---

##### `AppServerPrivateKey`<sup>Optional</sup> <a name="AppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.property.appServerPrivateKey"></a>

```csharp
public string AppServerPrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

### IotwirelessPartnerAccountTags <a name="IotwirelessPartnerAccountTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessPartnerAccountTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#key IotwirelessPartnerAccount#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#value IotwirelessPartnerAccount#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#key IotwirelessPartnerAccount#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_partner_account#value IotwirelessPartnerAccount#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessPartnerAccountSidewalkOutputReference <a name="IotwirelessPartnerAccountSidewalkOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessPartnerAccountSidewalkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resetAppServerPrivateKey">ResetAppServerPrivateKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppServerPrivateKey` <a name="ResetAppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resetAppServerPrivateKey"></a>

```csharp
private void ResetAppServerPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKeyInput">AppServerPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey">AppServerPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppServerPrivateKeyInput`<sup>Optional</sup> <a name="AppServerPrivateKeyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKeyInput"></a>

```csharp
public string AppServerPrivateKeyInput { get; }
```

- *Type:* string

---

##### `AppServerPrivateKey`<sup>Required</sup> <a name="AppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey"></a>

```csharp
public string AppServerPrivateKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessPartnerAccountSidewalk InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---


### IotwirelessPartnerAccountSidewalkResponseOutputReference <a name="IotwirelessPartnerAccountSidewalkResponseOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessPartnerAccountSidewalkResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetAmazonId">ResetAmazonId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetFingerprint">ResetFingerprint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmazonId` <a name="ResetAmazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetAmazonId"></a>

```csharp
private void ResetAmazonId()
```

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetFingerprint` <a name="ResetFingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetFingerprint"></a>

```csharp
private void ResetFingerprint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonIdInput">AmazonIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprintInput">FingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId">AmazonId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmazonIdInput`<sup>Optional</sup> <a name="AmazonIdInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonIdInput"></a>

```csharp
public string AmazonIdInput { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `FingerprintInput`<sup>Optional</sup> <a name="FingerprintInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprintInput"></a>

```csharp
public string FingerprintInput { get; }
```

- *Type:* string

---

##### `AmazonId`<sup>Required</sup> <a name="AmazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId"></a>

```csharp
public string AmazonId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessPartnerAccountSidewalkResponse InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---


### IotwirelessPartnerAccountSidewalkUpdateOutputReference <a name="IotwirelessPartnerAccountSidewalkUpdateOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessPartnerAccountSidewalkUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resetAppServerPrivateKey">ResetAppServerPrivateKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppServerPrivateKey` <a name="ResetAppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resetAppServerPrivateKey"></a>

```csharp
private void ResetAppServerPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKeyInput">AppServerPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey">AppServerPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppServerPrivateKeyInput`<sup>Optional</sup> <a name="AppServerPrivateKeyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKeyInput"></a>

```csharp
public string AppServerPrivateKeyInput { get; }
```

- *Type:* string

---

##### `AppServerPrivateKey`<sup>Required</sup> <a name="AppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey"></a>

```csharp
public string AppServerPrivateKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessPartnerAccountSidewalkUpdate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---


### IotwirelessPartnerAccountTagsList <a name="IotwirelessPartnerAccountTagsList" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessPartnerAccountTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get"></a>

```csharp
private IotwirelessPartnerAccountTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessPartnerAccountTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]

---


### IotwirelessPartnerAccountTagsOutputReference <a name="IotwirelessPartnerAccountTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessPartnerAccountTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessPartnerAccountTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>

---



