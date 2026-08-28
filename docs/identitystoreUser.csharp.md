# `identitystoreUser` Submodule <a name="`identitystoreUser` Submodule" id="@cdktn/provider-awscc.identitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreUser <a name="IdentitystoreUser" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user awscc_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUser(Construct Scope, string Id, IdentitystoreUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig">IdentitystoreUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig">IdentitystoreUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses">PutAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails">PutEmails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName">PutName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers">PutPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos">PutPhotos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetAddresses">ResetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetBirthdate">ResetBirthdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetEmails">ResetEmails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetLocale">ResetLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetNickName">ResetNickName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhoneNumbers">ResetPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhotos">ResetPhotos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPreferredLanguage">ResetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetProfileUrl">ResetProfileUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserName">ResetUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserType">ResetUserType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetWebsite">ResetWebsite</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAddresses` <a name="PutAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses"></a>

```csharp
private void PutAddresses(IResolvable|IdentitystoreUserAddresses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]

---

##### `PutEmails` <a name="PutEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails"></a>

```csharp
private void PutEmails(IResolvable|IdentitystoreUserEmails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]

---

##### `PutName` <a name="PutName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName"></a>

```csharp
private void PutName(IdentitystoreUserName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `PutPhoneNumbers` <a name="PutPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers"></a>

```csharp
private void PutPhoneNumbers(IResolvable|IdentitystoreUserPhoneNumbers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]

---

##### `PutPhotos` <a name="PutPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos"></a>

```csharp
private void PutPhotos(IResolvable|IdentitystoreUserPhotos[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]

---

##### `PutRoles` <a name="PutRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles"></a>

```csharp
private void PutRoles(IResolvable|IdentitystoreUserRoles[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]

---

##### `ResetAddresses` <a name="ResetAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetAddresses"></a>

```csharp
private void ResetAddresses()
```

##### `ResetBirthdate` <a name="ResetBirthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetBirthdate"></a>

```csharp
private void ResetBirthdate()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmails` <a name="ResetEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetEmails"></a>

```csharp
private void ResetEmails()
```

##### `ResetLocale` <a name="ResetLocale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetLocale"></a>

```csharp
private void ResetLocale()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNickName` <a name="ResetNickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetNickName"></a>

```csharp
private void ResetNickName()
```

##### `ResetPhoneNumbers` <a name="ResetPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhoneNumbers"></a>

```csharp
private void ResetPhoneNumbers()
```

##### `ResetPhotos` <a name="ResetPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhotos"></a>

```csharp
private void ResetPhotos()
```

##### `ResetPreferredLanguage` <a name="ResetPreferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPreferredLanguage"></a>

```csharp
private void ResetPreferredLanguage()
```

##### `ResetProfileUrl` <a name="ResetProfileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetProfileUrl"></a>

```csharp
private void ResetProfileUrl()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetRoles"></a>

```csharp
private void ResetRoles()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserName"></a>

```csharp
private void ResetUserName()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserType"></a>

```csharp
private void ResetUserType()
```

##### `ResetWebsite` <a name="ResetWebsite" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetWebsite"></a>

```csharp
private void ResetWebsite()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IdentitystoreUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IdentitystoreUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IdentitystoreUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IdentitystoreUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IdentitystoreUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IdentitystoreUser resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentitystoreUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentitystoreUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IdentitystoreUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addresses">Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList">IdentitystoreUserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emails">Emails</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList">IdentitystoreUserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.name">Name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbers">PhoneNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList">IdentitystoreUserPhoneNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photos">Photos</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList">IdentitystoreUserPhotosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.roles">Roles</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList">IdentitystoreUserRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userStatus">UserStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addressesInput">AddressesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdateInput">BirthdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emailsInput">EmailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput">IdentityStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nameInput">NameInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickNameInput">NickNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput">PhoneNumbersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photosInput">PhotosInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput">PreferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrlInput">ProfileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.rolesInput">RolesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userTypeInput">UserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.websiteInput">WebsiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdate">Birthdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickName">NickName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userType">UserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.website">Website</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addresses"></a>

```csharp
public IdentitystoreUserAddressesList Addresses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList">IdentitystoreUserAddressesList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emails"></a>

```csharp
public IdentitystoreUserEmailsList Emails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList">IdentitystoreUserEmailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.name"></a>

```csharp
public IdentitystoreUserNameOutputReference Name { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a>

---

##### `PhoneNumbers`<sup>Required</sup> <a name="PhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbers"></a>

```csharp
public IdentitystoreUserPhoneNumbersList PhoneNumbers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList">IdentitystoreUserPhoneNumbersList</a>

---

##### `Photos`<sup>Required</sup> <a name="Photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photos"></a>

```csharp
public IdentitystoreUserPhotosList Photos { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList">IdentitystoreUserPhotosList</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.roles"></a>

```csharp
public IdentitystoreUserRolesList Roles { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList">IdentitystoreUserRolesList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `UserStatus`<sup>Required</sup> <a name="UserStatus" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userStatus"></a>

```csharp
public string UserStatus { get; }
```

- *Type:* string

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addressesInput"></a>

```csharp
public IResolvable|IdentitystoreUserAddresses[] AddressesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]

---

##### `BirthdateInput`<sup>Optional</sup> <a name="BirthdateInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdateInput"></a>

```csharp
public string BirthdateInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailsInput`<sup>Optional</sup> <a name="EmailsInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emailsInput"></a>

```csharp
public IResolvable|IdentitystoreUserEmails[] EmailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]

---

##### `IdentityStoreIdInput`<sup>Optional</sup> <a name="IdentityStoreIdInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput"></a>

```csharp
public string IdentityStoreIdInput { get; }
```

- *Type:* string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nameInput"></a>

```csharp
public IResolvable|IdentitystoreUserName NameInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `NickNameInput`<sup>Optional</sup> <a name="NickNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickNameInput"></a>

```csharp
public string NickNameInput { get; }
```

- *Type:* string

---

##### `PhoneNumbersInput`<sup>Optional</sup> <a name="PhoneNumbersInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput"></a>

```csharp
public IResolvable|IdentitystoreUserPhoneNumbers[] PhoneNumbersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]

