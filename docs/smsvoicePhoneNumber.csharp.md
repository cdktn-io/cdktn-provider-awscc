# `smsvoicePhoneNumber` Submodule <a name="`smsvoicePhoneNumber` Submodule" id="@cdktn/provider-awscc.smsvoicePhoneNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoicePhoneNumber <a name="SmsvoicePhoneNumber" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number awscc_smsvoice_phone_number}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumber(Construct Scope, string Id, SmsvoicePhoneNumberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig">SmsvoicePhoneNumberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig">SmsvoicePhoneNumberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords">PutMandatoryKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords">PutOptionalKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay">PutTwoWay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptionalKeywords">ResetOptionalKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptOutListName">ResetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetSelfManagedOptOutsEnabled">ResetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTwoWay">ResetTwoWay</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMandatoryKeywords` <a name="PutMandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords"></a>

```csharp
private void PutMandatoryKeywords(SmsvoicePhoneNumberMandatoryKeywords Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

---

##### `PutOptionalKeywords` <a name="PutOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords"></a>

```csharp
private void PutOptionalKeywords(IResolvable|SmsvoicePhoneNumberOptionalKeywords[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags"></a>

```csharp
private void PutTags(IResolvable|SmsvoicePhoneNumberTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]

---

##### `PutTwoWay` <a name="PutTwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay"></a>

```csharp
private void PutTwoWay(SmsvoicePhoneNumberTwoWay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

---

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetDeletionProtectionEnabled"></a>

```csharp
private void ResetDeletionProtectionEnabled()
```

##### `ResetOptionalKeywords` <a name="ResetOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptionalKeywords"></a>

```csharp
private void ResetOptionalKeywords()
```

##### `ResetOptOutListName` <a name="ResetOptOutListName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptOutListName"></a>

```csharp
private void ResetOptOutListName()
```

##### `ResetSelfManagedOptOutsEnabled` <a name="ResetSelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetSelfManagedOptOutsEnabled"></a>

```csharp
private void ResetSelfManagedOptOutsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTwoWay` <a name="ResetTwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTwoWay"></a>

```csharp
private void ResetTwoWay()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoicePhoneNumber resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoicePhoneNumber.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoicePhoneNumber.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoicePhoneNumber.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoicePhoneNumber.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SmsvoicePhoneNumber resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoicePhoneNumber to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoicePhoneNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoicePhoneNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywords">MandatoryKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference">SmsvoicePhoneNumberMandatoryKeywordsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywords">OptionalKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList">SmsvoicePhoneNumberOptionalKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumberId">PhoneNumberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList">SmsvoicePhoneNumberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWay">TwoWay</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference">SmsvoicePhoneNumberTwoWayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCodeInput">IsoCountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywordsInput">MandatoryKeywordsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilitiesInput">NumberCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberTypeInput">NumberTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywordsInput">OptionalKeywordsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListNameInput">OptOutListNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabledInput">SelfManagedOptOutsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWayInput">TwoWayInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCode">IsoCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilities">NumberCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberType">NumberType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListName">OptOutListName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MandatoryKeywords`<sup>Required</sup> <a name="MandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywords"></a>

```csharp
public SmsvoicePhoneNumberMandatoryKeywordsOutputReference MandatoryKeywords { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference">SmsvoicePhoneNumberMandatoryKeywordsOutputReference</a>

---

##### `OptionalKeywords`<sup>Required</sup> <a name="OptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywords"></a>

```csharp
public SmsvoicePhoneNumberOptionalKeywordsList OptionalKeywords { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList">SmsvoicePhoneNumberOptionalKeywordsList</a>

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `PhoneNumberId`<sup>Required</sup> <a name="PhoneNumberId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumberId"></a>

```csharp
public string PhoneNumberId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tags"></a>

```csharp
public SmsvoicePhoneNumberTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList">SmsvoicePhoneNumberTagsList</a>

---

##### `TwoWay`<sup>Required</sup> <a name="TwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWay"></a>

```csharp
public SmsvoicePhoneNumberTwoWayOutputReference TwoWay { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference">SmsvoicePhoneNumberTwoWayOutputReference</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabledInput"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsoCountryCodeInput`<sup>Optional</sup> <a name="IsoCountryCodeInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCodeInput"></a>

```csharp
public string IsoCountryCodeInput { get; }
```

- *Type:* string

---

##### `MandatoryKeywordsInput`<sup>Optional</sup> <a name="MandatoryKeywordsInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywordsInput"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberMandatoryKeywords MandatoryKeywordsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

---

##### `NumberCapabilitiesInput`<sup>Optional</sup> <a name="NumberCapabilitiesInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilitiesInput"></a>

```csharp
public string[] NumberCapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `NumberTypeInput`<sup>Optional</sup> <a name="NumberTypeInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberTypeInput"></a>

```csharp
public string NumberTypeInput { get; }
```

- *Type:* string

---

##### `OptionalKeywordsInput`<sup>Optional</sup> <a name="OptionalKeywordsInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywordsInput"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberOptionalKeywords[] OptionalKeywordsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]

---

##### `OptOutListNameInput`<sup>Optional</sup> <a name="OptOutListNameInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListNameInput"></a>

```csharp
public string OptOutListNameInput { get; }
```

- *Type:* string

---

##### `SelfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabledInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabledInput"></a>

```csharp
public bool|IResolvable SelfManagedOptOutsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tagsInput"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]

---

##### `TwoWayInput`<sup>Optional</sup> <a name="TwoWayInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWayInput"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberTwoWay TwoWayInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsoCountryCode`<sup>Required</sup> <a name="IsoCountryCode" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCode"></a>

```csharp
public string IsoCountryCode { get; }
```

- *Type:* string

---

##### `NumberCapabilities`<sup>Required</sup> <a name="NumberCapabilities" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilities"></a>

```csharp
public string[] NumberCapabilities { get; }
```

- *Type:* string[]

---

##### `NumberType`<sup>Required</sup> <a name="NumberType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberType"></a>

```csharp
public string NumberType { get; }
```

- *Type:* string

---

##### `OptOutListName`<sup>Required</sup> <a name="OptOutListName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListName"></a>

```csharp
public string OptOutListName { get; }
```

- *Type:* string

---

##### `SelfManagedOptOutsEnabled`<sup>Required</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabled"></a>

```csharp
public bool|IResolvable SelfManagedOptOutsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoicePhoneNumberConfig <a name="SmsvoicePhoneNumberConfig" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IsoCountryCode,
    SmsvoicePhoneNumberMandatoryKeywords MandatoryKeywords,
    string[] NumberCapabilities,
    string NumberType,
    bool|IResolvable DeletionProtectionEnabled = null,
    IResolvable|SmsvoicePhoneNumberOptionalKeywords[] OptionalKeywords = null,
    string OptOutListName = null,
    bool|IResolvable SelfManagedOptOutsEnabled = null,
    IResolvable|SmsvoicePhoneNumberTags[] Tags = null,
    SmsvoicePhoneNumberTwoWay TwoWay = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.isoCountryCode">IsoCountryCode</a></code> | <code>string</code> | The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.mandatoryKeywords">MandatoryKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberCapabilities">NumberCapabilities</a></code> | <code>string[]</code> | Indicates if the phone number will be used for text messages, voice messages, or both. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberType">NumberType</a></code> | <code>string</code> | The type of phone number to request. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true the sender ID can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optionalKeywords">OptionalKeywords</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]</code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optOutListName">OptOutListName</a></code> | <code>string</code> | The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.twoWay">TwoWay</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | When you set up two-way SMS, you can receive incoming messages from your customers. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IsoCountryCode`<sup>Required</sup> <a name="IsoCountryCode" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.isoCountryCode"></a>

```csharp
public string IsoCountryCode { get; set; }
```

- *Type:* string

The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#iso_country_code SmsvoicePhoneNumber#iso_country_code}

---

##### `MandatoryKeywords`<sup>Required</sup> <a name="MandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.mandatoryKeywords"></a>

```csharp
public SmsvoicePhoneNumberMandatoryKeywords MandatoryKeywords { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#mandatory_keywords SmsvoicePhoneNumber#mandatory_keywords}

---

##### `NumberCapabilities`<sup>Required</sup> <a name="NumberCapabilities" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberCapabilities"></a>

```csharp
public string[] NumberCapabilities { get; set; }
```

- *Type:* string[]

Indicates if the phone number will be used for text messages, voice messages, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#number_capabilities SmsvoicePhoneNumber#number_capabilities}

---

##### `NumberType`<sup>Required</sup> <a name="NumberType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberType"></a>

```csharp
public string NumberType { get; set; }
```

- *Type:* string

The type of phone number to request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#number_type SmsvoicePhoneNumber#number_type}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true the sender ID can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#deletion_protection_enabled SmsvoicePhoneNumber#deletion_protection_enabled}

---

##### `OptionalKeywords`<sup>Optional</sup> <a name="OptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optionalKeywords"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberOptionalKeywords[] OptionalKeywords { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#optional_keywords SmsvoicePhoneNumber#optional_keywords}

---

##### `OptOutListName`<sup>Optional</sup> <a name="OptOutListName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optOutListName"></a>

```csharp
public string OptOutListName { get; set; }
```

- *Type:* string

The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#opt_out_list_name SmsvoicePhoneNumber#opt_out_list_name}

---

##### `SelfManagedOptOutsEnabled`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.selfManagedOptOutsEnabled"></a>

```csharp
public bool|IResolvable SelfManagedOptOutsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

By default this is set to false.

When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#self_managed_opt_outs_enabled SmsvoicePhoneNumber#self_managed_opt_outs_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.tags"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#tags SmsvoicePhoneNumber#tags}

---

##### `TwoWay`<sup>Optional</sup> <a name="TwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.twoWay"></a>

```csharp
public SmsvoicePhoneNumberTwoWay TwoWay { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

When you set up two-way SMS, you can receive incoming messages from your customers.

When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#two_way SmsvoicePhoneNumber#two_way}

---

### SmsvoicePhoneNumberMandatoryKeywords <a name="SmsvoicePhoneNumberMandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberMandatoryKeywords {
    SmsvoicePhoneNumberMandatoryKeywordsHelp Help,
    SmsvoicePhoneNumberMandatoryKeywordsStop Stop
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.help">Help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.stop">Stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |

---

##### `Help`<sup>Required</sup> <a name="Help" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.help"></a>

```csharp
public SmsvoicePhoneNumberMandatoryKeywordsHelp Help { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#help SmsvoicePhoneNumber#help}

---

##### `Stop`<sup>Required</sup> <a name="Stop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.stop"></a>

```csharp
public SmsvoicePhoneNumberMandatoryKeywordsStop Stop { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#stop SmsvoicePhoneNumber#stop}

---

### SmsvoicePhoneNumberMandatoryKeywordsHelp <a name="SmsvoicePhoneNumberMandatoryKeywordsHelp" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberMandatoryKeywordsHelp {
    string Message
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberMandatoryKeywordsStop <a name="SmsvoicePhoneNumberMandatoryKeywordsStop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberMandatoryKeywordsStop {
    string Message
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberOptionalKeywords <a name="SmsvoicePhoneNumberOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberOptionalKeywords {
    string Action = null,
    string Keyword = null,
    string Message = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#action SmsvoicePhoneNumber#action}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.keyword">Keyword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#keyword SmsvoicePhoneNumber#keyword}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#action SmsvoicePhoneNumber#action}.

---

##### `Keyword`<sup>Optional</sup> <a name="Keyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.keyword"></a>

```csharp
public string Keyword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#keyword SmsvoicePhoneNumber#keyword}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberTags <a name="SmsvoicePhoneNumberTags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#key SmsvoicePhoneNumber#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#value SmsvoicePhoneNumber#value}

---

### SmsvoicePhoneNumberTwoWay <a name="SmsvoicePhoneNumberTwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberTwoWay {
    string ChannelArn = null,
    string ChannelRole = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelArn">ChannelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelRole">ChannelRole</a></code> | <code>string</code> | An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | By default this is set to false. |

---

##### `ChannelArn`<sup>Optional</sup> <a name="ChannelArn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelArn"></a>

```csharp
public string ChannelArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#channel_arn SmsvoicePhoneNumber#channel_arn}

---

##### `ChannelRole`<sup>Optional</sup> <a name="ChannelRole" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelRole"></a>

```csharp
public string ChannelRole { get; set; }
```

- *Type:* string

An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#channel_role SmsvoicePhoneNumber#channel_role}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

By default this is set to false.

When set to true you can receive incoming text messages from your end recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_phone_number#enabled SmsvoicePhoneNumber#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberMandatoryKeywordsHelp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

---


### SmsvoicePhoneNumberMandatoryKeywordsOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberMandatoryKeywordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp">PutHelp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop">PutStop</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHelp` <a name="PutHelp" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp"></a>

```csharp
private void PutHelp(SmsvoicePhoneNumberMandatoryKeywordsHelp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

---

##### `PutStop` <a name="PutStop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop"></a>

```csharp
private void PutStop(SmsvoicePhoneNumberMandatoryKeywordsStop Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.help">Help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference">SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stop">Stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference">SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.helpInput">HelpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stopInput">StopInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Help`<sup>Required</sup> <a name="Help" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.help"></a>

```csharp
public SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference Help { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference">SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference</a>

---

##### `Stop`<sup>Required</sup> <a name="Stop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stop"></a>

```csharp
public SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference Stop { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference">SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference</a>

---

##### `HelpInput`<sup>Optional</sup> <a name="HelpInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.helpInput"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberMandatoryKeywordsHelp HelpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

---

##### `StopInput`<sup>Optional</sup> <a name="StopInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stopInput"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberMandatoryKeywordsStop StopInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberMandatoryKeywords InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

---


### SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberMandatoryKeywordsStop InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

---


### SmsvoicePhoneNumberOptionalKeywordsList <a name="SmsvoicePhoneNumberOptionalKeywordsList" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberOptionalKeywordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get"></a>

```csharp
private SmsvoicePhoneNumberOptionalKeywordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.internalValue"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberOptionalKeywords[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>[]

---


### SmsvoicePhoneNumberOptionalKeywordsOutputReference <a name="SmsvoicePhoneNumberOptionalKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberOptionalKeywordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetKeyword">ResetKeyword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetKeyword` <a name="ResetKeyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetKeyword"></a>

```csharp
private void ResetKeyword()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keywordInput">KeywordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keyword">Keyword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `KeywordInput`<sup>Optional</sup> <a name="KeywordInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keywordInput"></a>

```csharp
public string KeywordInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Keyword`<sup>Required</sup> <a name="Keyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keyword"></a>

```csharp
public string Keyword { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberOptionalKeywords InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>

---


### SmsvoicePhoneNumberTagsList <a name="SmsvoicePhoneNumberTagsList" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get"></a>

```csharp
private SmsvoicePhoneNumberTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.internalValue"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>[]

---


### SmsvoicePhoneNumberTagsOutputReference <a name="SmsvoicePhoneNumberTagsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>

---


### SmsvoicePhoneNumberTwoWayOutputReference <a name="SmsvoicePhoneNumberTwoWayOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoicePhoneNumberTwoWayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelArn">ResetChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelRole">ResetChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelArn` <a name="ResetChannelArn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelArn"></a>

```csharp
private void ResetChannelArn()
```

##### `ResetChannelRole` <a name="ResetChannelRole" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelRole"></a>

```csharp
private void ResetChannelRole()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArnInput">ChannelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRoleInput">ChannelRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArn">ChannelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRole">ChannelRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelArnInput`<sup>Optional</sup> <a name="ChannelArnInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArnInput"></a>

```csharp
public string ChannelArnInput { get; }
```

- *Type:* string

---

##### `ChannelRoleInput`<sup>Optional</sup> <a name="ChannelRoleInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRoleInput"></a>

```csharp
public string ChannelRoleInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ChannelArn`<sup>Required</sup> <a name="ChannelArn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArn"></a>

```csharp
public string ChannelArn { get; }
```

- *Type:* string

---

##### `ChannelRole`<sup>Required</sup> <a name="ChannelRole" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRole"></a>

```csharp
public string ChannelRole { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoicePhoneNumberTwoWay InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

---



