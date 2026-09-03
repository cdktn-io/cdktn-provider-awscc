# `resiliencehubv2Policy` Submodule <a name="`resiliencehubv2Policy` Submodule" id="@cdktn/provider-awscc.resiliencehubv2Policy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Policy <a name="Resiliencehubv2Policy" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy awscc_resiliencehubv2_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2Policy(Construct Scope, string Id, Resiliencehubv2PolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig">Resiliencehubv2PolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig">Resiliencehubv2PolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo">PutAvailabilitySlo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery">PutDataRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz">PutMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion">PutMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetAvailabilitySlo">ResetAvailabilitySlo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDataRecovery">ResetDataRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiRegion">ResetMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAvailabilitySlo` <a name="PutAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo"></a>

```csharp
private void PutAvailabilitySlo(Resiliencehubv2PolicyAvailabilitySlo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

---

##### `PutDataRecovery` <a name="PutDataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery"></a>

```csharp
private void PutDataRecovery(Resiliencehubv2PolicyDataRecovery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

---

##### `PutMultiAz` <a name="PutMultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz"></a>

```csharp
private void PutMultiAz(Resiliencehubv2PolicyMultiAz Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

---

##### `PutMultiRegion` <a name="PutMultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion"></a>

```csharp
private void PutMultiRegion(Resiliencehubv2PolicyMultiRegion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putTags"></a>

```csharp
private void PutTags(IResolvable|Resiliencehubv2PolicyTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]

---

##### `ResetAvailabilitySlo` <a name="ResetAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetAvailabilitySlo"></a>

```csharp
private void ResetAvailabilitySlo()
```

##### `ResetDataRecovery` <a name="ResetDataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDataRecovery"></a>

```csharp
private void ResetDataRecovery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiAz"></a>

```csharp
private void ResetMultiAz()
```

##### `ResetMultiRegion` <a name="ResetMultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiRegion"></a>

```csharp
private void ResetMultiRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2Policy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2Policy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2Policy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2Policy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2Policy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Resiliencehubv2Policy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Resiliencehubv2Policy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Resiliencehubv2Policy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Policy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.associatedServiceCount">AssociatedServiceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySlo">AvailabilitySlo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference">Resiliencehubv2PolicyAvailabilitySloOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecovery">DataRecovery</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference">Resiliencehubv2PolicyDataRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAz">MultiAz</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference">Resiliencehubv2PolicyMultiAzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegion">MultiRegion</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference">Resiliencehubv2PolicyMultiRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList">Resiliencehubv2PolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySloInput">AvailabilitySloInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecoveryInput">DataRecoveryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAzInput">MultiAzInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegionInput">MultiRegionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociatedServiceCount`<sup>Required</sup> <a name="AssociatedServiceCount" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.associatedServiceCount"></a>

```csharp
public double AssociatedServiceCount { get; }
```

- *Type:* double

---

##### `AvailabilitySlo`<sup>Required</sup> <a name="AvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySlo"></a>

```csharp
public Resiliencehubv2PolicyAvailabilitySloOutputReference AvailabilitySlo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference">Resiliencehubv2PolicyAvailabilitySloOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DataRecovery`<sup>Required</sup> <a name="DataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecovery"></a>

```csharp
public Resiliencehubv2PolicyDataRecoveryOutputReference DataRecovery { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference">Resiliencehubv2PolicyDataRecoveryOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAz"></a>

```csharp
public Resiliencehubv2PolicyMultiAzOutputReference MultiAz { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference">Resiliencehubv2PolicyMultiAzOutputReference</a>

---

##### `MultiRegion`<sup>Required</sup> <a name="MultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegion"></a>

```csharp
public Resiliencehubv2PolicyMultiRegionOutputReference MultiRegion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference">Resiliencehubv2PolicyMultiRegionOutputReference</a>

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tags"></a>

```csharp
public Resiliencehubv2PolicyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList">Resiliencehubv2PolicyTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AvailabilitySloInput`<sup>Optional</sup> <a name="AvailabilitySloInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySloInput"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyAvailabilitySlo AvailabilitySloInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

---

##### `DataRecoveryInput`<sup>Optional</sup> <a name="DataRecoveryInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecoveryInput"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyDataRecovery DataRecoveryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAzInput"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyMultiAz MultiAzInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

---

##### `MultiRegionInput`<sup>Optional</sup> <a name="MultiRegionInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegionInput"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyMultiRegion MultiRegionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsInput"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2PolicyAvailabilitySlo <a name="Resiliencehubv2PolicyAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyAvailabilitySlo {
    double Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.property.target">Target</a></code> | <code>double</code> | Availability target percentage. |

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.property.target"></a>

```csharp
public double Target { get; set; }
```

- *Type:* double

Availability target percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#target Resiliencehubv2Policy#target}

---

### Resiliencehubv2PolicyConfig <a name="Resiliencehubv2PolicyConfig" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    Resiliencehubv2PolicyAvailabilitySlo AvailabilitySlo = null,
    Resiliencehubv2PolicyDataRecovery DataRecovery = null,
    string Description = null,
    string KmsKeyId = null,
    Resiliencehubv2PolicyMultiAz MultiAz = null,
    Resiliencehubv2PolicyMultiRegion MultiRegion = null,
    IResolvable|Resiliencehubv2PolicyTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.name">Name</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.availabilitySlo">AvailabilitySlo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#availability_slo Resiliencehubv2Policy#availability_slo}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dataRecovery">DataRecovery</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#data_recovery Resiliencehubv2Policy#data_recovery}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.description">Description</a></code> | <code>string</code> | The description of the policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The KMS key ID for encrypting policy data. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiAz">MultiAz</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#multi_az Resiliencehubv2Policy#multi_az}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiRegion">MultiRegion</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#multi_region Resiliencehubv2Policy#multi_region}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]</code> | Tags assigned to the policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#name Resiliencehubv2Policy#name}

---

##### `AvailabilitySlo`<sup>Optional</sup> <a name="AvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.availabilitySlo"></a>

```csharp
public Resiliencehubv2PolicyAvailabilitySlo AvailabilitySlo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#availability_slo Resiliencehubv2Policy#availability_slo}.

---

##### `DataRecovery`<sup>Optional</sup> <a name="DataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dataRecovery"></a>

```csharp
public Resiliencehubv2PolicyDataRecovery DataRecovery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#data_recovery Resiliencehubv2Policy#data_recovery}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#description Resiliencehubv2Policy#description}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The KMS key ID for encrypting policy data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#kms_key_id Resiliencehubv2Policy#kms_key_id}

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiAz"></a>

```csharp
public Resiliencehubv2PolicyMultiAz MultiAz { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#multi_az Resiliencehubv2Policy#multi_az}.

---

##### `MultiRegion`<sup>Optional</sup> <a name="MultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiRegion"></a>

```csharp
public Resiliencehubv2PolicyMultiRegion MultiRegion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#multi_region Resiliencehubv2Policy#multi_region}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.tags"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]

Tags assigned to the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#tags Resiliencehubv2Policy#tags}

---

### Resiliencehubv2PolicyDataRecovery <a name="Resiliencehubv2PolicyDataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyDataRecovery {
    double TimeBetweenBackupsInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.property.timeBetweenBackupsInMinutes">TimeBetweenBackupsInMinutes</a></code> | <code>double</code> | Time between backups in minutes. |

---

##### `TimeBetweenBackupsInMinutes`<sup>Optional</sup> <a name="TimeBetweenBackupsInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.property.timeBetweenBackupsInMinutes"></a>

```csharp
public double TimeBetweenBackupsInMinutes { get; set; }
```

- *Type:* double

Time between backups in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#time_between_backups_in_minutes Resiliencehubv2Policy#time_between_backups_in_minutes}

---

### Resiliencehubv2PolicyMultiAz <a name="Resiliencehubv2PolicyMultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyMultiAz {
    string DisasterRecoveryApproach = null,
    double RpoInMinutes = null,
    double RtoInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.disasterRecoveryApproach">DisasterRecoveryApproach</a></code> | <code>string</code> | Multi-AZ disaster recovery approach. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rpoInMinutes">RpoInMinutes</a></code> | <code>double</code> | Recovery Point Objective in minutes. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rtoInMinutes">RtoInMinutes</a></code> | <code>double</code> | Recovery Time Objective in minutes. |

---

##### `DisasterRecoveryApproach`<sup>Optional</sup> <a name="DisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.disasterRecoveryApproach"></a>

```csharp
public string DisasterRecoveryApproach { get; set; }
```

- *Type:* string

Multi-AZ disaster recovery approach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}

---

##### `RpoInMinutes`<sup>Optional</sup> <a name="RpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rpoInMinutes"></a>

```csharp
public double RpoInMinutes { get; set; }
```

- *Type:* double

Recovery Point Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}

---

##### `RtoInMinutes`<sup>Optional</sup> <a name="RtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rtoInMinutes"></a>

```csharp
public double RtoInMinutes { get; set; }
```

- *Type:* double

Recovery Time Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}

