# `sagemakerTrialComponent` Submodule <a name="`sagemakerTrialComponent` Submodule" id="@cdktn/provider-awscc.sagemakerTrialComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerTrialComponent <a name="SagemakerTrialComponent" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component awscc_sagemaker_trial_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponent(Construct Scope, string Id, SagemakerTrialComponentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig">SagemakerTrialComponentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig">SagemakerTrialComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putInputArtifacts">PutInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties">PutMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putOutputArtifacts">PutOutputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putStatus">PutStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetInputArtifacts">ResetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetMetadataProperties">ResetMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOutputArtifacts">ResetOutputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputArtifacts` <a name="PutInputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putInputArtifacts"></a>

```csharp
private void PutInputArtifacts(IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentInputArtifacts> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putInputArtifacts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>>

---

##### `PutMetadataProperties` <a name="PutMetadataProperties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties"></a>

```csharp
private void PutMetadataProperties(SagemakerTrialComponentMetadataProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

---

##### `PutOutputArtifacts` <a name="PutOutputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putOutputArtifacts"></a>

```csharp
private void PutOutputArtifacts(IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentOutputArtifacts> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putOutputArtifacts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>>

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putParameters"></a>

```csharp
private void PutParameters(IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentParameters> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>>

---

##### `PutStatus` <a name="PutStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putStatus"></a>

```csharp
private void PutStatus(SagemakerTrialComponentStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putTags"></a>

```csharp
private void PutTags(IResolvable|SagemakerTrialComponentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetInputArtifacts` <a name="ResetInputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetInputArtifacts"></a>

```csharp
private void ResetInputArtifacts()
```

##### `ResetMetadataProperties` <a name="ResetMetadataProperties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetMetadataProperties"></a>

```csharp
private void ResetMetadataProperties()
```

##### `ResetOutputArtifacts` <a name="ResetOutputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOutputArtifacts"></a>

```csharp
private void ResetOutputArtifacts()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerTrialComponent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerTrialComponent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerTrialComponent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerTrialComponent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerTrialComponent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerTrialComponent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerTrialComponent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerTrialComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerTrialComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifacts">InputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap">SagemakerTrialComponentInputArtifactsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lineageGroupArn">LineageGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataProperties">MetadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference">SagemakerTrialComponentMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifacts">OutputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap">SagemakerTrialComponentOutputArtifactsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap">SagemakerTrialComponentParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.status">Status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference">SagemakerTrialComponentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList">SagemakerTrialComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentArn">TrialComponentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifactsInput">InputArtifactsInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataPropertiesInput">MetadataPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifactsInput">OutputArtifactsInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.statusInput">StatusInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentNameInput">TrialComponentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentName">TrialComponentName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputArtifacts`<sup>Required</sup> <a name="InputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifacts"></a>

```csharp
public SagemakerTrialComponentInputArtifactsMap InputArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap">SagemakerTrialComponentInputArtifactsMap</a>

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `LineageGroupArn`<sup>Required</sup> <a name="LineageGroupArn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lineageGroupArn"></a>

```csharp
public string LineageGroupArn { get; }
```

- *Type:* string

---

##### `MetadataProperties`<sup>Required</sup> <a name="MetadataProperties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataProperties"></a>

```csharp
public SagemakerTrialComponentMetadataPropertiesOutputReference MetadataProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference">SagemakerTrialComponentMetadataPropertiesOutputReference</a>

---

##### `OutputArtifacts`<sup>Required</sup> <a name="OutputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifacts"></a>

```csharp
public SagemakerTrialComponentOutputArtifactsMap OutputArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap">SagemakerTrialComponentOutputArtifactsMap</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parameters"></a>

```csharp
public SagemakerTrialComponentParametersMap Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap">SagemakerTrialComponentParametersMap</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.status"></a>

```csharp
public SagemakerTrialComponentStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference">SagemakerTrialComponentStatusOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tags"></a>

```csharp
public SagemakerTrialComponentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList">SagemakerTrialComponentTagsList</a>

---

##### `TrialComponentArn`<sup>Required</sup> <a name="TrialComponentArn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentArn"></a>

```csharp
public string TrialComponentArn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `InputArtifactsInput`<sup>Optional</sup> <a name="InputArtifactsInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifactsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentInputArtifacts> InputArtifactsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>>

---

##### `MetadataPropertiesInput`<sup>Optional</sup> <a name="MetadataPropertiesInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataPropertiesInput"></a>

```csharp
public IResolvable|SagemakerTrialComponentMetadataProperties MetadataPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

---

##### `OutputArtifactsInput`<sup>Optional</sup> <a name="OutputArtifactsInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifactsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentOutputArtifacts> OutputArtifactsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentParameters> ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.statusInput"></a>

```csharp
public IResolvable|SagemakerTrialComponentStatus StatusInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tagsInput"></a>

```csharp
public IResolvable|SagemakerTrialComponentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]

---

##### `TrialComponentNameInput`<sup>Optional</sup> <a name="TrialComponentNameInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentNameInput"></a>

```csharp
public string TrialComponentNameInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `TrialComponentName`<sup>Required</sup> <a name="TrialComponentName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentName"></a>

```csharp
public string TrialComponentName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerTrialComponentConfig <a name="SagemakerTrialComponentConfig" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TrialComponentName,
    string DisplayName = null,
    IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentInputArtifacts> InputArtifacts = null,
    SagemakerTrialComponentMetadataProperties MetadataProperties = null,
    IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentOutputArtifacts> OutputArtifacts = null,
    IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentParameters> Parameters = null,
    SagemakerTrialComponentStatus Status = null,
    IResolvable|SagemakerTrialComponentTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.trialComponentName">TrialComponentName</a></code> | <code>string</code> | The name of the trial component. Must be unique in your AWS account and is not case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.inputArtifacts">InputArtifacts</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>></code> | The input artifacts for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.metadataProperties">MetadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.outputArtifacts">OutputArtifacts</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>></code> | The output artifacts for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>></code> | The hyperparameters for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.status">Status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a></code> | The status of the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]</code> | A list of tags to associate with the trial component. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TrialComponentName`<sup>Required</sup> <a name="TrialComponentName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.trialComponentName"></a>

```csharp
public string TrialComponentName { get; set; }
```

- *Type:* string

The name of the trial component. Must be unique in your AWS account and is not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#trial_component_name SagemakerTrialComponent#trial_component_name}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#display_name SagemakerTrialComponent#display_name}

---

##### `InputArtifacts`<sup>Optional</sup> <a name="InputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.inputArtifacts"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentInputArtifacts> InputArtifacts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>>

The input artifacts for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#input_artifacts SagemakerTrialComponent#input_artifacts}

---

##### `MetadataProperties`<sup>Optional</sup> <a name="MetadataProperties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.metadataProperties"></a>

```csharp
public SagemakerTrialComponentMetadataProperties MetadataProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#metadata_properties SagemakerTrialComponent#metadata_properties}

---

##### `OutputArtifacts`<sup>Optional</sup> <a name="OutputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.outputArtifacts"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentOutputArtifacts> OutputArtifacts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>>

The output artifacts for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#output_artifacts SagemakerTrialComponent#output_artifacts}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.parameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentParameters> Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>>

The hyperparameters for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#parameters SagemakerTrialComponent#parameters}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.status"></a>

```csharp
public SagemakerTrialComponentStatus Status { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#status SagemakerTrialComponent#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.tags"></a>

```csharp
public IResolvable|SagemakerTrialComponentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]

A list of tags to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#tags SagemakerTrialComponent#tags}

---

### SagemakerTrialComponentInputArtifacts <a name="SagemakerTrialComponentInputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentInputArtifacts {
    string MediaType = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.mediaType">MediaType</a></code> | <code>string</code> | The media type of the artifact. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.value">Value</a></code> | <code>string</code> | The location of the artifact. |

---

##### `MediaType`<sup>Optional</sup> <a name="MediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.mediaType"></a>

```csharp
public string MediaType { get; set; }
```

- *Type:* string

The media type of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#media_type SagemakerTrialComponent#media_type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The location of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}

---

### SagemakerTrialComponentMetadataProperties <a name="SagemakerTrialComponentMetadataProperties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentMetadataProperties {
    string CommitId = null,
    string GeneratedBy = null,
    string ProjectId = null,
    string Repository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.commitId">CommitId</a></code> | <code>string</code> | The commit ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.generatedBy">GeneratedBy</a></code> | <code>string</code> | The entity this entity was generated by. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.projectId">ProjectId</a></code> | <code>string</code> | The project ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.repository">Repository</a></code> | <code>string</code> | The repository. |

---

##### `CommitId`<sup>Optional</sup> <a name="CommitId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.commitId"></a>

```csharp
public string CommitId { get; set; }
```

- *Type:* string

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#commit_id SagemakerTrialComponent#commit_id}

---

##### `GeneratedBy`<sup>Optional</sup> <a name="GeneratedBy" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.generatedBy"></a>

```csharp
public string GeneratedBy { get; set; }
```

- *Type:* string

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#generated_by SagemakerTrialComponent#generated_by}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#project_id SagemakerTrialComponent#project_id}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#repository SagemakerTrialComponent#repository}

---

### SagemakerTrialComponentOutputArtifacts <a name="SagemakerTrialComponentOutputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentOutputArtifacts {
    string MediaType = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.mediaType">MediaType</a></code> | <code>string</code> | The media type of the artifact. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.value">Value</a></code> | <code>string</code> | The location of the artifact. |

---

##### `MediaType`<sup>Optional</sup> <a name="MediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.mediaType"></a>

```csharp
public string MediaType { get; set; }
```

- *Type:* string

The media type of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#media_type SagemakerTrialComponent#media_type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The location of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}

---

### SagemakerTrialComponentParameters <a name="SagemakerTrialComponentParameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentParameters {
    double NumberValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.numberValue">NumberValue</a></code> | <code>double</code> | The numeric value of a numeric hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.stringValue">StringValue</a></code> | <code>string</code> | The string value of a categorical hyperparameter. |

---

##### `NumberValue`<sup>Optional</sup> <a name="NumberValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.numberValue"></a>

```csharp
public double NumberValue { get; set; }
```

- *Type:* double

The numeric value of a numeric hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#number_value SagemakerTrialComponent#number_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

The string value of a categorical hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#string_value SagemakerTrialComponent#string_value}

---

### SagemakerTrialComponentStatus <a name="SagemakerTrialComponentStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentStatus {
    string Message = null,
    string PrimaryStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.message">Message</a></code> | <code>string</code> | If the component failed, a message describing why. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.primaryStatus">PrimaryStatus</a></code> | <code>string</code> | The status of the trial component. |

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

If the component failed, a message describing why.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#message SagemakerTrialComponent#message}

---

##### `PrimaryStatus`<sup>Optional</sup> <a name="PrimaryStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.primaryStatus"></a>

```csharp
public string PrimaryStatus { get; set; }
```

- *Type:* string

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#primary_status SagemakerTrialComponent#primary_status}

---

### SagemakerTrialComponentTags <a name="SagemakerTrialComponentTags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#key SagemakerTrialComponent#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerTrialComponentInputArtifactsMap <a name="SagemakerTrialComponentInputArtifactsMap" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentInputArtifactsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.get"></a>

```csharp
private SagemakerTrialComponentInputArtifactsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentInputArtifacts> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>>

---


### SagemakerTrialComponentInputArtifactsOutputReference <a name="SagemakerTrialComponentInputArtifactsOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentInputArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetMediaType">ResetMediaType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMediaType` <a name="ResetMediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetMediaType"></a>

```csharp
private void ResetMediaType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaTypeInput">MediaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaType">MediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MediaTypeInput`<sup>Optional</sup> <a name="MediaTypeInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaTypeInput"></a>

```csharp
public string MediaTypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `MediaType`<sup>Required</sup> <a name="MediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaType"></a>

```csharp
public string MediaType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerTrialComponentInputArtifacts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>

---


### SagemakerTrialComponentMetadataPropertiesOutputReference <a name="SagemakerTrialComponentMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentMetadataPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetCommitId">ResetCommitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy">ResetGeneratedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitId` <a name="ResetCommitId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetCommitId"></a>

```csharp
private void ResetCommitId()
```

##### `ResetGeneratedBy` <a name="ResetGeneratedBy" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy"></a>

```csharp
private void ResetGeneratedBy()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitIdInput">CommitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedByInput">GeneratedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitId">CommitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedBy">GeneratedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitIdInput`<sup>Optional</sup> <a name="CommitIdInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitIdInput"></a>

```csharp
public string CommitIdInput { get; }
```

- *Type:* string

---

##### `GeneratedByInput`<sup>Optional</sup> <a name="GeneratedByInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedByInput"></a>

```csharp
public string GeneratedByInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `CommitId`<sup>Required</sup> <a name="CommitId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitId"></a>

```csharp
public string CommitId { get; }
```

- *Type:* string

---

##### `GeneratedBy`<sup>Required</sup> <a name="GeneratedBy" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedBy"></a>

```csharp
public string GeneratedBy { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerTrialComponentMetadataProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

---


### SagemakerTrialComponentOutputArtifactsMap <a name="SagemakerTrialComponentOutputArtifactsMap" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentOutputArtifactsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.get"></a>

```csharp
private SagemakerTrialComponentOutputArtifactsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentOutputArtifacts> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>>

---


### SagemakerTrialComponentOutputArtifactsOutputReference <a name="SagemakerTrialComponentOutputArtifactsOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentOutputArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetMediaType">ResetMediaType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMediaType` <a name="ResetMediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetMediaType"></a>

```csharp
private void ResetMediaType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaTypeInput">MediaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaType">MediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MediaTypeInput`<sup>Optional</sup> <a name="MediaTypeInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaTypeInput"></a>

```csharp
public string MediaTypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `MediaType`<sup>Required</sup> <a name="MediaType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaType"></a>

```csharp
public string MediaType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerTrialComponentOutputArtifacts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>

---


### SagemakerTrialComponentParametersMap <a name="SagemakerTrialComponentParametersMap" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentParametersMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.get"></a>

```csharp
private SagemakerTrialComponentParametersOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SagemakerTrialComponentParameters> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>>

---


### SagemakerTrialComponentParametersOutputReference <a name="SagemakerTrialComponentParametersOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetNumberValue">ResetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumberValue` <a name="ResetNumberValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetNumberValue"></a>

```csharp
private void ResetNumberValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValueInput">NumberValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValue">NumberValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberValueInput`<sup>Optional</sup> <a name="NumberValueInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValueInput"></a>

```csharp
public double NumberValueInput { get; }
```

- *Type:* double

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValue"></a>

```csharp
public double NumberValue { get; }
```

- *Type:* double

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerTrialComponentParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>

---


### SagemakerTrialComponentStatusOutputReference <a name="SagemakerTrialComponentStatusOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetPrimaryStatus">ResetPrimaryStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetPrimaryStatus` <a name="ResetPrimaryStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetPrimaryStatus"></a>

```csharp
private void ResetPrimaryStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatusInput">PrimaryStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatus">PrimaryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `PrimaryStatusInput`<sup>Optional</sup> <a name="PrimaryStatusInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatusInput"></a>

```csharp
public string PrimaryStatusInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `PrimaryStatus`<sup>Required</sup> <a name="PrimaryStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatus"></a>

```csharp
public string PrimaryStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerTrialComponentStatus InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

---


### SagemakerTrialComponentTagsList <a name="SagemakerTrialComponentTagsList" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.get"></a>

```csharp
private SagemakerTrialComponentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerTrialComponentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>[]

---


### SagemakerTrialComponentTagsOutputReference <a name="SagemakerTrialComponentTagsOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerTrialComponentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerTrialComponentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>

---



