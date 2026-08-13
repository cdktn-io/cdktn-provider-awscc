# `cleanroomsmlConfiguredModelAlgorithm` Submodule <a name="`cleanroomsmlConfiguredModelAlgorithm` Submodule" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsmlConfiguredModelAlgorithm <a name="CleanroomsmlConfiguredModelAlgorithm" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm awscc_cleanroomsml_configured_model_algorithm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithm(Construct Scope, string Id, CleanroomsmlConfiguredModelAlgorithmConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig">CleanroomsmlConfiguredModelAlgorithmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig">CleanroomsmlConfiguredModelAlgorithmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putInferenceContainerConfig">PutInferenceContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig">PutTrainingContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetInferenceContainerConfig">ResetInferenceContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTrainingContainerConfig">ResetTrainingContainerConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInferenceContainerConfig` <a name="PutInferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putInferenceContainerConfig"></a>

```csharp
private void PutInferenceContainerConfig(CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putInferenceContainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTags"></a>

```csharp
private void PutTags(IResolvable|CleanroomsmlConfiguredModelAlgorithmTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>[]

---

##### `PutTrainingContainerConfig` <a name="PutTrainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig"></a>

```csharp
private void PutTrainingContainerConfig(CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInferenceContainerConfig` <a name="ResetInferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetInferenceContainerConfig"></a>

```csharp
private void ResetInferenceContainerConfig()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTrainingContainerConfig` <a name="ResetTrainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTrainingContainerConfig"></a>

```csharp
private void ResetTrainingContainerConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsmlConfiguredModelAlgorithm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsmlConfiguredModelAlgorithm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsmlConfiguredModelAlgorithm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsmlConfiguredModelAlgorithm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsmlConfiguredModelAlgorithm.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CleanroomsmlConfiguredModelAlgorithm resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsmlConfiguredModelAlgorithm to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsmlConfiguredModelAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsmlConfiguredModelAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.configuredModelAlgorithmArn">ConfiguredModelAlgorithmArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfig">InferenceContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList">CleanroomsmlConfiguredModelAlgorithmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfig">TrainingContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfigInput">InferenceContainerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfigInput">TrainingContainerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfiguredModelAlgorithmArn`<sup>Required</sup> <a name="ConfiguredModelAlgorithmArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.configuredModelAlgorithmArn"></a>

```csharp
public string ConfiguredModelAlgorithmArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InferenceContainerConfig`<sup>Required</sup> <a name="InferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfig"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference InferenceContainerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tags"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList">CleanroomsmlConfiguredModelAlgorithmTagsList</a>

---

##### `TrainingContainerConfig`<sup>Required</sup> <a name="TrainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfig"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference TrainingContainerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InferenceContainerConfigInput`<sup>Optional</sup> <a name="InferenceContainerConfigInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfigInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig InferenceContainerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tagsInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>[]

---

##### `TrainingContainerConfigInput`<sup>Optional</sup> <a name="TrainingContainerConfigInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfigInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig TrainingContainerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsmlConfiguredModelAlgorithmConfig <a name="CleanroomsmlConfiguredModelAlgorithmConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string RoleArn,
    string Description = null,
    CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig InferenceContainerConfig = null,
    string KmsKeyArn = null,
    IResolvable|CleanroomsmlConfiguredModelAlgorithmTags[] Tags = null,
    CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig TrainingContainerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#role_arn CleanroomsmlConfiguredModelAlgorithm#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#description CleanroomsmlConfiguredModelAlgorithm#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.inferenceContainerConfig">InferenceContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#inference_container_config CleanroomsmlConfiguredModelAlgorithm#inference_container_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#kms_key_arn CleanroomsmlConfiguredModelAlgorithm#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.trainingContainerConfig">TrainingContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#training_container_config CleanroomsmlConfiguredModelAlgorithm#training_container_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#role_arn CleanroomsmlConfiguredModelAlgorithm#role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#description CleanroomsmlConfiguredModelAlgorithm#description}.

---

##### `InferenceContainerConfig`<sup>Optional</sup> <a name="InferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.inferenceContainerConfig"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig InferenceContainerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#inference_container_config CleanroomsmlConfiguredModelAlgorithm#inference_container_config}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#kms_key_arn CleanroomsmlConfiguredModelAlgorithm#kms_key_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.tags"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>[]

An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#tags CleanroomsmlConfiguredModelAlgorithm#tags}

---

##### `TrainingContainerConfig`<sup>Optional</sup> <a name="TrainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.trainingContainerConfig"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig TrainingContainerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#training_container_config CleanroomsmlConfiguredModelAlgorithm#training_container_config}.

---

### CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig <a name="CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig {
    string ImageUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.property.imageUri">ImageUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}. |

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}.