---

##### `PhotosInput`<sup>Optional</sup> <a name="PhotosInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photosInput"></a>

```csharp
public IResolvable|IdentitystoreUserPhotos[] PhotosInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]

---

##### `PreferredLanguageInput`<sup>Optional</sup> <a name="PreferredLanguageInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput"></a>

```csharp
public string PreferredLanguageInput { get; }
```

- *Type:* string

---

##### `ProfileUrlInput`<sup>Optional</sup> <a name="ProfileUrlInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrlInput"></a>

```csharp
public string ProfileUrlInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.rolesInput"></a>

```csharp
public IResolvable|IdentitystoreUserRoles[] RolesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userTypeInput"></a>

```csharp
public string UserTypeInput { get; }
```

- *Type:* string

---

##### `WebsiteInput`<sup>Optional</sup> <a name="WebsiteInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.websiteInput"></a>

```csharp
public string WebsiteInput { get; }
```

- *Type:* string

---

##### `Birthdate`<sup>Required</sup> <a name="Birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdate"></a>

```csharp
public string Birthdate { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `NickName`<sup>Required</sup> <a name="NickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickName"></a>

```csharp
public string NickName { get; }
```

- *Type:* string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userType"></a>

```csharp
public string UserType { get; }
```

- *Type:* string

---

##### `Website`<sup>Required</sup> <a name="Website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.website"></a>

```csharp
public string Website { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreUserAddresses <a name="IdentitystoreUserAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserAddresses {
    string Country = null,
    string Formatted = null,
    string Locality = null,
    string PostalCode = null,
    bool|IResolvable Primary = null,
    string Region = null,
    string StreetAddress = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.country">Country</a></code> | <code>string</code> | The country of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.formatted">Formatted</a></code> | <code>string</code> | A formatted version of the address for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.locality">Locality</a></code> | <code>string</code> | A string of the address locality. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.postalCode">PostalCode</a></code> | <code>string</code> | The postal code of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this is the primary address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.region">Region</a></code> | <code>string</code> | The region of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress">StreetAddress</a></code> | <code>string</code> | The street of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.type">Type</a></code> | <code>string</code> | The type of address. |

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

The country of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#country IdentitystoreUser#country}

---

##### `Formatted`<sup>Optional</sup> <a name="Formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.formatted"></a>

```csharp
public string Formatted { get; set; }
```

- *Type:* string

A formatted version of the address for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.locality"></a>

```csharp
public string Locality { get; set; }
```

- *Type:* string

A string of the address locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#locality IdentitystoreUser#locality}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

The postal code of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#postal_code IdentitystoreUser#postal_code}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this is the primary address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#region IdentitystoreUser#region}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress"></a>

```csharp
public string StreetAddress { get; set; }
```

- *Type:* string

The street of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#street_address IdentitystoreUser#street_address}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

### IdentitystoreUserConfig <a name="IdentitystoreUserConfig" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IdentityStoreId,
    IResolvable|IdentitystoreUserAddresses[] Addresses = null,
    string Birthdate = null,
    string DisplayName = null,
    IResolvable|IdentitystoreUserEmails[] Emails = null,
    string Locale = null,
    IdentitystoreUserName Name = null,
    string NickName = null,
    IResolvable|IdentitystoreUserPhoneNumbers[] PhoneNumbers = null,
    IResolvable|IdentitystoreUserPhotos[] Photos = null,
    string PreferredLanguage = null,
    string ProfileUrl = null,
    IResolvable|IdentitystoreUserRoles[] Roles = null,
    string Timezone = null,
    string Title = null,
    string UserName = null,
    string UserType = null,
    string Website = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | The globally unique identifier for the identity store. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.addresses">Addresses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]</code> | A list of addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.birthdate">Birthdate</a></code> | <code>string</code> | The user's birthdate in YYYY-MM-DD format. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A string containing the name of the user for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.emails">Emails</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]</code> | A list of email addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.locale">Locale</a></code> | <code>string</code> | The geographical region or location of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.name">Name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | The name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.nickName">NickName</a></code> | <code>string</code> | An alternate name for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers">PhoneNumbers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]</code> | A list of phone numbers associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.photos">Photos</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]</code> | A list of photos associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | The preferred language of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | A URL associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.roles">Roles</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]</code> | A list of roles associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.timezone">Timezone</a></code> | <code>string</code> | The time zone for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.title">Title</a></code> | <code>string</code> | The title of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userName">UserName</a></code> | <code>string</code> | A unique string used to identify the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userType">UserType</a></code> | <code>string</code> | A string indicating the type of user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.website">Website</a></code> | <code>string</code> | The user's personal website or blog URL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; set; }
```

- *Type:* string

The globally unique identifier for the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}