---

### Resiliencehubv2PolicyMultiRegion <a name="Resiliencehubv2PolicyMultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyMultiRegion {
    string DisasterRecoveryApproach = null,
    double RpoInMinutes = null,
    double RtoInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.disasterRecoveryApproach">DisasterRecoveryApproach</a></code> | <code>string</code> | Multi-Region disaster recovery approach. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rpoInMinutes">RpoInMinutes</a></code> | <code>double</code> | Recovery Point Objective in minutes. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rtoInMinutes">RtoInMinutes</a></code> | <code>double</code> | Recovery Time Objective in minutes. |

---

##### `DisasterRecoveryApproach`<sup>Optional</sup> <a name="DisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.disasterRecoveryApproach"></a>

```csharp
public string DisasterRecoveryApproach { get; set; }
```

- *Type:* string

Multi-Region disaster recovery approach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}

---

##### `RpoInMinutes`<sup>Optional</sup> <a name="RpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rpoInMinutes"></a>

```csharp
public double RpoInMinutes { get; set; }
```

- *Type:* double

Recovery Point Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}

---

##### `RtoInMinutes`<sup>Optional</sup> <a name="RtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rtoInMinutes"></a>

```csharp
public double RtoInMinutes { get; set; }
```

- *Type:* double

Recovery Time Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}