---

### CleanroomsmlConfiguredModelAlgorithmTags <a name="CleanroomsmlConfiguredModelAlgorithmTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#key CleanroomsmlConfiguredModelAlgorithm#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#value CleanroomsmlConfiguredModelAlgorithm#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#key CleanroomsmlConfiguredModelAlgorithm#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#value CleanroomsmlConfiguredModelAlgorithm#value}.

---

### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig {
    string[] Arguments = null,
    string[] Entrypoint = null,
    string ImageUri = null,
    IResolvable|CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions[] MetricDefinitions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.arguments">Arguments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#arguments CleanroomsmlConfiguredModelAlgorithm#arguments}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.entrypoint">Entrypoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#entrypoint CleanroomsmlConfiguredModelAlgorithm#entrypoint}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.imageUri">ImageUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.metricDefinitions">MetricDefinitions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#metric_definitions CleanroomsmlConfiguredModelAlgorithm#metric_definitions}. |

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.arguments"></a>

```csharp
public string[] Arguments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#arguments CleanroomsmlConfiguredModelAlgorithm#arguments}.

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.entrypoint"></a>

```csharp
public string[] Entrypoint { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#entrypoint CleanroomsmlConfiguredModelAlgorithm#entrypoint}.

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}.

---

##### `MetricDefinitions`<sup>Optional</sup> <a name="MetricDefinitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.metricDefinitions"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions[] MetricDefinitions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#metric_definitions CleanroomsmlConfiguredModelAlgorithm#metric_definitions}.

---

### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions {
    string Name = null,
    string Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#regex CleanroomsmlConfiguredModelAlgorithm#regex}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanroomsml_configured_model_algorithm#regex CleanroomsmlConfiguredModelAlgorithm#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resetImageUri"></a>

```csharp
private void ResetImageUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

---


### CleanroomsmlConfiguredModelAlgorithmTagsList <a name="CleanroomsmlConfiguredModelAlgorithmTagsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.get"></a>

```csharp
private CleanroomsmlConfiguredModelAlgorithmTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>[]

---


### CleanroomsmlConfiguredModelAlgorithmTagsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>

---


### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get"></a>

```csharp
private CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>[]

---


### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>

---


### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.putMetricDefinitions">PutMetricDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetMetricDefinitions">ResetMetricDefinitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricDefinitions` <a name="PutMetricDefinitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.putMetricDefinitions"></a>

```csharp
private void PutMetricDefinitions(IResolvable|CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.putMetricDefinitions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>[]

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetEntrypoint"></a>

```csharp
private void ResetEntrypoint()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetImageUri"></a>

```csharp
private void ResetImageUri()
```

##### `ResetMetricDefinitions` <a name="ResetMetricDefinitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetMetricDefinitions"></a>

```csharp
private void ResetMetricDefinitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitions">MetricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypointInput">EntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitionsInput">MetricDefinitionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.arguments">Arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypoint">Entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricDefinitions`<sup>Required</sup> <a name="MetricDefinitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitions"></a>

```csharp
public CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList MetricDefinitions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.argumentsInput"></a>

```csharp
public string[] ArgumentsInput { get; }
```

- *Type:* string[]

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypointInput"></a>

```csharp
public string[] EntrypointInput { get; }
```

- *Type:* string[]

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `MetricDefinitionsInput`<sup>Optional</sup> <a name="MetricDefinitionsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitionsInput"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions[] MetricDefinitionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>[]

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.arguments"></a>

```csharp
public string[] Arguments { get; }
```

- *Type:* string[]

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypoint"></a>

```csharp
public string[] Entrypoint { get; }
```

- *Type:* string[]

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

---