---

##### `Addresses`<sup>Optional</sup> <a name="Addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.addresses"></a>

```csharp
public IResolvable|IdentitystoreUserAddresses[] Addresses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]

A list of addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `Birthdate`<sup>Optional</sup> <a name="Birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.birthdate"></a>

```csharp
public string Birthdate { get; set; }
```

- *Type:* string

The user's birthdate in YYYY-MM-DD format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#birthdate IdentitystoreUser#birthdate}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A string containing the name of the user for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#display_name IdentitystoreUser#display_name}

---

##### `Emails`<sup>Optional</sup> <a name="Emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.emails"></a>

```csharp
public IResolvable|IdentitystoreUserEmails[] Emails { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]

A list of email addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#emails IdentitystoreUser#emails}

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

The geographical region or location of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#locale IdentitystoreUser#locale}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.name"></a>

```csharp
public IdentitystoreUserName Name { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#name IdentitystoreUser#name}

---

##### `NickName`<sup>Optional</sup> <a name="NickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.nickName"></a>

```csharp
public string NickName { get; set; }
```

- *Type:* string

An alternate name for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#nick_name IdentitystoreUser#nick_name}

---

##### `PhoneNumbers`<sup>Optional</sup> <a name="PhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers"></a>

```csharp
public IResolvable|IdentitystoreUserPhoneNumbers[] PhoneNumbers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]

A list of phone numbers associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `Photos`<sup>Optional</sup> <a name="Photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.photos"></a>

```csharp
public IResolvable|IdentitystoreUserPhotos[] Photos { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]

A list of photos associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#photos IdentitystoreUser#photos}

---

##### `PreferredLanguage`<sup>Optional</sup> <a name="PreferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; set; }
```

- *Type:* string

The preferred language of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#preferred_language IdentitystoreUser#preferred_language}

---

##### `ProfileUrl`<sup>Optional</sup> <a name="ProfileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; set; }
```

- *Type:* string

A URL associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#profile_url IdentitystoreUser#profile_url}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.roles"></a>

```csharp
public IResolvable|IdentitystoreUserRoles[] Roles { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]

A list of roles associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#roles IdentitystoreUser#roles}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

The time zone for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#timezone IdentitystoreUser#timezone}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#title IdentitystoreUser#title}

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

A unique string used to identify the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_name IdentitystoreUser#user_name}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userType"></a>

```csharp
public string UserType { get; set; }
```

- *Type:* string

A string indicating the type of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_type IdentitystoreUser#user_type}

---

##### `Website`<sup>Optional</sup> <a name="Website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.website"></a>