---

### Resiliencehubv2PolicyTags <a name="Resiliencehubv2PolicyTags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#key Resiliencehubv2Policy#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#value Resiliencehubv2Policy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2PolicyAvailabilitySloOutputReference <a name="Resiliencehubv2PolicyAvailabilitySloOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyAvailabilitySloOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyAvailabilitySlo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

---


### Resiliencehubv2PolicyDataRecoveryOutputReference <a name="Resiliencehubv2PolicyDataRecoveryOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyDataRecoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resetTimeBetweenBackupsInMinutes">ResetTimeBetweenBackupsInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeBetweenBackupsInMinutes` <a name="ResetTimeBetweenBackupsInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resetTimeBetweenBackupsInMinutes"></a>

```csharp
private void ResetTimeBetweenBackupsInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutesInput">TimeBetweenBackupsInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes">TimeBetweenBackupsInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeBetweenBackupsInMinutesInput`<sup>Optional</sup> <a name="TimeBetweenBackupsInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutesInput"></a>

```csharp
public double TimeBetweenBackupsInMinutesInput { get; }
```

- *Type:* double

---

##### `TimeBetweenBackupsInMinutes`<sup>Required</sup> <a name="TimeBetweenBackupsInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes"></a>

```csharp
public double TimeBetweenBackupsInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyDataRecovery InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

---


### Resiliencehubv2PolicyMultiAzOutputReference <a name="Resiliencehubv2PolicyMultiAzOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyMultiAzOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetDisasterRecoveryApproach">ResetDisasterRecoveryApproach</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRpoInMinutes">ResetRpoInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRtoInMinutes">ResetRtoInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisasterRecoveryApproach` <a name="ResetDisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetDisasterRecoveryApproach"></a>

