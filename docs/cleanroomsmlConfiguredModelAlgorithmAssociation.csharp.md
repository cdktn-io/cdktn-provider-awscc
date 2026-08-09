# `cleanroomsmlConfiguredModelAlgorithmAssociation` Submodule <a name="`cleanroomsmlConfiguredModelAlgorithmAssociation` Submodule" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsmlConfiguredModelAlgorithmAssociation <a name="CleanroomsmlConfiguredModelAlgorithmAssociation" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association awscc_cleanroomsml_configured_model_algorithm_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociation(Construct Scope, string Id, CleanroomsmlConfiguredModelAlgorithmAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig">CleanroomsmlConfiguredModelAlgorithmAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig">CleanroomsmlConfiguredModelAlgorithmAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putPrivacyConfiguration">PutPrivacyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetPrivacyConfiguration">ResetPrivacyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrivacyConfiguration` <a name="PutPrivacyConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putPrivacyConfiguration"></a>

```csharp
private void PutPrivacyConfiguration(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putPrivacyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putTags"></a>

```csharp
private void PutTags(IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetPrivacyConfiguration` <a name="ResetPrivacyConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetPrivacyConfiguration"></a>

```csharp
private void ResetPrivacyConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsmlConfiguredModelAlgorithmAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsmlConfiguredModelAlgorithmAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsmlConfiguredModelAlgorithmAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsmlConfiguredModelAlgorithmAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsmlConfiguredModelAlgorithmAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CleanroomsmlConfiguredModelAlgorithmAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsmlConfiguredModelAlgorithmAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsmlConfiguredModelAlgorithmAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsmlConfiguredModelAlgorithmAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmAssociationArn">ConfiguredModelAlgorithmAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.privacyConfiguration">PrivacyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList">CleanroomsmlConfiguredModelAlgorithmAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmArnInput">ConfiguredModelAlgorithmArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.membershipIdentifierInput">MembershipIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.privacyConfigurationInput">PrivacyConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmArn">ConfiguredModelAlgorithmArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.collaborationIdentifier"></a>

```csharp
public string CollaborationIdentifier { get; }
```

- *Type:* string

---

##### `ConfiguredModelAlgorithmAssociationArn`<sup>Required</sup> <a name="ConfiguredModelAlgorithmAssociationArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmAssociationArn"></a>

```csharp
public string ConfiguredModelAlgorithmAssociationArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivacyConfiguration`<sup>Required</sup> <a name="PrivacyConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.privacyConfiguration"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference PrivacyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tags"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList">CleanroomsmlConfiguredModelAlgorithmAssociationTagsList</a>

---

##### `ConfiguredModelAlgorithmArnInput`<sup>Optional</sup> <a name="ConfiguredModelAlgorithmArnInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmArnInput"></a>

```csharp
public string ConfiguredModelAlgorithmArnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MembershipIdentifierInput`<sup>Optional</sup> <a name="MembershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.membershipIdentifierInput"></a>

```csharp
public string MembershipIdentifierInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivacyConfigurationInput`<sup>Optional</sup> <a name="PrivacyConfigurationInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.privacyConfigurationInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration PrivacyConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tagsInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]

---

##### `ConfiguredModelAlgorithmArn`<sup>Required</sup> <a name="ConfiguredModelAlgorithmArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmArn"></a>

```csharp
public string ConfiguredModelAlgorithmArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsmlConfiguredModelAlgorithmAssociationConfig <a name="CleanroomsmlConfiguredModelAlgorithmAssociationConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConfiguredModelAlgorithmArn,
    string MembershipIdentifier,
    string Name,
    string Description = null,
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration PrivacyConfiguration = null,
    IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.configuredModelAlgorithmArn">ConfiguredModelAlgorithmArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#configured_model_algorithm_arn CleanroomsmlConfiguredModelAlgorithmAssociation#configured_model_algorithm_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#membership_identifier CleanroomsmlConfiguredModelAlgorithmAssociation#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#name CleanroomsmlConfiguredModelAlgorithmAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#description CleanroomsmlConfiguredModelAlgorithmAssociation#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.privacyConfiguration">PrivacyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#privacy_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#privacy_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm association. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfiguredModelAlgorithmArn`<sup>Required</sup> <a name="ConfiguredModelAlgorithmArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.configuredModelAlgorithmArn"></a>

```csharp
public string ConfiguredModelAlgorithmArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#configured_model_algorithm_arn CleanroomsmlConfiguredModelAlgorithmAssociation#configured_model_algorithm_arn}.

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#membership_identifier CleanroomsmlConfiguredModelAlgorithmAssociation#membership_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#name CleanroomsmlConfiguredModelAlgorithmAssociation#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#description CleanroomsmlConfiguredModelAlgorithmAssociation#description}.

---

##### `PrivacyConfiguration`<sup>Optional</sup> <a name="PrivacyConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.privacyConfiguration"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration PrivacyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#privacy_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#privacy_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.tags"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]

An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#tags CleanroomsmlConfiguredModelAlgorithmAssociation#tags}

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration {
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies Policies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#policies CleanroomsmlConfiguredModelAlgorithmAssociation#policies}. |

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration.property.policies"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies Policies { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#policies CleanroomsmlConfiguredModelAlgorithmAssociation#policies}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies {
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports TrainedModelExports = null,
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs TrainedModelInferenceJobs = null,
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels TrainedModels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModelExports">TrainedModelExports</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_exports CleanroomsmlConfiguredModelAlgorithmAssociation#trained_model_exports}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModelInferenceJobs">TrainedModelInferenceJobs</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_inference_jobs CleanroomsmlConfiguredModelAlgorithmAssociation#trained_model_inference_jobs}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModels">TrainedModels</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_models CleanroomsmlConfiguredModelAlgorithmAssociation#trained_models}. |

---

##### `TrainedModelExports`<sup>Optional</sup> <a name="TrainedModelExports" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModelExports"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports TrainedModelExports { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_exports CleanroomsmlConfiguredModelAlgorithmAssociation#trained_model_exports}.

---

##### `TrainedModelInferenceJobs`<sup>Optional</sup> <a name="TrainedModelInferenceJobs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModelInferenceJobs"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs TrainedModelInferenceJobs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_inference_jobs CleanroomsmlConfiguredModelAlgorithmAssociation#trained_model_inference_jobs}.

---

##### `TrainedModels`<sup>Optional</sup> <a name="TrainedModels" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModels"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels TrainedModels { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_models CleanroomsmlConfiguredModelAlgorithmAssociation#trained_models}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports {
    string[] FilesToExport = null,
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize MaxSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports.property.filesToExport">FilesToExport</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#files_to_export CleanroomsmlConfiguredModelAlgorithmAssociation#files_to_export}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports.property.maxSize">MaxSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_size}. |

---

##### `FilesToExport`<sup>Optional</sup> <a name="FilesToExport" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports.property.filesToExport"></a>

```csharp
public string[] FilesToExport { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#files_to_export CleanroomsmlConfiguredModelAlgorithmAssociation#files_to_export}.

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports.property.maxSize"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize MaxSize { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_size}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize {
    string Unit = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs {
    IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[] ContainerLogs = null,
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize MaxOutputSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs.property.containerLogs">ContainerLogs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CleanroomsmlConfiguredModelAlgorithmAssociation#container_logs}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs.property.maxOutputSize">MaxOutputSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_output_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_output_size}. |

---

##### `ContainerLogs`<sup>Optional</sup> <a name="ContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs.property.containerLogs"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[] ContainerLogs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CleanroomsmlConfiguredModelAlgorithmAssociation#container_logs}.

---

##### `MaxOutputSize`<sup>Optional</sup> <a name="MaxOutputSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs.property.maxOutputSize"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize MaxOutputSize { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_output_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_output_size}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs {
    string[] AllowedAccountIds = null,
    string FilterPattern = null,
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration LogRedactionConfiguration = null,
    string LogType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.allowedAccountIds">AllowedAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CleanroomsmlConfiguredModelAlgorithmAssociation#allowed_account_ids}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.filterPattern">FilterPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CleanroomsmlConfiguredModelAlgorithmAssociation#filter_pattern}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.logRedactionConfiguration">LogRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#log_redaction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.logType">LogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CleanroomsmlConfiguredModelAlgorithmAssociation#log_type}. |

---

##### `AllowedAccountIds`<sup>Optional</sup> <a name="AllowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.allowedAccountIds"></a>

```csharp
public string[] AllowedAccountIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CleanroomsmlConfiguredModelAlgorithmAssociation#allowed_account_ids}.

---

##### `FilterPattern`<sup>Optional</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.filterPattern"></a>

```csharp
public string FilterPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CleanroomsmlConfiguredModelAlgorithmAssociation#filter_pattern}.

---

##### `LogRedactionConfiguration`<sup>Optional</sup> <a name="LogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.logRedactionConfiguration"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration LogRedactionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#log_redaction_configuration}.

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CleanroomsmlConfiguredModelAlgorithmAssociation#log_type}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration {
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig CustomEntityConfig = null,
    string[] EntitiesToRedact = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration.property.customEntityConfig">CustomEntityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CleanroomsmlConfiguredModelAlgorithmAssociation#custom_entity_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration.property.entitiesToRedact">EntitiesToRedact</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CleanroomsmlConfiguredModelAlgorithmAssociation#entities_to_redact}. |

---

##### `CustomEntityConfig`<sup>Optional</sup> <a name="CustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration.property.customEntityConfig"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig CustomEntityConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CleanroomsmlConfiguredModelAlgorithmAssociation#custom_entity_config}.

---

##### `EntitiesToRedact`<sup>Optional</sup> <a name="EntitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration.property.entitiesToRedact"></a>

```csharp
public string[] EntitiesToRedact { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CleanroomsmlConfiguredModelAlgorithmAssociation#entities_to_redact}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig {
    string[] CustomDataIdentifiers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig.property.customDataIdentifiers">CustomDataIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CleanroomsmlConfiguredModelAlgorithmAssociation#custom_data_identifiers}. |

---

##### `CustomDataIdentifiers`<sup>Optional</sup> <a name="CustomDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig.property.customDataIdentifiers"></a>

```csharp
public string[] CustomDataIdentifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CleanroomsmlConfiguredModelAlgorithmAssociation#custom_data_identifiers}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize {
    string Unit = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels {
    IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[] ContainerLogs = null,
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics ContainerMetrics = null,
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize MaxArtifactSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.containerLogs">ContainerLogs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CleanroomsmlConfiguredModelAlgorithmAssociation#container_logs}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.containerMetrics">ContainerMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_metrics CleanroomsmlConfiguredModelAlgorithmAssociation#container_metrics}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.maxArtifactSize">MaxArtifactSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_artifact_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_artifact_size}. |

---

##### `ContainerLogs`<sup>Optional</sup> <a name="ContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.containerLogs"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[] ContainerLogs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CleanroomsmlConfiguredModelAlgorithmAssociation#container_logs}.

---

##### `ContainerMetrics`<sup>Optional</sup> <a name="ContainerMetrics" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.containerMetrics"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics ContainerMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_metrics CleanroomsmlConfiguredModelAlgorithmAssociation#container_metrics}.

---

##### `MaxArtifactSize`<sup>Optional</sup> <a name="MaxArtifactSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.maxArtifactSize"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize MaxArtifactSize { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_artifact_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_artifact_size}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs {
    string[] AllowedAccountIds = null,
    string FilterPattern = null,
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration LogRedactionConfiguration = null,
    string LogType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.allowedAccountIds">AllowedAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CleanroomsmlConfiguredModelAlgorithmAssociation#allowed_account_ids}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.filterPattern">FilterPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CleanroomsmlConfiguredModelAlgorithmAssociation#filter_pattern}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.logRedactionConfiguration">LogRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#log_redaction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.logType">LogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CleanroomsmlConfiguredModelAlgorithmAssociation#log_type}. |

---

##### `AllowedAccountIds`<sup>Optional</sup> <a name="AllowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.allowedAccountIds"></a>

```csharp
public string[] AllowedAccountIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CleanroomsmlConfiguredModelAlgorithmAssociation#allowed_account_ids}.

---

##### `FilterPattern`<sup>Optional</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.filterPattern"></a>

```csharp
public string FilterPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CleanroomsmlConfiguredModelAlgorithmAssociation#filter_pattern}.

---

##### `LogRedactionConfiguration`<sup>Optional</sup> <a name="LogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.logRedactionConfiguration"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration LogRedactionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#log_redaction_configuration}.

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CleanroomsmlConfiguredModelAlgorithmAssociation#log_type}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration {
    CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig CustomEntityConfig = null,
    string[] EntitiesToRedact = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration.property.customEntityConfig">CustomEntityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CleanroomsmlConfiguredModelAlgorithmAssociation#custom_entity_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration.property.entitiesToRedact">EntitiesToRedact</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CleanroomsmlConfiguredModelAlgorithmAssociation#entities_to_redact}. |

---

##### `CustomEntityConfig`<sup>Optional</sup> <a name="CustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration.property.customEntityConfig"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig CustomEntityConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CleanroomsmlConfiguredModelAlgorithmAssociation#custom_entity_config}.

---

##### `EntitiesToRedact`<sup>Optional</sup> <a name="EntitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration.property.entitiesToRedact"></a>

```csharp
public string[] EntitiesToRedact { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CleanroomsmlConfiguredModelAlgorithmAssociation#entities_to_redact}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig {
    string[] CustomDataIdentifiers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig.property.customDataIdentifiers">CustomDataIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CleanroomsmlConfiguredModelAlgorithmAssociation#custom_data_identifiers}. |

---

##### `CustomDataIdentifiers`<sup>Optional</sup> <a name="CustomDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig.property.customDataIdentifiers"></a>

```csharp
public string[] CustomDataIdentifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CleanroomsmlConfiguredModelAlgorithmAssociation#custom_data_identifiers}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics {
    string NoiseLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics.property.noiseLevel">NoiseLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#noise_level CleanroomsmlConfiguredModelAlgorithmAssociation#noise_level}. |

---

##### `NoiseLevel`<sup>Optional</sup> <a name="NoiseLevel" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics.property.noiseLevel"></a>

```csharp
public string NoiseLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#noise_level CleanroomsmlConfiguredModelAlgorithmAssociation#noise_level}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize {
    string Unit = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationTags <a name="CleanroomsmlConfiguredModelAlgorithmAssociationTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#key CleanroomsmlConfiguredModelAlgorithmAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#key CleanroomsmlConfiguredModelAlgorithmAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.putPolicies">PutPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resetPolicies">ResetPolicies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicies` <a name="PutPolicies" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.putPolicies"></a>

```csharp
private void PutPolicies(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.putPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a>

---

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resetPolicies"></a>

```csharp
private void ResetPolicies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.policiesInput">PoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.policies"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference Policies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference</a>

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.policiesInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies PoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelExports">PutTrainedModelExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelInferenceJobs">PutTrainedModelInferenceJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModels">PutTrainedModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModelExports">ResetTrainedModelExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModelInferenceJobs">ResetTrainedModelInferenceJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModels">ResetTrainedModels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrainedModelExports` <a name="PutTrainedModelExports" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelExports"></a>

```csharp
private void PutTrainedModelExports(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelExports.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a>

---

##### `PutTrainedModelInferenceJobs` <a name="PutTrainedModelInferenceJobs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelInferenceJobs"></a>

```csharp
private void PutTrainedModelInferenceJobs(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelInferenceJobs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a>

---

##### `PutTrainedModels` <a name="PutTrainedModels" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModels"></a>

```csharp
private void PutTrainedModels(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModels.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a>

---

##### `ResetTrainedModelExports` <a name="ResetTrainedModelExports" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModelExports"></a>

```csharp
private void ResetTrainedModelExports()
```

##### `ResetTrainedModelInferenceJobs` <a name="ResetTrainedModelInferenceJobs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModelInferenceJobs"></a>

```csharp
private void ResetTrainedModelInferenceJobs()
```

##### `ResetTrainedModels` <a name="ResetTrainedModels" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModels"></a>

```csharp
private void ResetTrainedModels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelExports">TrainedModelExports</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelInferenceJobs">TrainedModelInferenceJobs</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModels">TrainedModels</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelExportsInput">TrainedModelExportsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelInferenceJobsInput">TrainedModelInferenceJobsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelsInput">TrainedModelsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrainedModelExports`<sup>Required</sup> <a name="TrainedModelExports" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelExports"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference TrainedModelExports { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference</a>

---

##### `TrainedModelInferenceJobs`<sup>Required</sup> <a name="TrainedModelInferenceJobs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelInferenceJobs"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference TrainedModelInferenceJobs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference</a>

---

##### `TrainedModels`<sup>Required</sup> <a name="TrainedModels" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModels"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference TrainedModels { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference</a>

---

##### `TrainedModelExportsInput`<sup>Optional</sup> <a name="TrainedModelExportsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelExportsInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports TrainedModelExportsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a>

---

##### `TrainedModelInferenceJobsInput`<sup>Optional</sup> <a name="TrainedModelInferenceJobsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelInferenceJobsInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs TrainedModelInferenceJobsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a>

---

##### `TrainedModelsInput`<sup>Optional</sup> <a name="TrainedModelsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelsInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels TrainedModelsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.putMaxSize">PutMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resetFilesToExport">ResetFilesToExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resetMaxSize">ResetMaxSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxSize` <a name="PutMaxSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.putMaxSize"></a>

```csharp
private void PutMaxSize(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.putMaxSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a>

---

##### `ResetFilesToExport` <a name="ResetFilesToExport" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resetFilesToExport"></a>

```csharp
private void ResetFilesToExport()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resetMaxSize"></a>

```csharp
private void ResetMaxSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.maxSize">MaxSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.filesToExportInput">FilesToExportInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.maxSizeInput">MaxSizeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.filesToExport">FilesToExport</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.maxSize"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference MaxSize { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference</a>

---

##### `FilesToExportInput`<sup>Optional</sup> <a name="FilesToExportInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.filesToExportInput"></a>

```csharp
public string[] FilesToExportInput { get; }
```

- *Type:* string[]

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.maxSizeInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize MaxSizeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a>

---

##### `FilesToExport`<sup>Required</sup> <a name="FilesToExport" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.filesToExport"></a>

```csharp
public string[] FilesToExport { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.get"></a>

```csharp
private CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resetCustomDataIdentifiers">ResetCustomDataIdentifiers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomDataIdentifiers` <a name="ResetCustomDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resetCustomDataIdentifiers"></a>

```csharp
private void ResetCustomDataIdentifiers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiersInput">CustomDataIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers">CustomDataIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomDataIdentifiersInput`<sup>Optional</sup> <a name="CustomDataIdentifiersInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiersInput"></a>

```csharp
public string[] CustomDataIdentifiersInput { get; }
```

- *Type:* string[]

---

##### `CustomDataIdentifiers`<sup>Required</sup> <a name="CustomDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers"></a>

```csharp
public string[] CustomDataIdentifiers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig">PutCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resetCustomEntityConfig">ResetCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resetEntitiesToRedact">ResetEntitiesToRedact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomEntityConfig` <a name="PutCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig"></a>

```csharp
private void PutCustomEntityConfig(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---

##### `ResetCustomEntityConfig` <a name="ResetCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resetCustomEntityConfig"></a>

```csharp
private void ResetCustomEntityConfig()
```

##### `ResetEntitiesToRedact` <a name="ResetEntitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resetEntitiesToRedact"></a>

```csharp
private void ResetEntitiesToRedact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig">CustomEntityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfigInput">CustomEntityConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedactInput">EntitiesToRedactInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact">EntitiesToRedact</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomEntityConfig`<sup>Required</sup> <a name="CustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference CustomEntityConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a>

---

##### `CustomEntityConfigInput`<sup>Optional</sup> <a name="CustomEntityConfigInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfigInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig CustomEntityConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---

##### `EntitiesToRedactInput`<sup>Optional</sup> <a name="EntitiesToRedactInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedactInput"></a>

```csharp
public string[] EntitiesToRedactInput { get; }
```

- *Type:* string[]

---

##### `EntitiesToRedact`<sup>Required</sup> <a name="EntitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact"></a>

```csharp
public string[] EntitiesToRedact { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.putLogRedactionConfiguration">PutLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetAllowedAccountIds">ResetAllowedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetFilterPattern">ResetFilterPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetLogRedactionConfiguration">ResetLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogRedactionConfiguration` <a name="PutLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.putLogRedactionConfiguration"></a>

```csharp
private void PutLogRedactionConfiguration(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.putLogRedactionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a>

---

##### `ResetAllowedAccountIds` <a name="ResetAllowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetAllowedAccountIds"></a>

```csharp
private void ResetAllowedAccountIds()
```

##### `ResetFilterPattern` <a name="ResetFilterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetFilterPattern"></a>

```csharp
private void ResetFilterPattern()
```

##### `ResetLogRedactionConfiguration` <a name="ResetLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetLogRedactionConfiguration"></a>

```csharp
private void ResetLogRedactionConfiguration()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetLogType"></a>

```csharp
private void ResetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logRedactionConfiguration">LogRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.allowedAccountIdsInput">AllowedAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.filterPatternInput">FilterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logRedactionConfigurationInput">LogRedactionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.allowedAccountIds">AllowedAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.filterPattern">FilterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogRedactionConfiguration`<sup>Required</sup> <a name="LogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logRedactionConfiguration"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference LogRedactionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference</a>

---

##### `AllowedAccountIdsInput`<sup>Optional</sup> <a name="AllowedAccountIdsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.allowedAccountIdsInput"></a>

```csharp
public string[] AllowedAccountIdsInput { get; }
```

- *Type:* string[]

---

##### `FilterPatternInput`<sup>Optional</sup> <a name="FilterPatternInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.filterPatternInput"></a>

```csharp
public string FilterPatternInput { get; }
```

- *Type:* string

---

##### `LogRedactionConfigurationInput`<sup>Optional</sup> <a name="LogRedactionConfigurationInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logRedactionConfigurationInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration LogRedactionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a>

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `AllowedAccountIds`<sup>Required</sup> <a name="AllowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.allowedAccountIds"></a>

```csharp
public string[] AllowedAccountIds { get; }
```

- *Type:* string[]

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.filterPattern"></a>

```csharp
public string FilterPattern { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putContainerLogs">PutContainerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putMaxOutputSize">PutMaxOutputSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resetContainerLogs">ResetContainerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resetMaxOutputSize">ResetMaxOutputSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerLogs` <a name="PutContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putContainerLogs"></a>

```csharp
private void PutContainerLogs(IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putContainerLogs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]

---

##### `PutMaxOutputSize` <a name="PutMaxOutputSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putMaxOutputSize"></a>

```csharp
private void PutMaxOutputSize(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putMaxOutputSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a>

---

##### `ResetContainerLogs` <a name="ResetContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resetContainerLogs"></a>

```csharp
private void ResetContainerLogs()
```

##### `ResetMaxOutputSize` <a name="ResetMaxOutputSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resetMaxOutputSize"></a>

```csharp
private void ResetMaxOutputSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.containerLogs">ContainerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.maxOutputSize">MaxOutputSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.containerLogsInput">ContainerLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.maxOutputSizeInput">MaxOutputSizeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerLogs`<sup>Required</sup> <a name="ContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.containerLogs"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList ContainerLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList</a>

---

##### `MaxOutputSize`<sup>Required</sup> <a name="MaxOutputSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.maxOutputSize"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference MaxOutputSize { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference</a>

---

##### `ContainerLogsInput`<sup>Optional</sup> <a name="ContainerLogsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.containerLogsInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[] ContainerLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]

---

##### `MaxOutputSizeInput`<sup>Optional</sup> <a name="MaxOutputSizeInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.maxOutputSizeInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize MaxOutputSizeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.get"></a>

```csharp
private CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resetCustomDataIdentifiers">ResetCustomDataIdentifiers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomDataIdentifiers` <a name="ResetCustomDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resetCustomDataIdentifiers"></a>

```csharp
private void ResetCustomDataIdentifiers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiersInput">CustomDataIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers">CustomDataIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomDataIdentifiersInput`<sup>Optional</sup> <a name="CustomDataIdentifiersInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiersInput"></a>

```csharp
public string[] CustomDataIdentifiersInput { get; }
```

- *Type:* string[]

---

##### `CustomDataIdentifiers`<sup>Required</sup> <a name="CustomDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers"></a>

```csharp
public string[] CustomDataIdentifiers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig">PutCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resetCustomEntityConfig">ResetCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resetEntitiesToRedact">ResetEntitiesToRedact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomEntityConfig` <a name="PutCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig"></a>

```csharp
private void PutCustomEntityConfig(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---

##### `ResetCustomEntityConfig` <a name="ResetCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resetCustomEntityConfig"></a>

```csharp
private void ResetCustomEntityConfig()
```

##### `ResetEntitiesToRedact` <a name="ResetEntitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resetEntitiesToRedact"></a>

```csharp
private void ResetEntitiesToRedact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig">CustomEntityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfigInput">CustomEntityConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedactInput">EntitiesToRedactInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact">EntitiesToRedact</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomEntityConfig`<sup>Required</sup> <a name="CustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference CustomEntityConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a>

---

##### `CustomEntityConfigInput`<sup>Optional</sup> <a name="CustomEntityConfigInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfigInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig CustomEntityConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---

##### `EntitiesToRedactInput`<sup>Optional</sup> <a name="EntitiesToRedactInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedactInput"></a>

```csharp
public string[] EntitiesToRedactInput { get; }
```

- *Type:* string[]

---

##### `EntitiesToRedact`<sup>Required</sup> <a name="EntitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact"></a>

```csharp
public string[] EntitiesToRedact { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.putLogRedactionConfiguration">PutLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetAllowedAccountIds">ResetAllowedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetFilterPattern">ResetFilterPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetLogRedactionConfiguration">ResetLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogRedactionConfiguration` <a name="PutLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.putLogRedactionConfiguration"></a>

```csharp
private void PutLogRedactionConfiguration(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.putLogRedactionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a>

---

##### `ResetAllowedAccountIds` <a name="ResetAllowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetAllowedAccountIds"></a>

```csharp
private void ResetAllowedAccountIds()
```

##### `ResetFilterPattern` <a name="ResetFilterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetFilterPattern"></a>

```csharp
private void ResetFilterPattern()
```

##### `ResetLogRedactionConfiguration` <a name="ResetLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetLogRedactionConfiguration"></a>

```csharp
private void ResetLogRedactionConfiguration()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetLogType"></a>

```csharp
private void ResetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logRedactionConfiguration">LogRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.allowedAccountIdsInput">AllowedAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.filterPatternInput">FilterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logRedactionConfigurationInput">LogRedactionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.allowedAccountIds">AllowedAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.filterPattern">FilterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogRedactionConfiguration`<sup>Required</sup> <a name="LogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logRedactionConfiguration"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference LogRedactionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference</a>

---

##### `AllowedAccountIdsInput`<sup>Optional</sup> <a name="AllowedAccountIdsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.allowedAccountIdsInput"></a>

```csharp
public string[] AllowedAccountIdsInput { get; }
```

- *Type:* string[]

---

##### `FilterPatternInput`<sup>Optional</sup> <a name="FilterPatternInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.filterPatternInput"></a>

```csharp
public string FilterPatternInput { get; }
```

- *Type:* string

---

##### `LogRedactionConfigurationInput`<sup>Optional</sup> <a name="LogRedactionConfigurationInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logRedactionConfigurationInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration LogRedactionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a>

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `AllowedAccountIds`<sup>Required</sup> <a name="AllowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.allowedAccountIds"></a>

```csharp
public string[] AllowedAccountIds { get; }
```

- *Type:* string[]

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.filterPattern"></a>

```csharp
public string FilterPattern { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resetNoiseLevel">ResetNoiseLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNoiseLevel` <a name="ResetNoiseLevel" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resetNoiseLevel"></a>

```csharp
private void ResetNoiseLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.noiseLevelInput">NoiseLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.noiseLevel">NoiseLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NoiseLevelInput`<sup>Optional</sup> <a name="NoiseLevelInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.noiseLevelInput"></a>

```csharp
public string NoiseLevelInput { get; }
```

- *Type:* string

---

##### `NoiseLevel`<sup>Required</sup> <a name="NoiseLevel" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.noiseLevel"></a>

```csharp
public string NoiseLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerLogs">PutContainerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerMetrics">PutContainerMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putMaxArtifactSize">PutMaxArtifactSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetContainerLogs">ResetContainerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetContainerMetrics">ResetContainerMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetMaxArtifactSize">ResetMaxArtifactSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerLogs` <a name="PutContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerLogs"></a>

```csharp
private void PutContainerLogs(IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerLogs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]

---

##### `PutContainerMetrics` <a name="PutContainerMetrics" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerMetrics"></a>

```csharp
private void PutContainerMetrics(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a>

---

##### `PutMaxArtifactSize` <a name="PutMaxArtifactSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putMaxArtifactSize"></a>

```csharp
private void PutMaxArtifactSize(CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putMaxArtifactSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a>

---

##### `ResetContainerLogs` <a name="ResetContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetContainerLogs"></a>

```csharp
private void ResetContainerLogs()
```

##### `ResetContainerMetrics` <a name="ResetContainerMetrics" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetContainerMetrics"></a>

```csharp
private void ResetContainerMetrics()
```

##### `ResetMaxArtifactSize` <a name="ResetMaxArtifactSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetMaxArtifactSize"></a>

```csharp
private void ResetMaxArtifactSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerLogs">ContainerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerMetrics">ContainerMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.maxArtifactSize">MaxArtifactSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerLogsInput">ContainerLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerMetricsInput">ContainerMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.maxArtifactSizeInput">MaxArtifactSizeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerLogs`<sup>Required</sup> <a name="ContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerLogs"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList ContainerLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList</a>

---

##### `ContainerMetrics`<sup>Required</sup> <a name="ContainerMetrics" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerMetrics"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference ContainerMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference</a>

---

##### `MaxArtifactSize`<sup>Required</sup> <a name="MaxArtifactSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.maxArtifactSize"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference MaxArtifactSize { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference</a>

---

##### `ContainerLogsInput`<sup>Optional</sup> <a name="ContainerLogsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerLogsInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[] ContainerLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]

---

##### `ContainerMetricsInput`<sup>Optional</sup> <a name="ContainerMetricsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerMetricsInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics ContainerMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a>

---

##### `MaxArtifactSizeInput`<sup>Optional</sup> <a name="MaxArtifactSizeInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.maxArtifactSizeInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize MaxArtifactSizeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationTagsList <a name="CleanroomsmlConfiguredModelAlgorithmAssociationTagsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.get"></a>

```csharp
private CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]

---


### CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmAssociationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>

---