```csharp
public string Website { get; set; }
```

- *Type:* string

The user's personal website or blog URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#website IdentitystoreUser#website}

---

### IdentitystoreUserEmails <a name="IdentitystoreUserEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserEmails {
    bool|IResolvable Primary = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this is the primary email address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.type">Type</a></code> | <code>string</code> | The type of email address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.value">Value</a></code> | <code>string</code> | The email address. |

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this is the primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserName <a name="IdentitystoreUserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserName {
    string FamilyName = null,
    string Formatted = null,
    string GivenName = null,
    string HonorificPrefix = null,
    string HonorificSuffix = null,
    string MiddleName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.familyName">FamilyName</a></code> | <code>string</code> | The family name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.formatted">Formatted</a></code> | <code>string</code> | A string containing a formatted version of the name for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.givenName">GivenName</a></code> | <code>string</code> | The given name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificPrefix">HonorificPrefix</a></code> | <code>string</code> | The honorific prefix of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificSuffix">HonorificSuffix</a></code> | <code>string</code> | The honorific suffix of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.middleName">MiddleName</a></code> | <code>string</code> | The middle name of the user. |

---

##### `FamilyName`<sup>Optional</sup> <a name="FamilyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.familyName"></a>

```csharp
public string FamilyName { get; set; }
```

- *Type:* string

The family name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#family_name IdentitystoreUser#family_name}

---

##### `Formatted`<sup>Optional</sup> <a name="Formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.formatted"></a>

```csharp
public string Formatted { get; set; }
```

- *Type:* string

A string containing a formatted version of the name for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.givenName"></a>

```csharp
public string GivenName { get; set; }
```

- *Type:* string

The given name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#given_name IdentitystoreUser#given_name}

---

##### `HonorificPrefix`<sup>Optional</sup> <a name="HonorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificPrefix"></a>

```csharp
public string HonorificPrefix { get; set; }
```

- *Type:* string

The honorific prefix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}

---

##### `HonorificSuffix`<sup>Optional</sup> <a name="HonorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificSuffix"></a>

```csharp
public string HonorificSuffix { get; set; }
```

- *Type:* string

The honorific suffix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.middleName"></a>

```csharp
public string MiddleName { get; set; }
```

- *Type:* string

The middle name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#middle_name IdentitystoreUser#middle_name}

---

### IdentitystoreUserPhoneNumbers <a name="IdentitystoreUserPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserPhoneNumbers {
    bool|IResolvable Primary = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this is the primary phone number. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type">Type</a></code> | <code>string</code> | The type of phone number. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value">Value</a></code> | <code>string</code> | The phone number. |

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this is the primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserPhotos <a name="IdentitystoreUserPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserPhotos {
    string Display = null,
    bool|IResolvable Primary = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.display">Display</a></code> | <code>string</code> | A display name for the photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this is the primary photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.type">Type</a></code> | <code>string</code> | The type of photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.value">Value</a></code> | <code>string</code> | The photo data or URL. |

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.display"></a>

```csharp
public string Display { get; set; }
```

- *Type:* string

A display name for the photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#display IdentitystoreUser#display}

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this is the primary photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The photo data or URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserRoles <a name="IdentitystoreUserRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserRoles {
    bool|IResolvable Primary = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this is the primary role. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.type">Type</a></code> | <code>string</code> | The type of role. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.value">Value</a></code> | <code>string</code> | The role name. |

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this is the primary role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitystoreUserAddressesList <a name="IdentitystoreUserAddressesList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserAddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get"></a>

```csharp
private IdentitystoreUserAddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreUserAddresses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]

---


### IdentitystoreUserAddressesOutputReference <a name="IdentitystoreUserAddressesOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted">ResetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetFormatted` <a name="ResetFormatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted"></a>

```csharp
private void ResetFormatted()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality"></a>

```csharp
private void ResetLocality()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress"></a>

```csharp
private void ResetStreetAddress()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput">FormattedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput">LocalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput">StreetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted">Formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality">Locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress">StreetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `FormattedInput`<sup>Optional</sup> <a name="FormattedInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput"></a>

```csharp
public string FormattedInput { get; }
```

- *Type:* string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput"></a>

```csharp
public string LocalityInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput"></a>

```csharp
public bool|IResolvable PrimaryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput"></a>

```csharp
public string StreetAddressInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `Formatted`<sup>Required</sup> <a name="Formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted"></a>

```csharp
public string Formatted { get; }
```