```csharp
private void ResetDisasterRecoveryApproach()
```

##### `ResetRpoInMinutes` <a name="ResetRpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRpoInMinutes"></a>

```csharp
private void ResetRpoInMinutes()
```

##### `ResetRtoInMinutes` <a name="ResetRtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRtoInMinutes"></a>

```csharp
private void ResetRtoInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproachInput">DisasterRecoveryApproachInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutesInput">RpoInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutesInput">RtoInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach">DisasterRecoveryApproach</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes">RpoInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes">RtoInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisasterRecoveryApproachInput`<sup>Optional</sup> <a name="DisasterRecoveryApproachInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproachInput"></a>

```csharp
public string DisasterRecoveryApproachInput { get; }
```

- *Type:* string

---

##### `RpoInMinutesInput`<sup>Optional</sup> <a name="RpoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutesInput"></a>

```csharp
public double RpoInMinutesInput { get; }
```

- *Type:* double

---

##### `RtoInMinutesInput`<sup>Optional</sup> <a name="RtoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutesInput"></a>

```csharp
public double RtoInMinutesInput { get; }
```

- *Type:* double

---

##### `DisasterRecoveryApproach`<sup>Required</sup> <a name="DisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach"></a>

```csharp
public string DisasterRecoveryApproach { get; }
```

- *Type:* string

---

##### `RpoInMinutes`<sup>Required</sup> <a name="RpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes"></a>

```csharp
public double RpoInMinutes { get; }
```

- *Type:* double

---

##### `RtoInMinutes`<sup>Required</sup> <a name="RtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes"></a>

```csharp
public double RtoInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyMultiAz InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

---


### Resiliencehubv2PolicyMultiRegionOutputReference <a name="Resiliencehubv2PolicyMultiRegionOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyMultiRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetDisasterRecoveryApproach">ResetDisasterRecoveryApproach</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRpoInMinutes">ResetRpoInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRtoInMinutes">ResetRtoInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisasterRecoveryApproach` <a name="ResetDisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetDisasterRecoveryApproach"></a>

```csharp
private void ResetDisasterRecoveryApproach()
```

##### `ResetRpoInMinutes` <a name="ResetRpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRpoInMinutes"></a>

```csharp
private void ResetRpoInMinutes()
```

##### `ResetRtoInMinutes` <a name="ResetRtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRtoInMinutes"></a>

```csharp
private void ResetRtoInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproachInput">DisasterRecoveryApproachInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutesInput">RpoInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutesInput">RtoInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach">DisasterRecoveryApproach</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes">RpoInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes">RtoInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisasterRecoveryApproachInput`<sup>Optional</sup> <a name="DisasterRecoveryApproachInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproachInput"></a>

```csharp
public string DisasterRecoveryApproachInput { get; }
```

- *Type:* string

---

##### `RpoInMinutesInput`<sup>Optional</sup> <a name="RpoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutesInput"></a>

```csharp
public double RpoInMinutesInput { get; }
```

- *Type:* double

---

##### `RtoInMinutesInput`<sup>Optional</sup> <a name="RtoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutesInput"></a>

```csharp
public double RtoInMinutesInput { get; }
```

- *Type:* double

---

##### `DisasterRecoveryApproach`<sup>Required</sup> <a name="DisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach"></a>

```csharp
public string DisasterRecoveryApproach { get; }
```

- *Type:* string

---

##### `RpoInMinutes`<sup>Required</sup> <a name="RpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes"></a>

```csharp
public double RpoInMinutes { get; }
```

- *Type:* double

---

##### `RtoInMinutes`<sup>Required</sup> <a name="RtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes"></a>

```csharp
public double RtoInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyMultiRegion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

---


### Resiliencehubv2PolicyTagsList <a name="Resiliencehubv2PolicyTagsList" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.get"></a>

```csharp
private Resiliencehubv2PolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]

---


### Resiliencehubv2PolicyTagsOutputReference <a name="Resiliencehubv2PolicyTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2PolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2PolicyTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>

---



