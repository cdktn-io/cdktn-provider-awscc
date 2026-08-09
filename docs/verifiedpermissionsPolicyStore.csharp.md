# `verifiedpermissionsPolicyStore` Submodule <a name="`verifiedpermissionsPolicyStore` Submodule" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsPolicyStore <a name="VerifiedpermissionsPolicyStore" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store awscc_verifiedpermissions_policy_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStore(Construct Scope, string Id, VerifiedpermissionsPolicyStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig">VerifiedpermissionsPolicyStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig">VerifiedpermissionsPolicyStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putDeletionProtection">PutDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putEncryptionSettings">PutEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings">PutValidationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetEncryptionSettings">ResetEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeletionProtection` <a name="PutDeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putDeletionProtection"></a>

```csharp
private void PutDeletionProtection(VerifiedpermissionsPolicyStoreDeletionProtection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putDeletionProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a>

---

##### `PutEncryptionSettings` <a name="PutEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putEncryptionSettings"></a>

```csharp
private void PutEncryptionSettings(VerifiedpermissionsPolicyStoreEncryptionSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putSchema"></a>

```csharp
private void PutSchema(VerifiedpermissionsPolicyStoreSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putTags"></a>

```csharp
private void PutTags(IResolvable|VerifiedpermissionsPolicyStoreTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>[]

---

##### `PutValidationSettings` <a name="PutValidationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings"></a>

```csharp
private void PutValidationSettings(VerifiedpermissionsPolicyStoreValidationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionSettings` <a name="ResetEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetEncryptionSettings"></a>

```csharp
private void ResetEncryptionSettings()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VerifiedpermissionsPolicyStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VerifiedpermissionsPolicyStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VerifiedpermissionsPolicyStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VerifiedpermissionsPolicyStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VerifiedpermissionsPolicyStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VerifiedpermissionsPolicyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsPolicyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtection">DeletionProtection</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference">VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettings">EncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionState">EncryptionState</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.policyStoreId">PolicyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference">VerifiedpermissionsPolicyStoreSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList">VerifiedpermissionsPolicyStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettings">ValidationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference">VerifiedpermissionsPolicyStoreValidationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettingsInput">EncryptionSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schemaInput">SchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettingsInput">ValidationSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.description">Description</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtection"></a>

```csharp
public VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference DeletionProtection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference">VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference</a>

---

##### `EncryptionSettings`<sup>Required</sup> <a name="EncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettings"></a>

```csharp
public VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference EncryptionSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference</a>

---

##### `EncryptionState`<sup>Required</sup> <a name="EncryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionState"></a>

```csharp
public VerifiedpermissionsPolicyStoreEncryptionStateOutputReference EncryptionState { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.policyStoreId"></a>

```csharp
public string PolicyStoreId { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schema"></a>

```csharp
public VerifiedpermissionsPolicyStoreSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference">VerifiedpermissionsPolicyStoreSchemaOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tags"></a>

```csharp
public VerifiedpermissionsPolicyStoreTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList">VerifiedpermissionsPolicyStoreTagsList</a>

---

##### `ValidationSettings`<sup>Required</sup> <a name="ValidationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettings"></a>

```csharp
public VerifiedpermissionsPolicyStoreValidationSettingsOutputReference ValidationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference">VerifiedpermissionsPolicyStoreValidationSettingsOutputReference</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtectionInput"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreDeletionProtection DeletionProtectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionSettingsInput`<sup>Optional</sup> <a name="EncryptionSettingsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettingsInput"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreEncryptionSettings EncryptionSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schemaInput"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreSchema SchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tagsInput"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>[]

---

##### `ValidationSettingsInput`<sup>Optional</sup> <a name="ValidationSettingsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettingsInput"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreValidationSettings ValidationSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsPolicyStoreConfig <a name="VerifiedpermissionsPolicyStoreConfig" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    VerifiedpermissionsPolicyStoreValidationSettings ValidationSettings,
    VerifiedpermissionsPolicyStoreDeletionProtection DeletionProtection = null,
    string Description = null,
    VerifiedpermissionsPolicyStoreEncryptionSettings EncryptionSettings = null,
    VerifiedpermissionsPolicyStoreSchema Schema = null,
    IResolvable|VerifiedpermissionsPolicyStoreTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.validationSettings">ValidationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.deletionProtection">DeletionProtection</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#deletion_protection VerifiedpermissionsPolicyStore#deletion_protection}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.encryptionSettings">EncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#encryption_settings VerifiedpermissionsPolicyStore#encryption_settings}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#schema VerifiedpermissionsPolicyStore#schema}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>[]</code> | The tags to add to the policy store. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ValidationSettings`<sup>Required</sup> <a name="ValidationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.validationSettings"></a>

```csharp
public VerifiedpermissionsPolicyStoreValidationSettings ValidationSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.deletionProtection"></a>

```csharp
public VerifiedpermissionsPolicyStoreDeletionProtection DeletionProtection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#deletion_protection VerifiedpermissionsPolicyStore#deletion_protection}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}.

---

##### `EncryptionSettings`<sup>Optional</sup> <a name="EncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.encryptionSettings"></a>

```csharp
public VerifiedpermissionsPolicyStoreEncryptionSettings EncryptionSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#encryption_settings VerifiedpermissionsPolicyStore#encryption_settings}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.schema"></a>

```csharp
public VerifiedpermissionsPolicyStoreSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#schema VerifiedpermissionsPolicyStore#schema}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.tags"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>[]

The tags to add to the policy store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#tags VerifiedpermissionsPolicyStore#tags}

---

### VerifiedpermissionsPolicyStoreDeletionProtection <a name="VerifiedpermissionsPolicyStoreDeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreDeletionProtection {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}.

---

### VerifiedpermissionsPolicyStoreEncryptionSettings <a name="VerifiedpermissionsPolicyStoreEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreEncryptionSettings {
    string Default = null,
    VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings KmsEncryptionSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#default VerifiedpermissionsPolicyStore#default}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.kmsEncryptionSettings">KmsEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#kms_encryption_settings VerifiedpermissionsPolicyStore#kms_encryption_settings}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#default VerifiedpermissionsPolicyStore#default}.

---

##### `KmsEncryptionSettings`<sup>Optional</sup> <a name="KmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.kmsEncryptionSettings"></a>

```csharp
public VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings KmsEncryptionSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#kms_encryption_settings VerifiedpermissionsPolicyStore#kms_encryption_settings}.

---

### VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings <a name="VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings {
    System.Collections.Generic.IDictionary<string, string> EncryptionContext = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.encryptionContext">EncryptionContext</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#encryption_context VerifiedpermissionsPolicyStore#encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}. |

---

##### `EncryptionContext`<sup>Optional</sup> <a name="EncryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.encryptionContext"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EncryptionContext { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#encryption_context VerifiedpermissionsPolicyStore#encryption_context}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}.

---

### VerifiedpermissionsPolicyStoreEncryptionState <a name="VerifiedpermissionsPolicyStoreEncryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreEncryptionState {

};
```


### VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState <a name="VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState {

};
```


### VerifiedpermissionsPolicyStoreSchema <a name="VerifiedpermissionsPolicyStoreSchema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreSchema {
    string CedarJson = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema.property.cedarJson">CedarJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#cedar_json VerifiedpermissionsPolicyStore#cedar_json}. |

---

##### `CedarJson`<sup>Optional</sup> <a name="CedarJson" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema.property.cedarJson"></a>

```csharp
public string CedarJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#cedar_json VerifiedpermissionsPolicyStore#cedar_json}.

---

### VerifiedpermissionsPolicyStoreTags <a name="VerifiedpermissionsPolicyStoreTags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#value VerifiedpermissionsPolicyStore#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#value VerifiedpermissionsPolicyStore#value}.

---

### VerifiedpermissionsPolicyStoreValidationSettings <a name="VerifiedpermissionsPolicyStoreValidationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreValidationSettings {
    string Mode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference <a name="VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreDeletionProtection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a>

---


### VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetEncryptionContext">ResetEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionContext` <a name="ResetEncryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetEncryptionContext"></a>

```csharp
private void ResetEncryptionContext()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContextInput">EncryptionContextInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContext">EncryptionContext</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContextInput`<sup>Optional</sup> <a name="EncryptionContextInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContextInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EncryptionContextInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `EncryptionContext`<sup>Required</sup> <a name="EncryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContext"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EncryptionContext { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

---


### VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.putKmsEncryptionSettings">PutKmsEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetKmsEncryptionSettings">ResetKmsEncryptionSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKmsEncryptionSettings` <a name="PutKmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.putKmsEncryptionSettings"></a>

```csharp
private void PutKmsEncryptionSettings(VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.putKmsEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

---

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetKmsEncryptionSettings` <a name="ResetKmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetKmsEncryptionSettings"></a>

```csharp
private void ResetKmsEncryptionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettings">KmsEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettingsInput">KmsEncryptionSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsEncryptionSettings`<sup>Required</sup> <a name="KmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettings"></a>

```csharp
public VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference KmsEncryptionSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference</a>

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `KmsEncryptionSettingsInput`<sup>Optional</sup> <a name="KmsEncryptionSettingsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettingsInput"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings KmsEncryptionSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreEncryptionSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a>

---


### VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.encryptionContext">EncryptionContext</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContext`<sup>Required</sup> <a name="EncryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.encryptionContext"></a>

```csharp
public StringMap EncryptionContext { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.internalValue"></a>

```csharp
public VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState</a>

---


### VerifiedpermissionsPolicyStoreEncryptionStateOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionStateOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreEncryptionStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.kmsEncryptionState">KmsEncryptionState</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState">VerifiedpermissionsPolicyStoreEncryptionState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `KmsEncryptionState`<sup>Required</sup> <a name="KmsEncryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.kmsEncryptionState"></a>

```csharp
public VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference KmsEncryptionState { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.internalValue"></a>

```csharp
public VerifiedpermissionsPolicyStoreEncryptionState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState">VerifiedpermissionsPolicyStoreEncryptionState</a>

---


### VerifiedpermissionsPolicyStoreSchemaOutputReference <a name="VerifiedpermissionsPolicyStoreSchemaOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resetCedarJson">ResetCedarJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCedarJson` <a name="ResetCedarJson" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resetCedarJson"></a>

```csharp
private void ResetCedarJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJsonInput">CedarJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJson">CedarJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CedarJsonInput`<sup>Optional</sup> <a name="CedarJsonInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJsonInput"></a>

```csharp
public string CedarJsonInput { get; }
```

- *Type:* string

---

##### `CedarJson`<sup>Required</sup> <a name="CedarJson" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJson"></a>

```csharp
public string CedarJson { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a>

---


### VerifiedpermissionsPolicyStoreTagsList <a name="VerifiedpermissionsPolicyStoreTagsList" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.get"></a>

```csharp
private VerifiedpermissionsPolicyStoreTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.internalValue"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>[]

---


### VerifiedpermissionsPolicyStoreTagsOutputReference <a name="VerifiedpermissionsPolicyStoreTagsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>

---


### VerifiedpermissionsPolicyStoreValidationSettingsOutputReference <a name="VerifiedpermissionsPolicyStoreValidationSettingsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VerifiedpermissionsPolicyStoreValidationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VerifiedpermissionsPolicyStoreValidationSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

---