- *Type:* string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality"></a>

```csharp
public string Locality { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```csharp
public string StreetAddress { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreUserAddresses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---


### IdentitystoreUserEmailsList <a name="IdentitystoreUserEmailsList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserEmailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get"></a>

```csharp
private IdentitystoreUserEmailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreUserEmails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]

---


### IdentitystoreUserEmailsOutputReference <a name="IdentitystoreUserEmailsOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserEmailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput"></a>

```csharp
public bool|IResolvable PrimaryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreUserEmails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---


### IdentitystoreUserNameOutputReference <a name="IdentitystoreUserNameOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFamilyName">ResetFamilyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted">ResetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetGivenName">ResetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix">ResetHonorificPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix">ResetHonorificSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName">ResetMiddleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFamilyName` <a name="ResetFamilyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFamilyName"></a>

```csharp
private void ResetFamilyName()
```

##### `ResetFormatted` <a name="ResetFormatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted"></a>

```csharp
private void ResetFormatted()
```

##### `ResetGivenName` <a name="ResetGivenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetGivenName"></a>

```csharp
private void ResetGivenName()
```

##### `ResetHonorificPrefix` <a name="ResetHonorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix"></a>

```csharp
private void ResetHonorificPrefix()
```

##### `ResetHonorificSuffix` <a name="ResetHonorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix"></a>

```csharp
private void ResetHonorificSuffix()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName"></a>

```csharp
private void ResetMiddleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput">FamilyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput">FormattedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput">GivenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput">HonorificPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput">HonorificSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput">MiddleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName">FamilyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted">Formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix">HonorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix">HonorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyNameInput`<sup>Optional</sup> <a name="FamilyNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput"></a>

```csharp
public string FamilyNameInput { get; }
```

- *Type:* string

---

##### `FormattedInput`<sup>Optional</sup> <a name="FormattedInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput"></a>

```csharp
public string FormattedInput { get; }
```

- *Type:* string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput"></a>

```csharp
public string GivenNameInput { get; }
```

- *Type:* string

---

##### `HonorificPrefixInput`<sup>Optional</sup> <a name="HonorificPrefixInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput"></a>

```csharp
public string HonorificPrefixInput { get; }
```

- *Type:* string

---

##### `HonorificSuffixInput`<sup>Optional</sup> <a name="HonorificSuffixInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput"></a>

```csharp
public string HonorificSuffixInput { get; }
```

- *Type:* string

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput"></a>

```csharp
public string MiddleNameInput { get; }
```

- *Type:* string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName"></a>

```csharp
public string FamilyName { get; }
```

- *Type:* string

---

##### `Formatted`<sup>Required</sup> <a name="Formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted"></a>

```csharp
public string Formatted { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `HonorificPrefix`<sup>Required</sup> <a name="HonorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```csharp
public string HonorificPrefix { get; }
```

- *Type:* string

---

##### `HonorificSuffix`<sup>Required</sup> <a name="HonorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```csharp
public string HonorificSuffix { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreUserName InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---


### IdentitystoreUserPhoneNumbersList <a name="IdentitystoreUserPhoneNumbersList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserPhoneNumbersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get"></a>

```csharp
private IdentitystoreUserPhoneNumbersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreUserPhoneNumbers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]

---


### IdentitystoreUserPhoneNumbersOutputReference <a name="IdentitystoreUserPhoneNumbersOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserPhoneNumbersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput"></a>

```csharp
public bool|IResolvable PrimaryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreUserPhoneNumbers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---


### IdentitystoreUserPhotosList <a name="IdentitystoreUserPhotosList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserPhotosList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get"></a>

```csharp
private IdentitystoreUserPhotosOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreUserPhotos[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]

---


### IdentitystoreUserPhotosOutputReference <a name="IdentitystoreUserPhotosOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserPhotosOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetDisplay"></a>

```csharp
private void ResetDisplay()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.displayInput">DisplayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.displayInput"></a>

```csharp
public string DisplayInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primaryInput"></a>

```csharp
public bool|IResolvable PrimaryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreUserPhotos InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>

---


### IdentitystoreUserRolesList <a name="IdentitystoreUserRolesList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get"></a>

```csharp
private IdentitystoreUserRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreUserRoles[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]

---


### IdentitystoreUserRolesOutputReference <a name="IdentitystoreUserRolesOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreUserRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primary">Primary</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primaryInput"></a>

```csharp
public bool|IResolvable PrimaryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primary"></a>

```csharp
public bool|IResolvable Primary { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreUserRoles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>

---



